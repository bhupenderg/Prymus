document.getElementById('showTotal').addEventListener('click', () => {
    let complete_initial = document.getElementById('amount').value
    let serviceCharge = parseInt(complete_initial)  * 10/100
    let complete = parseInt(complete_initial) + parseInt(serviceCharge)
  
    let gst = complete * 18/100
  
    let withCharges = complete + parseInt(gst)
    document.querySelector('.showTotal h2').innerHTML = `Your total amount for your customized plan is Rs ${withCharges} 10% Agency commision and 18% G.S.T.`
    document.getElementById('totalAmount').value = withCharges


})