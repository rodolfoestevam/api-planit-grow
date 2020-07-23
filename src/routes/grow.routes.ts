import { Router } from 'express'
import GrowRepository from '../repositories/GrowRepository'
import CreateGrowInfoService from '../services/CreateGrowInfoService'
import { getCustomRepository } from 'typeorm'

const growRouter = Router()
// const growRepository = new GrowRepository()

growRouter.get('/', async (request, response) => {
  const growsRepository = getCustomRepository(GrowRepository)
  const grows = await growsRepository.find()
  return response.json(grows)
})

growRouter.post('/', async (request, response) => {
  try {
    const { growName, environmentType, growMedium, strainName } = request.body
    const createGrowInfo = new CreateGrowInfoService()
    const grow = await createGrowInfo.execute({
      growName,
      environmentType,
      growMedium,
      strainName,
    })
    return response.json(grow)
  } catch (error) {
    return response.status(404).json({
      error:
        error.message
    })
  }
})



export default growRouter
