import { Router } from 'express'
import GrowRepository from '../repositories/GrowRepository'
import CreateGrowInfoService from '../services/CreateGrowInfoService'

const growRouter = Router()
const growRepository = new GrowRepository()
growRouter.post('/', (request, response) => {
  try {
    const { growName, environmentType, growMedium, strainName } = request.body
    const createGrowInfo = new CreateGrowInfoService(growRepository)
    const grow = createGrowInfo.execute({
      growName,
      environmentType,
      growMedium,
      strainName,
    })
    return response.json(grow)
  } catch (error) {
    return response.status(404).json({ error: error.message })
  }
})

growRouter.get('/', (request, response) => {
  const growsInfo = growRepository.all()

  return response.json(growsInfo)
})

export default growRouter
