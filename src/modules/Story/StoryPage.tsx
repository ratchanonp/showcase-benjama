import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useGetCommentsQuery } from "@/features/comment/commentSlice";
import MainLayout from "@/layouts/MainLayout";
import { getRouteApi } from "@tanstack/react-router";
import { Loader2Icon, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import {
  useGetStoryQuery,
  useViewStoryMutation,
} from "../../features/story/storySlice";
import { categories } from "../Category/components/CategoriesNav";
import CommentForm from "./components/CommentForm";

export default function StoryPage() {
  const route = getRouteApi("/story/$storyId");
  const { storyId } = route.useParams();
  const { data: story, isLoading } = useGetStoryQuery(storyId);
  const { data: comments } = useGetCommentsQuery(storyId);
  const [viewStory] = useViewStoryMutation();

  useEffect(() => {
    const view = async () => {
      if (!storyId) return;
      await viewStory(storyId);
    };

    view();
  }, [storyId]);

  if (isLoading) {
    return (
      <MainLayout>
        <main>
          <div className="flex justify-center items-center h-96">
            <Loader2Icon className="w-8 h-8 animate-spin" />
          </div>
        </main>
      </MainLayout>
    );
  }

  if (!story) {
    return (
      <MainLayout>
        <main>
          <div className="flex justify-center items-center h-96">
            <p>Story not found</p>
          </div>
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-neutral-100">
        <header className="mx-auto max-w-screen-xl flex flex-col items-center p-8 space-y-2">
          <Badge>
            {
              categories.find(
                (category) => category.categoryId === story.categoryId
              )?.categoryName
            }
          </Badge>
          <h1 className="text-2xl capitalize">{story.title}</h1>
          <p className="text-neutral-400">{story.authorName}</p>
        </header>
        <main className=" rounded-t-2xl bg-white mx-auto max-w-screen-xl p-8 space-y-8">
          <section className="grid md:grid-cols-3 gap-8">
            <img
              className="w-full h-auto object-cover rounded-xl col-span-2"
              src={story.image}
              alt={story.title}
            />
            <div className="font-noto_looped ">
              <p className="first-letter:text-4xl text-sm leading-relaxed">
                {story.content}
              </p>
            </div>
          </section>
          <Separator />
          <section className="bg-neutral-100 p-4 rounded-xl space-y-2">
            <header>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle size={20} className="mr-2" />
                  <h2 className="text-lg font-semibold">Comment</h2>
                </div>
                <div>
                  <p className="text-neutral-400">0 Comments</p>
                </div>
              </div>
            </header>
            <div className="space-y-2">
              {comments?.map((comment) => (
                <div key={comment.id} className="flex space-x-2">
                  <div className="w-8 h-8 bg-neutral-200 rounded-full">
                    <img
                      src={`
                      https://avatar.vercel.sh/${comment.userId}
                    `}
                      alt={comment.userDisplayName}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">{comment.userDisplayName}</p>
                      <p className="text-neutral-400 text-sm">
                        {new Date(comment.postedAt * 1000).toLocaleDateString(
                          "th-TH",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          }
                        )}
                      </p>
                    </div>
                    <p>{comment.content}</p>
                  </div>
                </div>
              ))}
              <CommentForm />
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
