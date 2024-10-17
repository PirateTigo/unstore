import { createTRPCReact } from '@trpc/react-query'

import type { TrpcRouter } from '@backend/trpc'

export const trpc = createTRPCReact<TrpcRouter>()