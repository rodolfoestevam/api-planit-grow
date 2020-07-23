import { EntityRepository, Repository } from 'typeorm'
import GrowInfo from '../models/GrowInfo'

@EntityRepository(GrowInfo)
class GrowRepository extends Repository<GrowInfo> {
  public async findByDate(date: Date): Promise<GrowInfo | null> {
    const findGrow = await this.findOne({

    })
    return findGrow || null
  }
}

export default GrowRepository
