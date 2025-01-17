import process from 'node:process'

import { createRequestHandler } from '@remix-run/express'
import express from 'express'

const isProduction = process.env.NODE_ENV === 'production'
const viteDevServer = isProduction
  ? null
  : await import('vite').then(vite =>
      vite.createServer({
        server: { middlewareMode: true }
      })
    )

const app = express()
app.use(viteDevServer ? viteDevServer.middlewares : express.static('build/client'))

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule('virtual:remix/server-build')
  : await import('./build/server/index.js')

app.all('*', createRequestHandler({ build }))

app.listen(3000, () => {
  console.log('App listening on http://localhost:3000', { isProduction })
})
