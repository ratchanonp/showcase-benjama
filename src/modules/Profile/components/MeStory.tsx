import AuthStoryCard from "@/components/StoryCard/AuthStoryCard";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useGetStoriesByUserIdQuery } from "../../../features/story/storySlice";

export default function MeStory() {
  const { user } = useContext(AuthContext);
  const { data: stories, isLoading } = useGetStoriesByUserIdQuery(
    user?.uid ?? ""
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-5 gap-4 pt-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-white aspect-square p-5 animate-pulse">
            <div className="h-4 bg-neutral-100 rounded w-3/4"></div>
            <div className="h-4 bg-neutral-100 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-neutral-100 rounded w-3/4 mt-2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stories) {
    return <div>No stories</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4 pt-4">
      {stories.map((story) => (
        <AuthStoryCard showCategory key={story.id} story={story} />
      ))}
    </div>
  );
}
