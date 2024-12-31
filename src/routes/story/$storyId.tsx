import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/story/$storyId')({
  component: lazyRouteComponent(() => import('@/modules/Story/StoryPage')),
})
