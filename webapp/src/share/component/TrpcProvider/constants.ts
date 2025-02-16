import type { TrpcRouter } from '@backend/router'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<TrpcRouter>()
