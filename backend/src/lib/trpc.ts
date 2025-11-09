import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'

import { type TrpcRouter } from '../router'
import { type AppContext } from './ctx'

export const loadTRPC = async () => {
  const { SuperJSON } = await import('superjson')

  return initTRPC.context<AppContext>().create({
    transformer: SuperJSON,
  })
};

export const applyTrpcToApp = async (
  expressApp: Express,
  appContext: AppContext,
  trpcRouter: TrpcRouter,
) => {
  expressApp.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext: () => appContext,
    }),
  )

  const { expressHandler } = await import('trpc-playground/handlers/express')
  expressApp.use(
    '/trpc-playground',
    await expressHandler({
      trpcApiEndpoint: '/trpc',
      playgroundEndpoint: '/trpc-playground',
      router: trpcRouter,
      request: {
        superjson: true,
      },
    }),
  )
}
