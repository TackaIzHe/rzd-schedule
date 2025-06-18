import { DataSource } from "typeorm";
import { User } from "../entitys/User";
import { Favorite } from "../entitys/Favorite";
import { Region } from "../entitys/Region";
import { Station } from "../entitys/Station";

export const DbContex = new DataSource({
    type:"sqlite",
    database:'db.sqlite',
    synchronize:true,
    logging:true,
    entities:{
        User,
        Favorite,
        Region,
        Station
    }
})