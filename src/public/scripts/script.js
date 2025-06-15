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
})

$('input#regButton').click((event)=>{
    event.preventDefault()
    const name = $('input#regName').val()
    const log = $('input#regLog').val()
    const pass = $('input#regPass').val()
    if(name == '' || log=='' || pass==''){
        $('p.Error').css({visibility:'visible'})
        return
    }
    $('p.Error').css({visibility:'hidden'})
    httpFetch.requestBody('register','POST',{name:name,login:log,password:pass})
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
    httpFetch.requestBody('login','POST',{login:log,password:pass})
})

$('input#logButton').click((event)=>{
    event.preventDefault()
})

$('button#search').click(()=>{
    regForm()
    logForm()
    $('form#form').slideToggle(1000)
})
$('button#register').click(()=>{
    serchForm()
    logForm()
    $('form#regForm').slideToggle(1000)
})
$('button#login').click(()=>{
    serchForm()
    regForm()
    $('form#logForm').slideToggle(1000)
})
function serchForm(){
    $('form#form').slideUp(1000)
}

function regForm(){
    $('form#regForm').slideUp(1000)
}

function logForm(){
    $('form#logForm').slideUp(1000)
}