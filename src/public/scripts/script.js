$('input#searchButton').click((event)=>{
    event.preventDefault()
    const from = $('input#from').val() 
    const to = $('input#to').val()
    if(from=='' || to==''){
        $('p.Error').css({visibility:'visible'})
        return
    }
    $('p.Error').css({visibility:'hidden'})
})
