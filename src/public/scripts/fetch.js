class httpFetch{
    static async requestParams(curl,from, to){
        const res = await fetch(`/${curl}/${from}/${to}`)
    }
    static async requestBody(curl,met,body){
        const res = await fetch(`/${curl}`,{
            method:met,
            body:body
        })
        return res
    }
}
