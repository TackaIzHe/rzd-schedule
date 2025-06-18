import bcypt from 'bcrypt'

const constSalt = 10

export default class {
    static async crypt(password:string){
        const salt = await bcypt.genSalt(constSalt)
        const hash = await bcypt.hash(password,salt)
        return hash
    }
    static async uncrupt(password:string,hash:string){
        const result = await bcypt.compare(password,hash)
        return result
    }
}