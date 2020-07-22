import { uuid } from 'uuidv4'

class GrowInfo {
  id: string
  growName: string
  environmentType: string
  growMedium: string
  strainName: string

  constructor ({
    growName,
    environmentType,
    growMedium,
    strainName,
  }: Omit<GrowInfo, 'id'>) {
    this.id = uuid()
    this.growName = growName
    this.environmentType = environmentType
    this.growMedium = growMedium
    this.strainName = strainName
  }
}

export default GrowInfo
