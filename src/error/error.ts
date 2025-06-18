export class ApiError extends Error{
    status!:number

    constructor(status:number,mess:string){
        super()
        this.status=status
        this.message = mess
    }
    static badRequest(){
        return new ApiError(404,"badRequest")
    }
    static badData(){
        return new ApiError(404,"badData")
    }
    static internalServerError(err:any){
        return new ApiError(500,err)
    }
    static userNotFound(){
        return new ApiError(404,"User Not Found!")
    }
    static notCorrectPassword(){
        return new ApiError(404,'Not Correct Password!')
    }
}