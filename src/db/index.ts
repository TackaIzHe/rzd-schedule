import { DataSource } from "typeorm";
import { User } from "../entitys/User";
import { Favorite } from "../entitys/Favorite";

export const DbContex = new DataSource({
    type:"sqlite",
    database:'db.sqlite',
    synchronize:true,
    logging:true,
    entities:{
        User,
        Favorite
    }
})