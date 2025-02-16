import { trpc } from '../lib/trpc'

export const trpcRouter = trpc.router({})

export type TrpcRouter = typeof trpcRouter
