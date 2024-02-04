import { Request, Response, Router } from 'express'

const router = Router()
router.get('/', (req: Request, res: Response) => console.log(req, res))

export { router }
