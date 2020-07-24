import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import User from './User'
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

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}


export default GrowInfo
