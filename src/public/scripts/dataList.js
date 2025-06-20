$(document).ready(async()=>{
    const res = await httpFetch.requestBody('station','GET')
    const parseRes = JSON.parse(await res.text())
    parseRes.map(async(x)=>{
        $('#dataList').append(`<option value='${x.title}'>${x.direction}</option>`)
    })
})

