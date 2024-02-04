import express from 'express'
import helmet from 'helmet'
import { DB, Teardown, env, middleware } from './config'

export const start = async () => {
  const app = express()

  env()
  middleware(app)
  helmet()
  await DB.init()
  Teardown.init()

  return app
}
