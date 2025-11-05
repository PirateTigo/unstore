import cors from 'cors'
import express from 'express'

import { type AppContext, createAppContext } from './lib/ctx'
import { applyTrpcToApp } from './lib/trpc'
import { trpcRouter } from './router'

const PORT = 3000

void (async () => {
  let ctx: AppContext | null = null

  try {
    ctx = createAppContext()
    const unstoreApp = express()

    unstoreApp.use(cors())

    unstoreApp.get('/ping', (req, res) => {
      res.send('pong')
    })

    applyTrpcToApp(unstoreApp, ctx, trpcRouter)

    unstoreApp.listen(PORT, () => {
      console.info(`Listening at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error)
    void ctx?.stop()
  }
})()
