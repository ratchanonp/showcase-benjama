import { AuthContext } from "@/contexts/AuthContext";
import {
  useIsLikedQuery,
  useLikesCountQuery,
  useLikeStoryMutation,
  useUnlikeStoryMutation,
} from "@/features/like/likeSlice";
import { categories } from "@/modules/Category/components/CategoriesNav";
import { Link } from "@tanstack/react-router";
import { Heart, Loader2Icon } from "lucide-react";
import { useContext, useMemo } from "react";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export interface Story {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  likes: number;
  categoryId: string;
  content: string;
  image: string;
  postedAt: number;
}

interface Props {
  story: Story;
  showCategory?: boolean;
}

export default function AuthStoryCard(props: Props) {
  const { story, showCategory } = props;
  const { user } = useContext(AuthContext);
  const { data: likeId } = useIsLikedQuery({
    storyId: story.id,
    userId: user?.uid ?? "none",
  });
  const { data: likesCount, isLoading: isLikesCountLoading } =
    useLikesCountQuery(story.id);
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
    <div className="rounded-2xl overflow-hidden h-full aspect-square bg-white p-4 flex flex-col">
      <Link
        className=" space-y-1 flex flex-col flex-1"
        to={`/story/${story.id}`}
      >
        {showCategory && (
          <Badge className="w-fit text-xs" variant="secondary">
            {
              categories.find((c) => c.categoryId === story.categoryId)
                ?.categoryName
            }
          </Badge>
        )}
        <h3 className="font-semibold line-clamp-2 capitalize">{story.title}</h3>
        <p className="text-xs line-clamp-1 text-neutral-400">
          {story.authorName}
        </p>
        {!isLikesCountLoading ? (
          <p className="inline-flex items-center text-pink-500">
            <Heart className="w-4 h-4 mr-1 text-pink-500" fill="currentColor" />
            {new Intl.NumberFormat().format(likesCount!)}
          </p>
        ) : (
          <>
            <Heart className="w-4 h-4 mr-1 text-pink-500" />
            <Skeleton className="w-10 h-4 animate-pulse" />
          </>
        )}
      </Link>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className={`text-pink-500 rounded-full bg-neutral-50 flex items-center justify-center w-fit mt-auto ${
                isLiked
                  ? "bg-pink-500 text-white hover:bg-pink-600 hover:text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-pink-500"
              } `}
              onClick={handleLike}
              disabled={likeLoading || unlikeLoading}
              variant="ghost"
            >
              {likeLoading || unlikeLoading ? (
                <>
                  <Loader2Icon className="w-4 h-4 animate-spin" />
                  <p>Processing</p>
                </>
              ) : isLiked ? (
                <>
                  <Heart className="w-4 h-4 " fill="currentColor" /> Like
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4" /> Like
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isLiked ? "Unlike" : "Like"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
