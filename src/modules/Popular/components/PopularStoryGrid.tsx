import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IStory } from "@/interfaces/story.inteface";
import { categories } from "@/modules/Category/components/CategoriesNav";
import { Link } from "@tanstack/react-router";

interface Props {
  popularStories: IStory[];
}

export default function PopularStoryGrid({ popularStories }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col space-y-2">
        <Link
          to={"/story/$storyId"}
          params={{
            storyId: popularStories[0].id,
          }}
          className="relative "
        >
          <div className=" aspect-square bg-gradient-to-r from-violet-200 to-pink-200 w-full h-full rounded-xl" />
          <p className="absolute top-5 right-5 font-semibold text-6xl aspect-square">
            1
          </p>
        </Link>
        <div className="space-y-4">
          <div>
            <Badge className="text-xs" variant="secondary">
              {
                categories.find(
                  (c) => c.categoryId === popularStories[0].categoryId
                )?.categoryName
              }
            </Badge>
            <h2 className="font-semibold text-xl">{popularStories[0].title}</h2>
            <p className="text-sm text-neutral-500">
              {popularStories[0].authorName}
            </p>
          </div>
          <p className="line-clamp-2 text-ellipsis text-sm text-neutral-500">
            {popularStories[0].content}
          </p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-2 h-fit">
        {popularStories.slice(1).map((story, index) => (
          <div key={story.id}>
            <Link
              to="/story/$storyId"
              params={{
                storyId: story.id,
              }}
              className="flex flex-row space-x-4 bg-white p-4 items-center"
            >
              <div className="relative aspect-square bg-gradient-to-r from-violet-200 to-pink-200 w-20 h-20 rounded-xl" />
              <p className="font-semibold text-lg">{index + 2}</p>
              <div className="flex flex-col">
                <Badge className="text-xs w-fit" variant="secondary">
                  {
                    categories.find((c) => c.categoryId === story.categoryId)
                      ?.categoryName
                  }
                </Badge>
                <h2 className="font-semibold text-xl">{story.title}</h2>
                <p className="text-sm text-neutral-500">{story.authorName}</p>
              </div>
            </Link>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
