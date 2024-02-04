import cors from 'cors'
import express, { Application } from 'express'
import { router } from './routes'

export const middleware = (app: Application) => {
  app.use(cors())
  app.use(express.json())
  app.use(router)
}
