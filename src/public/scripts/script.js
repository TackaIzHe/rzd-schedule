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
    httpFetch.requestBody('schedules','POST',{qwe:123})
})

$('button#search').click(()=>{
    $('form#form').slideToggle(1000)
})
$('button#register').click(()=>{
    $('form#regForm').slideToggle(1000)
})