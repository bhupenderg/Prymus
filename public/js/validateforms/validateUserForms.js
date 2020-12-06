
    
        const userRegisterName = document.getElementById('user-register-name')
        const userRegisterEmail = document.getElementById('user-register-email')
        const userRegisterPassword = document.getElementById('user-register-password')
        const userRegisterPasswordConfirm = document.getElementById('user-register-password-confirm')
        const userRegisterPhone = document.getElementById('user-register-phone')
        const userRegisterCity = document.getElementById('user-register-city')
        const userRegisterState = document.getElementById('user-register-state')
        const userRegisterPin = document.getElementById('user-register-pin')
        const userRegisterCountry = document.getElementById('user-register-country')

        
        

        // Small User Register

        const smallUserNameRegister = document.getElementById('small-register-userName')
        const smallUserEmailRegister = document.getElementById('small-register-userEmail')
        const smallUserPasswordRegister = document.getElementById('small-register-userPassword')
        const smallUserPhoneRegister = document.getElementById('small-register-userPhone')
        const smallUserCityRegister = document.getElementById('small-register-userCity')
        const smallUserStateRegister = document.getElementById('small-register-userState')
        const smallUserPinRegister = document.getElementById('small-register-userPin')
        const smallUserCountryRegister = document.getElementById('small-register-userCountry')

        // Small User Login
        const smallUserEmailLogin = document.getElementById('small-login-userEmail')
        const smallUserPasswordLogin = document.getElementById('small-login-userPassword')
        

        // Events

    
    // Events

    // Form event

    const userFormRegister = document.getElementById('userFormRegister')
    userFormRegister.addEventListener('submit', (e) => {

        
            // let regex = /^[a-zA-Z ]{0,60}$/
            // // let regex = /^\S+@\S+$/
        
            // if(!regex.test(userRegisterName.value)) {
            //     e.preventDefault()

            //      userRegisterName.classList.add('error')
            //      smallUserNameRegister.style.visibility = 'visible'
            //      smallUserNameRegister.innerText = 'Name is invalid!!'
                
            // }   else if(!/^\S+@\S+$/.test((userRegisterEmail.value))){
            //     e.preventDefault()
            //      userRegisterEmail.classList.add('error')
            //      smallUserEmailRegister.style.visibility = 'visible'
            //      smallUserEmailRegister.innerText = 'Email is invalid!!'
            // } else 
            if(userRegisterPassword.value !== userRegisterPasswordConfirm.value) {
                e.preventDefault()
                 userRegisterPassword.classList.add('error')
                 smallUserPasswordRegister.style.visibility = 'visible'
                 smallUserPasswordRegister.innerText = 'Values for Password and Password Confirm do not match!!'
            } else if(userRegisterPassword.value.length < 8) {
                e.preventDefault()
                 userRegisterPassword.classList.add('error')
                 smallUserPasswordRegister.style.visibility = 'visible'
                 smallUserPasswordRegister.innerText = 'Password should be of atleast 8 digits!!'
                } 
            // else if(userRegisterPhone.value.length > 10) {

            //      e.preventDefault()   
            //      userRegisterPhone.classList.add('error')
            //      smallUserPhoneRegister.style.visibility = 'visible'
            //      smallUserPhoneRegister.innerText = 'Phone No. can not contain more than 10 digits!!'
            // } else if(userRegisterPin.value.length != 6) {
            //     e.preventDefault()   
            //     userRegisterPin.classList.add('error')
            //     smallUserPinRegister.style.visibility = 'visible'
            //     smallUserPinRegister.innerText = 'Pin No. should be of 6 digits!!'
            // } else if(userRegisterCountry.value.toLowerCase() !== "india"){
            //     e.preventDefault()   
            //     userRegisterCountry.classList.add('error')
            //     smallUserCountryRegister.style.visibility = 'visible'
            //     smallUserCountryRegister.innerText = 'Country must be India!!'
            // }

             
                


                else{


                    userFormRegister.submit()
                
                }
    }) 
                

                    


    // //Email validation


        // let regex = /^\S+@\S+$/
        // if(!regex.test(userRegisterEmail.value)) {
                //  userRegisterEmail.classList.add('error')
                //  smallUserEmailRegister.style.visibility = 'visible'
                //  smallUserEmailRegister.innerText = 'Please provide a correct email.'

        // } else if(   userRegisterEmail.value.length === 0) {
        //          userRegisterName.className = ''
        // }

        // else {
        //          userRegisterEmail.classList.remove('error')
        //          userRegisterEmail.classList.add('success')
        //          smallUserEmailRegister.style.visibility = 'hidden'
        // }
    

    


