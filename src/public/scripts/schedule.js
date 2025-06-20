
function getSchedule(res){
    $('#schedule').children().remove()
    res.schedule.map((x)=>{
        const divSchedule = `<div class='scheduleDiv'><h2>${res.from+'          '+res.to}</h2><h3>${new Date().getTime()}</h3><h3>${x.departure+'          '+x.arrival}</h3></div>`
        $('#schedule').append(divSchedule)
    })  
    scheduleToggle()
}