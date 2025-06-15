import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Favorite{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    from!:string

    @Column()
    to!:string

    @ManyToOne(()=>User,(user)=>user.favorite)
    user!:User
}