import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Region } from "./Region"

@Entity()
export class Station{
    @PrimaryGeneratedColumn()
    id!:number
    
    @Column({
        default:''
    })
    direction!:string
    
    @Column()
    code!:string

    @Column()
    station_type!:string

    @Column()
    title!:string

    @ManyToOne(()=>Region,(region)=>region.settlements)
    region!:Region
}