const hamburger = document.querySelector('.mob-nav-container')
const nav = document.querySelector('.nav-container')

hamburger.addEventListener('click', () =>{
    
    if(nav.classList.contains('go')) {
        nav.classList.remove('go')
        nav.classList.add('come')
    } else if(nav.classList.contains('come')) {
        nav.classList.remove('come')
        nav.classList.add('go')
    }

})