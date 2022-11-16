import React from 'react'

 function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  const form = document.createElement('form');
  script.src = urlOfTheLibrary;
  script.async = true;
  script.setAttribute("data-payment_button_id","pl_KgfaBhwlhz9h1i");
  form.appendChild(script);
  document.body.appendChild(form);
}

const Payment = () => {
  return (
    <>
   This section is for payment 
   you must have to make payment for further process
   This is registration fee . One time <hr/>
   <i>Note : </i> After 45 days we will refund if we are not able to provide to hom tuition in your area    
     {AddLibrary(`https://checkout.razorpay.com/v1/payment-button.js`)}
       
  <a href="https://rzp.io/l/twrmf" >Pay now</a> 


    </>
  )
}

export default Payment