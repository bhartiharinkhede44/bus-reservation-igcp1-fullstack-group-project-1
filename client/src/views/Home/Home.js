import './Home.css';
import axios from "axios"
import { useState ,Link} from 'react';
import Image from "./h1.png"
import Image1 from "./h8.png"
import Image2 from "./h5.png"
import Image3 from "./h7.png"
import Image4 from "./h2.png"

import Image5 from "./h3.png"
import Image6 from "./h5.png"
import Image7 from "./h9.png"
import Image8 from "./h6.png"
import Image9 from "./h4.png"
 import logo1 from "./person.png"
 import logo2 from "./pick-up.png"
 import logo3 from "./secure-payment.png"
 import logo4 from "./noridingimg.png"

import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
function Home() {
    const [city, setcity] = useState("");
    const [citys, setcitys] = useState("");
    const [bookDay, setBook] = useState("");
    const [pickupdate, setpickupDate] = useState("");

    const searchBus = async () => {
        if (!city || !bookDay || !pickupdate || !citys) {
            window.location.href = "/searchbus"
            // alert("All dields are required")
            return

        }
        const busData = {
            city,
            citys,
            bookDay,
            pickupdate,         
        }
        const response = await axios.post('/api/transactions', busData);
        alert(response.data.message)

       setcity('')
       setpickupDate('')
       setBook('')
       setcitys('')
     
    }

    return (<>
        <Navbar />
        <div className='image'>

            <div className='flex-container '>
              
                <div className='  card'>
                    <div className='container '>

                        <span className="design"> From </span>
                        <select
                            onChange={(e) => {
                                setcity(e.target.value);
                            }}
                            className="design">
                            {" "}
                            <br /> <br />
                            <option value="pune">Pune</option>
                            <option value="nashik">Nashik</option>
                            <option value="aurangabad">Aaurangabad</option>
                            <option value="kolhapur">Kolhapur</option>
                            <option value="thane">Thane</option>
                            <option value="nagar">Nagar</option>
                            <option value="nanded">Nanded</option>
                            <option value="newasa">Newasa</option>
                            <option value="mumbai">Mumbai</option>
                        </select>
                    </div>

                    <div className='container '>
                        <span className="design"> To </span>
                        <select
                            onChange={(e) => {
                                setcitys(e.target.value);
                            }}
                            className="design">
                            {" "}
                            <br /> <br />
                            <option value="pune">Pune</option>
                            <option value="nashik">Nashik</option>
                            <option value="aurangabad">Aaurangabad</option>
                            <option value="kolhapur">Kolhapur</option>
                            <option value="thane">Thane</option>
                            <option value="nagar">Nagar</option>
                            <option value="nanded">Nanded</option>
                            <option value="newasa">Newasa</option>
                            <option value="mumbai">Mumbai</option>
                            
                        </select>
                    </div>
                    <div className='container'>
                        <span className="design">ONWARD Date: </span>
                        <input type="date" onChange={(e) => {
                            setpickupDate(e.target.value)
                        }} className='design' />
                    </div>
                    <br />    
                   <button onClick={searchBus} className="book-btn">Search Bus </button>
                </div>
            </div >
        </div>
        <div className='places'>
        <h1 className='text-center'>Top Places</h1>
            <div className='flex-container '>
                <img src={Image} className='img' />
                <img src={Image1} className='img' />
                <img src={Image2} className='img' />
                <img src={Image3} className='img' />
                <img src={Image4} className='img' />
            </div>
            < div className='flex-container '>
                <img src={Image5} className='img' />
                <img src={Image6} className='img' />
                <img src={Image7} className='img' />
                <img src={Image8} className='img' />
                <img src={Image9} className='img' />
            </div>
        </div>
        <div className='flex-container design-logo '>

        <img src={logo1} className='logo'/> 
        <img src={logo2} className='logo'/> 
        <img src={logo3} className='logo'/> 
        <img src={logo4} className='logo'/> 
        </div>
        <Footer/>
    </>)
}
export default Home;