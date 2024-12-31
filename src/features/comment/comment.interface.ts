export interface IComment {
  id: string;
  storyId: string;
  userId: string;
  userDisplayName: string;
  content: string;
  postedAt: number;
  isApproved: boolean;
}
