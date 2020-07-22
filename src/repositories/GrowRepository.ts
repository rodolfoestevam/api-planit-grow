import GrowInfo from '../models/GrowInfo'

interface GrowInfoDTO {
  growName: string
  environmentType: string
  growMedium: string
  strainName: string
}

class GrowRepository {
  private grows: GrowInfo[]

  constructor () {
    this.grows = []
  }
  public create ({
    growName,
    environmentType,
    growMedium,
    strainName,
  }: GrowInfoDTO): GrowInfo {
    const grow = new GrowInfo({
      growName,
      environmentType,
      growMedium,
      strainName,
    })
    this.grows.push(grow)
    return grow
  }

  public all (): GrowInfo[] {
    return this.grows
  }
}

export default GrowRepository
