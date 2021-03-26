document.getElementById('showTotalCustom').addEventListener('click', () => {
    let complete_initial = parseInt(totalInsta()) + parseInt(totalFb()) + parseInt(totalLink()) + parseInt(totalGoogle()) + parseInt(totalYoutube())
  let serviceCharge = complete_initial * 10/100
  let complete = parseInt(complete_initial) + parseInt(serviceCharge)

  let gst = complete * 18/100

  let withCharges = complete + parseInt(gst)
  document.querySelector('.showTotal h2').innerHTML = `The total amount for your customized plan is Rs ${withCharges} including 10% Agency Commission and 18% G.S.T.`
  document.getElementById('totalAmount').value = withCharges
})


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
  