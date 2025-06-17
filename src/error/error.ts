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
}