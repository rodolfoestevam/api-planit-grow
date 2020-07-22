import GrowInfo from '../models/GrowInfo'
import GrowRepository from '../repositories/GrowRepository'

interface Request {
  growName: string
  environmentType: string
  growMedium: string
  strainName: string
}

class CreateGrowInfoService {
  private growsRepository: GrowRepository

  constructor (growsRepository: GrowRepository) {
    this.growsRepository = growsRepository
  }

  public execute ({
    growName,
    environmentType,
    growMedium,
    strainName,
  }: Request): GrowInfo {
    const grow = this.growsRepository.create({
      growName,
      environmentType,
      growMedium,
      strainName,
    })

    return grow
  }
}

export default CreateGrowInfoService
