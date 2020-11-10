class ValidateUserForms {
    constructor() {
        this.userRegisterName = document.getElementById('user-register-name')
        this.userRegisterEmail = document.getElementById('user-register-email')
        this.userRegisterPassword = document.getElementById('user-register-password')
        this.userRegisterPasswordConfirm = document.getElementById('user-register-password-confirm')
        this.userRegisterPhone = document.getElementById('user-register-phone')
        this.userRegisterCity = document.getElementById('user-register-city')
        this.userRegisterState = document.getElementById('user-register-state')
        this.userRegisterPin = document.getElementById('user-register-pin')
        this.userRegisterCountry = document.getElementById('user-register-country')
        

        // Small User Register

        this.smallUserNameRegister = document.getElementById('small-register-userName')
        this.smallUserEmailRegister = document.getElementById('small-register-userEmail')
        this.smallUserPasswordRegister = document.getElementById('small-register-userPassword')
        this.smallUserPhoneRegister = document.getElementById('small-register-userPhone')
        this.smallUserCityRegister = document.getElementById('small-register-userCity')
        this.smallUserStateRegister = document.getElementById('small-register-userState')
        this.smallUserPinRegister = document.getElementById('small-register-userPin')
        this.smallUserCountryRegister = document.getElementById('small-register-userCountry')

        // Small User Login
        this.smallUserEmailLogin = document.getElementById('small-login-userEmail')
        this.smallUserPasswordLogin = document.getElementById('small-login-userPassword')
        

        // Events
        this.events()
    }

    // Events

    events() {

        // username validation
        this.userRegisterName.addEventListener('keyup', () =>{
            
            this.userNameValidation()
            
        })

        // user email validation

        this.userRegisterEmail.addEventListener('focusout', () =>{
            
            this.userEmailValidation()
            
        })

        // user phone validation

        this.userRegisterPhone.addEventListener('keyup', () => {
            if(this.userRegisterPhone.value.toString().length > 10) {
                this.userRegisterPhone.classList.add('error')
                this.smallUserPhoneRegister.style.visibility = 'visible'
                this.smallUserPhoneRegister.innerText = 'Phone No. should contain 10 digits only.'

            } else if(this.userRegisterPhone.value.toString().length === 0) {
                this.userRegisterPhone.className = ''
            }

            else {
                this.userRegisterPhone.classList.remove('error')
                this.userRegisterPhone.classList.add('success')
                this.smallUserPhoneRegister.style.visibility = 'hidden'
            }
        })

        // User City Validation

        this.userRegisterCity.addEventListener('focusout', () => {
            if(this.userRegisterCity.value.length <= 2) {
                this.userRegisterCity.classList.add('error')
                this.smallUserCityRegister.style.visibility = 'visible'

                this.smallUserCityRegister.innerText = 'You must enter correct city name.'
            }

            else if(this.userRegisterCity.value.toString().length === 0) {
                this.userRegisterCity.className = ''
            }

            else {
                this.userRegisterCity.classList.remove('error')
                this.userRegisterCity.classList.add('success')
                this.smallUserCityRegister.style.visibility = 'hidden'
            }

        })


        // User State Validation


        this.userRegisterState.addEventListener('focusout', () => {
            if(this.userRegisterState.value.length <= 2) {
                this.userRegisterState.classList.add('error')
                this.smallUserStateRegister.style.visibility = 'visible'

                this.smallUserStateRegister.innerText = 'You must enter correct state name.'
            }

            else if(this.userRegisterState.value.toString().length === 0) {
                this.userRegisterState.className = ''
            }

            else {
                this.userRegisterState.classList.remove('error')
                this.userRegisterState.classList.add('success')
                this.smallUserStateRegister.style.visibility = 'hidden'
            }

        })


        // Pin code validation


        this.userRegisterPin.addEventListener('focusout', () => {
            if(this.userRegisterPin.value.toString().length < 6 || this.userRegisterPin.value.toString().length > 6) {
                this.userRegisterPin.classList.add('error')
                this.smallUserPinRegister.style.visibility = 'visible'

                this.smallUserPinRegister.innerText = 'You must enter correct pin number.'
            }

            else if(this.userRegisterPin.value.toString().length === 0) {
                this.userRegisterPin.className = ''
            }

            else {
                this.userRegisterPin.classList.remove('error')
                this.userRegisterPin.classList.add('success')
                this.smallUserPinRegister.style.visibility = 'hidden'
            }

        })


        // Country Validation


        this.userRegisterCountry.addEventListener('focusout', () => {

            let countryName = this.userRegisterCountry.value.trim().toLowerCase()
            if(countryName !== 'india') {
                this.userRegisterCountry.classList.add('error')
                this.smallUserCountryRegister.style.visibility = 'visible'

                this.smallUserCountryRegister.innerText = 'You must enter correct country name.'
            }

            else if(this.userRegisterCountry.value.toString().length === 0) {
                this.userRegisterCountry.className = ''
            }

            else {
                this.userRegisterCountry.classList.remove('error')
                this.userRegisterCountry.classList.add('success')
                this.smallUserCountryRegister.style.visibility = 'hidden'
            }

        })

        

            }
        

        
    


    // Methods

    userNameValidation() {

        let regex = /^[a-zA-Z ]{0,60}$/

        
        if(!regex.test(this.userRegisterName.value)) {
            this.userRegisterName.classList.add('error')
            this.smallUserNameRegister.style.visibility = 'visible'
            this.smallUserNameRegister.innerText = 'Your name should contain letters only.'

        } else if(this.userRegisterName.value.length === 0) {
            this.userRegisterName.className = ''
        }

        else {
            this.userRegisterName.classList.remove('error')
            this.userRegisterName.classList.add('success')
            this.smallUserNameRegister.style.visibility = 'hidden'
        }
    }


    //Email validation

    userEmailValidation() {

        let regex = /^\S+@\S+$/
        if(!regex.test(this.userRegisterEmail.value)) {
            this.userRegisterEmail.classList.add('error')
            this.smallUserEmailRegister.style.visibility = 'visible'
            this.smallUserEmailRegister.innerText = 'Please provide a correct email.'

        } else if(this.userRegisterEmail.value.length === 0) {
            this.userRegisterName.className = ''
        }

        else {
            this.userRegisterEmail.classList.remove('error')
            this.userRegisterEmail.classList.add('success')
            this.smallUserEmailRegister.style.visibility = 'hidden'
        }
    }

    
}


new ValidateUserForms();