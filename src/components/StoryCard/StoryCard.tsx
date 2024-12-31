import { AuthContext } from "@/contexts/AuthContext";
import { IStory } from "@/interfaces/story.inteface";
import { useContext } from "react";
import AuthStoryCard from "./AuthStoryCard";
import NotAuthStoryCard from "./NotAuthStoryCard";

interface Props {
  story: IStory;
  showCategory?: boolean;
}

export default function StoryCard(props: Props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return <NotAuthStoryCard {...props} />;
  return <AuthStoryCard {...props} />;
}
