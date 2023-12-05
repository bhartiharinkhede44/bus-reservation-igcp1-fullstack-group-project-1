import './Home.css';
import axios from "axios"
import { useState } from 'react';
import Image from "./h1.png"
import Image1 from "./h8.png"
import Image2 from "./h5.png"
import Image3 from "./h7.png"
import Image4 from "./h2.png"

import Image5 from "./h3.png"
import Image6 from "./h5.png"
import Image7 from "./h9.png"
import Image8 from "./h3.png"
import Image9 from "./h4.png"
import Navbar from "./../../components/Navbar/Navbar"
function Home() {

    const [city, setcity] = useState("");
    const [bookDay, setBook] = useState("");
    const [pickupdate, setpickupDate] = useState("");
    const [dropdate, setdropDate] = useState("");

    const saveFormData = () => {
        const dataForm = {
            city,
            bookDay,
            pickupdate,
            dropdate,
         
        };
        localStorage.setItem("currentUser", JSON.stringify(dataForm));
    };


    return (<>
    <Navbar/>
        <div className='image'>

            <div className='flex-container '>
                <div className='  card'>

                    <div className='container '>
                        <span className="design"> City </span>
                        <select
                            onChange={(e) => {
                                setcity(e.target.value);
                            }}
                            className="design">
                            {" "}
                            <br /> <br />
                            <option value="pune">Pune</option>
                            <option value="bengluru">Bengluru</option>
                            <option value="chandigadh">Chandigadh</option>
                            <option value="chennai">Chennai</option>
                            <option value="Ahmdabad">Ahmdabad</option>
                            <option value="Indore">Indore</option>
                            <option value="Goa">Goa</option>
                            <option value="jaipur">Jaipur</option>
                            <option value="Kolkata">Kolkatta</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>

                    </div>

                    <div className='container'> <span className=" design">Book At</span>
                        <select onChange={(e) => {
                            setBook(e.target.value)

                        }} className='design'>
                            <option >Daily</option>
                            <option >Weekly</option>
                            <option >Monthly</option>
                        </select>
                    </div>
                    <div className='container'>
                    <span className="design">pick up date : </span>
              <input type="date" onChange={(e) => {
                setpickupDate(e.target.value)
              }}  className='design'/>
                    </div>
                    <div className='container'>
                    <span className="design">drop  up date :</span>
              <input type="date" onChange={(e) => {
                setdropDate(e.target.value)
              }} className='design' />
                    </div><br/>                
              <button onClick={saveFormData} className="book-btn">Find Bus </button>        
                </div>
            </div >           
        </div>
<div className='places'>
        <div className='flex-container '>
            <img src={Image} className='img'/>
            <img src={Image1} className='img'/>
            <img src={Image2} className='img'/>
            <img src={Image3} className='img'/>
            <img src={Image4} className='img'/>
        
      
        </div>
        < div className='flex-container '>
            <img src={Image5}className='img' />
            <img src={Image6} className='img'/>
            <img src={Image7} className='img'/>
            <img src={Image8} className='img'/>
            <img src={Image9} className='img'/>
            </div>
            </div>

    </>)
}
export default Home;