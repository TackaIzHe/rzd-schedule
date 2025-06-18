import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import {Station} from './Station'
@Entity()
export class Region{
    @PrimaryGeneratedColumn()
    id!:number

    @OneToMany(()=>Station,(station)=>station.region)
    settlements!:Station[]
    
    @Column()
    code!:string

    @Column()
    title!:string
}