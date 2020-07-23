import GrowInfo from '../models/GrowInfo'
import GrowRepository from '../repositories/GrowRepository'
import { getCustomRepository } from 'typeorm'
interface Request {
  growName: string
  environmentType: string
  growMedium: string
  strainName: string
}

class CreateGrowInfoService {
  public async execute({
    growName,
    environmentType,
    growMedium,
    strainName,
  }: Request): Promise<GrowInfo> {
    const growRepository = getCustomRepository(GrowRepository)

    const grow = growRepository.create({
      growName,
      environmentType,
      growMedium,
      strainName
    })

    await growRepository.save(grow)
    return grow
  }
}

export default CreateGrowInfoService
