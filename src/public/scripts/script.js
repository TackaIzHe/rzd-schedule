$('#OKButton').click(OKButtonToggle)

if(document.cookie.split('=')[1] !== undefined){
    Login()

}

$('input#searchButton').click((event)=>{
    event.preventDefault()
    const from = $('input#from').val() 
    const to = $('input#to').val()
    if(from=='' || to==''){
        $('p.Error').css({visibility:'visible'})
        return
    }
    $('p.Error').css({visibility:'hidden'})
    
    httpFetch.requestParams('schedules',from, to)
    .then(async(e)=>{
        if(e.ok){
            const res = JSON.parse(await(e.text()))
            getSchedule(res,from,to)
        }
    })
})

$('form#regForm').submit((event)=>{
    event.preventDefault()
    const name = $('input#regName').val()
    const log = $('input#regLog').val()
    const pass = $('input#regPass').val()
    const img = $('input#img')[0].files
    if(name == '' || log=='' || pass==''){
        $('p.Error').css({visibility:'visible'})
        return
    }
    const q = new FormData(event.currentTarget)
    $('p.Error').css({visibility:'hidden'})
    httpFetch.requestBody('register','POST',JSON.stringify({name:name,login:log,password:pass}))
    .then(async (e)=>{
        if(e.ok)
        {
            q.append('id',JSON.parse(await e.text()).id)
            q.append('img',img)
            httpFetch.requestBody('uploadImg','POST',q,{})
            OKButtonToggle()

        } 
    })
})

$('input#logButton').click((event)=>{
    event.preventDefault()
    const log = $('input#logLog').val()
    const pass = $('input#logPass').val()
    if(log == '' || pass == ''){
        $('p.Error').css({visibility:'visible'})
        return
    }
    $('p.Error').css({visibility:'hidden'})
    httpFetch.requestBody('login','POST',JSON.stringify({login:log,password:pass}))
    .then(async(e)=>{
        if(e.ok){
            Login()
            OKButtonToggle()
        }

    })
    
})

$('input#logButton').click((event)=>{
    event.preventDefault()
})

$('button#search').click(searchTogle)
$('button#login').click(logTogle)
$('button#register').click(regTogle)

function scheduleToggle(){
    serchForm()
    regForm()
    logForm()
    OKButton()
    $('div.schedule-container').slideToggle(1000)
}

function OKButtonToggle(){
    serchForm()
    regForm()
    logForm()
    scheduleForm()
    $('#sucses').slideToggle(1000)
}

function searchTogle(){
    OKButton()
    regForm()
    logForm()
    scheduleForm()
    $('form#form').slideToggle(1000)
}

function regTogle(){
    OKButton()
    serchForm()
    logForm()
    scheduleForm()
    $('form#regForm').slideToggle(1000)
}

function logTogle(){
    OKButton()
    serchForm()
    regForm()
    scheduleForm()
    $('form#logForm').slideToggle(1000)
}

function OKButton(){
    $('#sucses').slideUp(1000)
}

function serchForm(){
    $('form#form').slideUp(1000)
}

function regForm(){
    $('form#regForm').slideUp(1000)
}

function logForm(){
    $('form#logForm').slideUp(1000)
}
function scheduleForm(){
    $('div.schedule-container').slideUp(1000)
}