import { Story } from "@/components/StoryCard/AuthStoryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AuthContext } from "@/contexts/AuthContext";
import {
  useIsLikedQuery,
  useLikesCountQuery,
  useLikeStoryMutation,
  useUnlikeStoryMutation,
} from "@/features/like/likeSlice";
import { HeartIcon } from "lucide-react";
import { useContext, useMemo } from "react";
import { toast } from "sonner";

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  const { title, authorName } = story;
  const { user } = useContext(AuthContext);
  const { data: likeId } = useIsLikedQuery({
    storyId: story.id,
    userId: user?.uid ?? "none",
  });
  const { data: likesCount } = useLikesCountQuery(story.id);
  const [like, { isLoading: likeLoading }] = useLikeStoryMutation();
  const [unlike, { isLoading: unlikeLoading }] = useUnlikeStoryMutation();

  const isLiked = useMemo(() => likeId !== null, [likeId]);

  async function handleLike() {
    if (isLiked) {
      await unlike({ likeId: likeId!, storyId: story.id, userId: user!.uid })
        .unwrap()
        .then(() => {
          toast.success("Unliked story");
        });
    } else {
      await like({ storyId: story.id, userId: user?.uid ?? "none" })
        .unwrap()
        .then(() => {
          toast.success("Liked story");
        });
    }
  }

  return (
    <Card className="flex w-full h-full aspect-square bg-gradient-to-r from-violet-200 to-pink-200">
      <CardContent className="p-5 flex flex-col h-full w-full">
        <h3 className=" capitalize font-semibold ">{title}</h3>
        <p className="text-xs text-neutral-500">{authorName}</p>
        <Button
          size="sm"
          variant="outline"
          className="text-neutral-500 self-end mt-auto"
          onClick={handleLike}
        >
          <HeartIcon
            fill="currentColor"
            className={`
                w-4 h-4
                ${isLiked ? "text-red-500" : ""}
                  
                `}
          />
          {likesCount}
        </Button>
      </CardContent>
    </Card>
  );
}
