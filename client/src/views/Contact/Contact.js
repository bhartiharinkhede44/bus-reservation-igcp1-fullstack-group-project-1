import './Contact.css'
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'
import showToast from 'crunchy-toast';
import { useState } from 'react'
const Contact = () => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // const saveMessage =(e)=>{
    //     localStorage.setItem('name',name)
    //     localStorage.setItem('mobile',mobile)
    //     localStorage.setItem('email',email)
    //     localStorage.setItem('subject',subject)
    //     localStorage.setItem('message',message)



    // }

    const saveMessage = () => {

        if (!name) {
            showToast('please fill name', 'alert', 3000);
            return;
        }
        if (!mobile) {
            showToast('This is a sample toast message', 'success', 3000);
            return;
        }
        if (!email) {
            showToast('This is a sample toast message', 'success', 3000);
            return;
        }
        if (!subject) {
            alert("please fill subject")
            return;
        }
        if (!message) {
            showToast('This is a sample toast message', 'success', 3000);
            return;
        }
        const saveData = {
            name, email, mobile, subject, message

        };
        localStorage.setItem('currentUser', JSON.stringify(saveData));
        showToast('Contact successfully', 'success', 3000);

        setEmail('');
        setName('')
        setMessage('')
        setSubject('')
        setMobile('')
    };


    return (
        <div>
            <Navbar />
            <h1 className=' contact-heading'>Contact Us </h1>
            <p className='contact-text'>"Need help planning your journey or encountered an issue with your booking? Contact us—we're dedicated to resolving your concerns...🙂" </p>

            
            <div className='contact-container  '>
            <div className='form-container '>
                        <form>
                            <h1 className='contact-sub'>Contact Form</h1>

                           
                                <div>
                                    <label className='label'>Name</label>
                                    <input  className='input-box-contact' type="text" placeholder="Enter  Name..." onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                </div>

                                <div className=''>
                                    <label className='label'>Mobile No</label>
                                    <input  className='input-box-contact'  type="text" placeholder="Mobile No" onChange={(e) => {
                                        setMobile(e.target.value)
                                    }} />
                                </div>
                            
                            <label for="exampleFormControlInput1" className='label'>Email address</label>
                            <input type="email"  className='input-box-contact' id="exampleFormControlInput1" placeholder="abc.gmail.com"  onChange={(e) => {
                                setEmail(e.target.value)
                            }} />

                            <label className='label'>Subject</label>

                            <input  type="text"  className='input-box-contact' placeholder="Enter  Name..." onChange={(e) => {
                                setSubject(e.target.value)
                            }} />


                            <div className=''>
                                <label for="exampleFormControlTextarea1" className='label'>Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message' className='input-box-contact' onChange={(e) => {
                                    setMessage(e.target.value) 
                                }}></textarea>
                            </div>

                            <div className='checkbox-robot'>
                                <input type='checkbox' /> I am not a robot
                            </div>

                            <button type='button' className='messagebtn' onClick={saveMessage}>Send Message</button>

                        </form>
                    </div>
                    <div className=' mt-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15249822.21961233!2d82.7525294!3d21.0686228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c9d5f5646388b%3A0x15566accbb28f624!2sRentrip.in-%20Rent%20Bikes%20in%20India!5e0!3m2!1sen!2sin!4v1696392198654!5m2!1sen!2sin" className='map' ></iframe>
                
                       
                    </div>
               
                </div >







    <Footer />
        </div >
    )

}
export default Contact;