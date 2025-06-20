const div = $('.train-block')
function getSchedule(res,from,to){
    $('.schedule-container').children().remove()
    let i = 1
    res.schedule.map((x)=>{
        const cloneDiv = div.clone()
        $(cloneDiv.children('div')[0]).append(i)

        const departureDate = new Date(x.departure).getTime()
        const arrivalDate = new Date(x.arrival).getTime()

        const duration = new Date(arrivalDate - departureDate)
        const durationHour = new Date(duration).getHours()
        const durationMinutes = new Date(duration).getMinutes()

        const arrivalDate_Hours = new Date(new Date(x.arrival).getTime() + 1000 * 60 * 60 * 7).getHours()
        const arrivalDate_Minutes = new Date(x.arrival).getMinutes()

        const departureDate_Hours = new Date(new Date(x.departure).getTime() + 1000 * 60 * 60 * 7).getHours()
        const departureDate_Minutes = new Date(x.departure).getMinutes()
        
        $(cloneDiv.children('div')[1]).children('#departure').text(from)
        $(cloneDiv.children('div')[1]).children('#arrival').text(to)

        $(cloneDiv.children('div')[2]).children('#departure').append(' '+departureDate_Hours+':'+departureDate_Minutes)
        $(cloneDiv.children('div')[2]).children('#arrival').append(' '+arrivalDate_Hours+':'+arrivalDate_Minutes)
        $(cloneDiv.children('div')[2]).children('.duration').append(durationHour+':'+durationMinutes)
        $('.schedule-container').append(cloneDiv)
        i++
    })  
    scheduleToggle()
}