import type { TrpcRouter } from '@backend/trpc'
import { createTRPCReact } from '@trpc/react-query'


export const trpc = createTRPCReact<TrpcRouter>()
