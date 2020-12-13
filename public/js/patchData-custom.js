import Axios from "axios"

document.getElementById('update-custom-form').addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('/updatedata-custom/:id', {website: document.getElementById('company-website').value}).then(() => {
        console.log("Submitted")
    }).catch(() => {
        console.log("Something went wrong")
    })
})