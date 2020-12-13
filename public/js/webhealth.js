

const whMsg = document.getElementById('webHealth-msg')

const name = document.getElementById('whName')
const email = document.getElementById('whEmail')
const mobile = document.getElementById('whMobile')
const wlink = document.getElementById('whLink')

document.getElementById('webHealth-form').addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('/website-health', {name: name.value, email: email.value, mobile: mobile.value, wlink: wlink.value}).then(() => {
        whMsg.innerHTML = 'Your query is submitted successfully. We will get back to you shortly ❤'
        whMsg.style.display = 'block'
    }).catch(() => {
        console.log("Something went wrong")
    })
})