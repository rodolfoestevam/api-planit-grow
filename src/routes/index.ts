import { Router } from 'express'
import growRoutes from './grow.routes'
import userRoutes from './user.routes'
import sessionsRoutes from './sessions.routes'

const routes = Router()

routes.use('/grow', growRoutes)
routes.use('/user', userRoutes)
routes.use('/sessions', sessionsRoutes)


export default routes;