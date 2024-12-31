import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/AuthContext";
import { IComment } from "@/features/comment/comment.interface";
import { useAddCommentMutation } from "@/features/comment/commentSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRouteApi } from "@tanstack/react-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const commentFormSchema = z.object({
  comment: z.string().min(1),
});

export default function CommentForm() {
  const route = getRouteApi("/story/$storyId");
  const { storyId } = route.useParams();
  const { user } = useContext(AuthContext);
  const [addComment] = useAddCommentMutation();

  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      comment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof commentFormSchema>) {
    if (!user) return;

    const commentPayload: Omit<IComment, "id" | "postedAt" | "isApproved"> = {
      storyId,
      userId: user!.uid,
      userDisplayName: user!.displayName!,
      content: data.comment,
    };

    await addComment(commentPayload)
      .unwrap()
      .then(() => {
        toast.success("Comment added");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to add comment");
      });
  }

  if (!user) {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your comment here"
                  className=" resize-none bg-white"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Comment</Button>
      </form>
    </Form>
  );
}
