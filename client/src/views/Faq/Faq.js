import './Faq.css'
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'
import FaqC from "./../../components/Faqc/Faqc"

const Faq = () =>{
   
    return(
       
                  
           
         <div className='  faq-main-container bg-color'>
           <Navbar/>  
           <h1 className='faq-heading text-center '>Frequently Asked Questions</h1>
           <div className='mt-5 mb-3 '>
         <FaqC que="1. What are the advantages of online bus booking?" ans="There are many advantages of online bus ticket booking.
You can choose your preferred seats.
Online bus ticket booking keeps you away from the long queues of the offline ticket counters.
You can view plenty of buses and choose an appropriate bus for your travel considering the amenities, reviews, ratings and bus images available.
You can choose the preferred bus type (Volvo Bus, AC or Non AC) and also pickup and dropping point and timings.
Your tickets can be booked at a reasonable price with multiple payment options."/>

         <FaqC que="2. Can we book state road transport corporation buses from IRCTC?" ans="
Yes, almost all fleets of state road transport corporation buses will be enabled from IRCTC. For example, UPSRTC, APSRTC, GSRTC, OSRTC, Kerala RTC, etc"/>

         <FaqC que="3. Is it compulsory to carry the printout of the ticket to board the bus?" ans="
The bus operators validate e-tickets received on your e-mail or available on the app. But, it is advisable to carry the e-ticket's print out to be on a safer side for a hassle-free travel experience. It is also advisable to carry a govt. identity card to verify your identity before boarding the bus."/>

         <FaqC que="4. What if I miss the bus? Will I get a refund?" ans="
Refund will not be initiated if you miss the bus. A refund is initiated in case of bus operator cancels the bus and have not provided any other bus as an alternate option. IRCTC will process the refund to the customer on receiving the amount from the bus operator only."/>

         <FaqC que="5. How to book bus tickets online through IRCTC?" ans="
Log on to bus.irctc.co.in
Select From / To with travel date
Choose bus date / time wise
Choose seat
Enter your personal details
Make payment"/>

    
         
         </div>

         <Footer/>
         
         </div>
    )

}
export default Faq;