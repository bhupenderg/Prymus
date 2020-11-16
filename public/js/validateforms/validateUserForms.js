
    
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

        userRegisterName.addEventListener('focusout', () => {
            let regex = /^[a-zA-Z ]{0,60}$/

        
            if(!regex.test(userRegisterName.value)) {
                userRegisterName.classList.add('error')
                smallUserNameRegister.style.visibility = 'visible'
                smallUserNameRegister.innerText = 'Your name should contain letters only.'
            
                } else if(   userRegisterName.value.length === 0) {
                        userRegisterName.className = ''
                }

                else {
                    userRegisterName.classList.remove('error')
                    userRegisterName.classList.add('success')
                    smallUserNameRegister.style.visibility = 'hidden'
            }
        
                    })
                })

                    
            
                            
                                
            
    

    

        // username validation
    //     userRegisterName.addEventListener('keyup', (e) =>{
            
    //         let regex = /^[a-zA-Z ]{0,60}$/

        
    //     if(!regex.test(userRegisterName.value)) {
    //              userRegisterName.classList.add('error')
    //              smallUserNameRegister.style.visibility = 'visible'
    //              smallUserNameRegister.innerText = 'Your name should contain letters only.'
    //             e.preventDefault()

    //     } 
            
    //     })

    //     // user email validation

    //     userRegisterEmail.addEventListener('focusout', () =>{
            
    //         userEmailValidation()
            
    //     })

    //     // user phone validation

    //         userRegisterPhone.addEventListener('keyup', () => {
    //         if(userRegisterPhone.value.toString().length > 10) {
    //                 userRegisterPhone.classList.add('error')
    //                 smallUserPhoneRegister.style.visibility = 'visible'
    //                 smallUserPhoneRegister.innerText = 'Phone No. should contain 10 digits only.'

    //         } else if(userRegisterPhone.value.toString().length === 0) {
    //             const userRegisterPhone.className = ''
    //         }

    //         else {
    //                 userRegisterPhone.classList.remove('error')
    //                 userRegisterPhone.classList.add('success')
    //                 smallUserPhoneRegister.style.visibility = 'hidden'
    //         }
    //     })

    //     // User City Validation

    //          userRegisterCity.addEventListener('focusout', () => {
    //         if(  userRegisterCity.value.length <= 2) {
    //                  userRegisterCity.classList.add('error')
    //                  smallUserCityRegister.style.visibility = 'visible'

    //                  smallUserCityRegister.innerText = 'You must enter correct city name.'
    //         }

    //         else if(     userRegisterCity.value.toString().length === 0) {
    //                  userRegisterCity.className = ''
    //         }

    //         else {
    //                  userRegisterCity.classList.remove('error')
    //                  userRegisterCity.classList.add('success')
    //                  smallUserCityRegister.style.visibility = 'hidden'
    //         }

    //     })


    //     // User State Validation


    //     const userRegisterState.addEventListener('focusout', () => {
    //         if(userRegisterState.value.length <= 2) {
    //             userRegisterState.classList.add('error')
    //             smallUserStateRegister.style.visibility = 'visible'

    //             smallUserStateRegister.innerText = 'You must enter correct state name.'
    //         }

    //         else if(userRegisterState.value.toString().length === 0) {
    //             userRegisterState.className = ''
    //         }

    //         else {
    //             const userRegisterState.classList.remove('error')
    //             const userRegisterState.classList.add('success')
    //             const smallUserStateRegister.style.visibility = 'hidden'
    //         }

    //     })


    //     // Pin code validation


    //     const userRegisterPin.addEventListener('focusout', () => {
    //         if(  userRegisterPin.value.toString().length < 6 ||   userRegisterPin.value.toString().length > 6) {
    //                  userRegisterPin.classList.add('error')
    //                  smallUserPinRegister.style.visibility = 'visible'

    //                  smallUserPinRegister.innerText = 'You must enter correct pin number.'
    //         }

    //         else if(     userRegisterPin.value.toString().length === 0) {
    //                  userRegisterPin.className = ''
    //         }

    //         else {
    //                  userRegisterPin.classList.remove('error')
    //                  userRegisterPin.classList.add('success')
    //                  smallUserPinRegister.style.visibility = 'hidden'
    //         }

    //     })


    //     // Country Validation


    //          userRegisterCountry.addEventListener('focusout', () => {

    //         let countryName =    userRegisterCountry.value.trim().toLowerCase()
    //         if(countryName !== 'india') {
    //                  userRegisterCountry.classList.add('error')
    //                  smallUserCountryRegister.style.visibility = 'visible'

    //                  smallUserCountryRegister.innerText = 'You must enter correct country name.'
    //         }

    //         else if(     userRegisterCountry.value.toString().length === 0) {
    //                  userRegisterCountry.className = ''
    //         }

    //         else {
    //                  userRegisterCountry.classList.remove('error')
    //                  userRegisterCountry.classList.add('success')
    //                  smallUserCountryRegister.style.visibility = 'hidden'
    //         }

    //     })

        

            

        
    


    // // Methods

    

        
    


    // //Email validation


    //     let regex = /^\S+@\S+$/
    //     if(!regex.test(const userRegisterEmail.value)) {
    //              userRegisterEmail.classList.add('error')
    //              smallUserEmailRegister.style.visibility = 'visible'
    //              smallUserEmailRegister.innerText = 'Please provide a correct email.'

    //     } else if(   userRegisterEmail.value.length === 0) {
    //              userRegisterName.className = ''
    //     }

    //     else {
    //              userRegisterEmail.classList.remove('error')
    //              userRegisterEmail.classList.add('success')
    //              smallUserEmailRegister.style.visibility = 'hidden'
    //     }
    

    


