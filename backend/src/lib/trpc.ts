import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'

import { type TrpcRouter } from '../router'

export const trpc = initTRPC.create()

export const applyTrpcToApp = (app: Express, trpcRouter: TrpcRouter) => {
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
    }),
  )
}
