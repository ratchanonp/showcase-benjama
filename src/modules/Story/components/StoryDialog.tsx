import { Story } from "@/components/StoryCard/AuthStoryCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StoryCard from "./StoryCard";

interface Props {
  story: Story;
}

export default function StoryDialog({ story }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <StoryCard story={story} />
      </DialogTrigger>
      <DialogContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{story.title}</h1>
          <p className="text-sm text-gray-500">By {story.authorName}</p>
          <p className="mt-4">{story.content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
