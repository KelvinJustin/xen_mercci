let toggle = document.querySelector('.menu-icon')
let header = document.querySelector('.header')
let title = document.querySelector('h1')

let clickState = false

toggle.onclick = () => {
    if(clickState){
        header.classList.remove('active')
        clickState = false
    }else{
        header.classList.add('active')
        clickState = true
    }
}