import { useLikesCountQuery } from "@/features/like/likeSlice";
import { IStory } from "@/interfaces/story.inteface";
import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { categories } from "@/modules/Category/components/CategoriesNav";

interface Props {
  story: IStory;
  showCategory?: boolean;
}

export default function NotAuthStoryCard(props: Props) {
  const { story, showCategory } = props;
  const { data: likesCount, isLoading: isLikesCountLoading } =
    useLikesCountQuery(story.id);

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
    </div>
  );
}
