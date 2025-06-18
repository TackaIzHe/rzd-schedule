const logout = ()=>{
    httpFetch.requestBody('logout','GET')
    .then((e)=>{
        if(e.ok){
            Logout()
            return
        }
        console.log('Не удалось выйти из учётной записи')
    })
}
const prof = ()=>{
    console.log(321)
}

function Login(){
    const key = document.cookie.split('=')
    const parseToken = new jwt_decode(key[1])
    const logBut = $('button#login')
    logBut.attr('id','logout')
    logBut.text('Выйти')
    logBut.unbind('click')
    logBut.click(logout)
    logForm()
    const profBut = $('button#register')
    profBut.attr('id','profile')
    profBut.text(`Профиль: ${parseToken.name}`)
    profBut.unbind('click')
    profBut.click(prof)
    const ava = $('img#ava').attr('src',parseToken.img)
    ava.css({visibility:'visible'})
    return
}

function Logout(){
    const logBut = $('button#logout')
    logBut.attr('id','login')
    logBut.text('Войти')
    logBut.unbind('click')
    logBut.click(logTogle)
    const profBut = $('button#profile')
    profBut.attr('id','register')
    profBut.text('Регистрация')
    profBut.unbind('click')
    profBut.click(regTogle)
    const ava = $('img#ava').attr('src','')
    ava.css({visibility:'hidden'})
    return
}