class httpFetch{
    static async requestParams(curl,from, to){
        const res = await fetch(`/${curl}/${from}/${to}`)
    }
    static async requestBody(curl,met,body,headers={'Content-Type':'application/json'}){
        const res = await fetch(`/${curl}`,{
            method:met,
            headers:headers,
            body:body
        })
        return res
    }
}
