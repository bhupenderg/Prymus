const hamburger = document.querySelector('.mob-nav-container img')
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


// header shrink

const headerMain = document.querySelector('header.header')
            const headerNavLogo = document.querySelector('header.header .logo-conatiner img')
            const headerNavMenu = document.querySelectorAll('header.header .nav-container ul li a')

            window.onscroll = function() {
                    scrollFunction()
            // console.log(headerNavLogo.children)
            // headerNavLogo.style.transform = 'scale(.5)'
                    //console.log(headerNavMenu.innerText)
                    //headerNavMenu.style.fontSize = '1.2rem'
                    //headerMain.style.height = '8vh'
            }

            function scrollFunction() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    headerMain.style.height = "8vh";
                    headerNavLogo.style.transform = 'scale(.5)'
                    headerNavMenu.forEach(el => {
                        el.style.fontSize = '1.6rem'
                    })
                } else {
                    headerMain.style.height = "15vh";
                    headerNavLogo.style.transform = 'scale(1)'
                    headerNavMenu.forEach(el => {
                        el.style.fontSize = '1.8rem'
                    })
                }
            }

            document.querySelector('li.submenu').addEventListener('click', () => {
                document.querySelector('.nav-container ul li').classList.add('active')
            })