import cors from 'cors'
import express from 'express'

import { applyTrpcToApp } from './lib/trpc'
import { trpcRouter } from './router'

const PORT = 3000

const unstoreApp = express()

unstoreApp.use(cors())

unstoreApp.get('/ping', (req, res) => {
  res.send('pong')
})

applyTrpcToApp(unstoreApp, trpcRouter)

unstoreApp.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}`)
})
