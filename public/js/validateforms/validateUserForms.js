
    
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

   
    function validateRegister() {

        let regex = /^[a-zA-Z ]{0,60}$/
            // let regex = /^\S+@\S+$/
        
            if(!regex.test(userRegisterName.value)) {

                 userRegisterName.classList.add('error')
                 smallUserNameRegister.style.visibility = 'visible'
                 smallUserNameRegister.innerText = 'Name is invalid!!'
                 userRegisterName.focus()
                 return false
                
            }
            else{
                userRegisterName.classList.remove('error')
                userRegisterName.classList.add('success')
                smallUserNameRegister.style.visibility = 'hidden'
            
                 
            }
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test((userRegisterEmail.value))){
                 userRegisterEmail.classList.add('error')
                 smallUserEmailRegister.style.visibility = 'visible'
                 smallUserEmailRegister.innerText = 'Email is invalid!!'
                 userRegisterEmail.focus()
                 return false
            }  

            else{
                userRegisterEmail.classList.remove('error')
                userRegisterEmail.classList.add('success')
                smallUserEmailRegister.style.visibility = 'hidden'
            }


            if(userRegisterPassword.value !== userRegisterPasswordConfirm.value) {
                
                 userRegisterPassword.classList.add('error')
                 smallUserPasswordRegister.style.visibility = 'visible'
                 smallUserPasswordRegister.innerText = 'Values for Password and Password Confirm do not match!!'
                 userRegisterPassword.focus()
                 return false
            }
            
            else{
                userRegisterPassword.classList.remove('error')
                userRegisterPassword.classList.add('success')
                smallUserPasswordRegister.style.visibility = 'hidden'
            }


            if(userRegisterPassword.value.length < 8) {
                
                 userRegisterPassword.classList.add('error')
                 smallUserPasswordRegister.style.visibility = 'visible'
                 smallUserPasswordRegister.innerText = 'Password should be of atleast 8 digits!!'
                 userRegisterPassword.focus()
                 return false
                
                }
                
                else{
                userRegisterPassword.classList.remove('error')    
                userRegisterPassword.classList.add('success')
                smallUserPasswordRegister.style.visibility = 'hidden'
                }

            if(userRegisterPhone.value.length >= 15 || userRegisterPhone.value.length < 6) {

                        userRegisterPhone.classList.add('error')
                        smallUserPhoneRegister.style.visibility = 'visible'
                        smallUserPhoneRegister.innerText = 'Phone No. is incorrect!'
                        userRegisterPhone.focus()
                        return false
                } 

            else{

                userRegisterPhone.classList.remove('error')
                userRegisterPhone.classList.add('success')
                smallUserPhoneRegister.style.visibility = 'hidden'

            }    

            if(!regex.test(userRegisterCity.value)) {

                userRegisterCity.classList.add('error')
                smallUserCityRegister.style.visibility = 'visible'
                smallUserCityRegister.innerText = 'City name is invalid!!'
                userRegisterCity.focus()
                return false
               
            }
            else{
               userRegisterCity.classList.remove('error')
               userRegisterCity.classList.add('success')
               smallUserCityRegister.style.visibility = 'hidden'
           
                
            }


            if(!regex.test(userRegisterState.value)) {

            userRegisterState.classList.add('error')
            smallUserStateRegister.style.visibility = 'visible'
            smallUserStateRegister.innerText = 'State is invalid!!'
            userRegisterState.focus()
            return false
           
            }
           else{
           userRegisterState.classList.remove('error')
           userRegisterState.classList.add('success')
           smallUserStateRegister.style.visibility = 'hidden'
       
            
            }


            if(userRegisterPin.value.length > 6 || userRegisterPin.value.length > 6) {
                userRegisterPin.classList.add('error')
                smallUserPinRegister.style.visibility = 'visible'
                smallUserPinRegister.innerText = 'Pin is invalid!!'
                userRegisterPin.focus()
                return false
            }

            else{
                userRegisterPin.classList.remove('error')
                userRegisterPin.classList.add('success')
                smallUserPinRegister.style.visibility = 'hidden'
            }


            if(!regex.test(userRegisterCountry.value)) {

                userRegisterCountry.classList.add('error')
                smallUserCountryRegister.style.visibility = 'visible'
                smallUserCountryRegister.innerText = 'Country is invalid!!'
                userRegisterCountry.focus()
                return false
               
                }
               else{
               userRegisterCountry.classList.remove('error')
               userRegisterCountry.classList.add('success')
               smallUserCountryRegister.style.visibility = 'hidden'
           
                
                }



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
    

    


