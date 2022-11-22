import React,{useRef,useEffect} from 'react'
import {Divider ,Button} from 'antd'
const Payment = () => {
  const ref=useRef(null);
  
 function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  const form = document.createElement('form');
  script.src = urlOfTheLibrary;
  script.async = true;
  script.setAttribute("data-payment_button_id","pl_KgfaBhwlhz9h1i");
  form.appendChild(script);
  ref.current.appendChild(form);
}

useEffect(()=>{
  AddLibrary(`https://checkout.razorpay.com/v1/payment-button.js`)
 setTimeout(() => {
  document.getElementsByClassName("PaymentButton")[0].click();
 },10); 
 
 
},[])



  return (
    <div className="form" ref={ref} > 
     <Divider />
   <i>Note : </i> After 45 days we will refund if we are not able to provide to hom tuition in your area    
   <Button type="primary" onClick={()=>{window.open(`https://rzp.io/l/twrmf`)}} >PAY NOW</Button>
    </div>
  )
}

export default Payment