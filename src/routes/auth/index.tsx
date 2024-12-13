import AuthPage from '@/modules/Auth/AuthPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  component: AuthPage,
})
