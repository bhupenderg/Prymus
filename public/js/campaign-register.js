// inputs start

document.querySelector('.showTotal h1').addEventListener('click', () => {
  let complete = parseInt(totalInsta()) + parseInt(totalFb()) + parseInt(totalLink()) + parseInt(totalPin()) + parseInt(totalGoogle()) + parseInt(totalEmail()) + parseInt(totalYoutube()) + parseInt(totalSeo()) + parseInt(totalSmo()) + parseInt(totalSms())
  let gst = complete * 18/100
  
  let serviceCharge = complete * 10/100

  

  let withCharges = complete + parseInt(serviceCharge) + parseInt(gst)
  document.querySelector('.showTotal h2').innerHTML = `Your total amount for your customized plan is Rs ${withCharges} including 18% G.S.T and 10% Service Charges.`
  document.getElementById('totalAmount').value = withCharges
})

        // facebook starts



function totalFb() {
  let fb_days = document.getElementById('fb-days').value
  let fb_price = document.getElementById('fb-price-per-day').value
  let fb_total = document.getElementById('total-fb')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
  }






// Instagram starts

function totalInsta() {
  let fb_days = document.getElementById('insta-days').value
  let fb_price = document.getElementById('insta-price-per-day').value
  let fb_total = document.getElementById('total-insta')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// Linkedin starts

function totalLink() {
  let fb_days = document.getElementById('link-days').value
  let fb_price = document.getElementById('link-price-per-day').value
  let fb_total = document.getElementById('total-link')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// Youtube starts

function totalYoutube() {
  let fb_days = document.getElementById('youtube-days').value
  let fb_price = document.getElementById('youtube-price-per-day').value
  let fb_total = document.getElementById('total-youtube')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}

//  Google Starts

function totalGoogle() {
  let fb_days = document.getElementById('google-days').value
  let fb_price = document.getElementById('google-price-per-day').value
  let fb_total = document.getElementById('total-google')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// Email starts

function totalEmail() {
  let fb_days = document.getElementById('email-days').value
  let fb_price = document.getElementById('email-price-per-day').value
  let fb_total = document.getElementById('total-email')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// Pinterest Starts

function totalPin() {
  let fb_days = document.getElementById('pin-days').value
  let fb_price = document.getElementById('pin-price-per-day').value
  let fb_total = document.getElementById('total-pin')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// SEO starts

function totalSeo() {
  let fb_days = document.getElementById('seo-days').value
  let fb_price = document.getElementById('seo-price-per-day').value
  let fb_total = document.getElementById('total-seo')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}

// SMO starts

function totalSmo() {
  let fb_days = document.getElementById('smo-days').value
  let fb_price = document.getElementById('smo-price-per-day').value
  let fb_total = document.getElementById('total-smo')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}


// SMS starts

function totalSms() {
  let fb_days = document.getElementById('sms-days').value
  let fb_price = document.getElementById('sms-price-per-day').value
  let fb_total = document.getElementById('total-sms')
  fb_total.value = parseInt(fb_days) * parseInt(fb_price)
  return fb_total.value
}





if(country.value === 'India'){
	zone.classList.remove('invisible')
}



// inputs



// customize form

let citiesSelectedHere = document.querySelector('.cities-selected')
let andhraPradeshCities = document.querySelector('.andhraPradeshVal')

   citiesSelected.addEventListener('click', (e) => {
  console.log(andhraPradeshCities.options[andhraPradeshCities.selectedIndex].text)

})

   




