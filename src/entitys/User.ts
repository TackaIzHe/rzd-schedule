import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Favorite } from "./Favorite";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!:number
    
    @Column()
    name!:string
    
    @Column()
    login!:string

    @Column()
    password!:string

    @OneToMany(()=>Favorite,(favorite)=>favorite.user)
    favorite!:Favorite
}