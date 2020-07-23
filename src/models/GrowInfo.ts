import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm'
@Entity('grows')
class GrowInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  growName: string

  @Column()
  environmentType: string
  
  @Column()
  growMedium: string
  
  @Column()
  strainName: string
}

export default GrowInfo
