import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({})

export type TrpcRouter = typeof trpcRouter