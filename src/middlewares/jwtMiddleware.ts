import { User } from "../entitys/User";
import jwt from 'jsonwebtoken'

export default class {
    static createJWT(obj:User){
        const jwt_key = process.env.JWT_KEY || 'JWT_SIGN_TOKEN'
        const token = jwt.sign({id:obj.id,name:obj.name,img:obj.img},jwt_key)
        return token
    }
}