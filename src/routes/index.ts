import { Router } from 'express'
import growRoutes from './grow.routes'

const routes = Router()

routes.use('/grow', growRoutes)


export default routes;