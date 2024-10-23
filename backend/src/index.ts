import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'

import { trpcRouter } from './trpc'

const PORT = 3000

const unstoreApp = express()

unstoreApp.use(cors())

unstoreApp.get('/ping', (req, res) => {
  res.send('pong')
})

unstoreApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  }),
)

unstoreApp.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}`)
})
