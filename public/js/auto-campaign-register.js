document.querySelector('.showTotal h1').addEventListener('click', () => {
    let complete_initial = document.getElementById('amount').value
    let serviceCharge = parseInt(complete_initial)  * 10/100
    let complete = parseInt(complete_initial) + parseInt(serviceCharge)
  
    let gst = complete * 18/100
  
    let withCharges = complete + parseInt(gst)
    document.querySelector('.showTotal h2').innerHTML = `Your total amount for your customized plan is Rs ${withCharges} including 18% G.S.T and 10% Service Charges.`
    document.getElementById('totalAmount').value = withCharges

  })