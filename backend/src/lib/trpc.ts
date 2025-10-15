import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'

import { type TrpcRouter } from '../router'

export const trpc = await (async () =>
  initTRPC.create({
    transformer: (await import('superjson')).SuperJSON,
  }))()

export const applyTrpcToApp = (app: Express, trpcRouter: TrpcRouter) => {
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
    }),
  )
}
