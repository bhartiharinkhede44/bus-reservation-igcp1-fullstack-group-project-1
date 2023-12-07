import './SearchBus.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import Navbar from "./../../components/Navbar/Navbar"


function Contact() {
    return<>
    <Navbar/>
    <div className='bg-img'>  </div>
   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Pune to Nashik</h2>
    <h2>Fron INR 313</h2>
</div>
<div className='flex-search-bar'>
    <h3>175 Bus Options</h3>
    <h3>First Bus 00:44</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Pune to Mumbai</h2>
    <h2>From INR 177</h2>
</div>
<div className='flex-search-bar'>
    <h3>644 bus options</h3>
    <h3>First Bus 00:56</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Nashik to Pune</h2>
    <h2>Fron INR 307</h2>
</div>
<div className='flex-search-bar'>
    <h3>163 Bus Options</h3>
    <h3>First Bus 1:40</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Pune to Aurangabad (Maharashtra)</h2>
    <h2>Fron INR 359</h2>
</div>
<div className='flex-search-bar'>
    <h3>607 Bus Options</h3>
    <h3>First Bus 00:01</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Mumbai to Pune</h2>
    <h2>Fron INR 151</h2>
</div>
<div className='flex-search-bar'>
    <h3>952 Bus Options</h3>
    <h3>First Bus 02:00</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Pune to Kolhapur(Maharashtra)</h2>
    <h2>Fron INR 344</h2>
</div>
<div className='flex-search-bar'>
    <h3>440 Bus Options</h3>
    <h3>First Bus 22:00</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>


   <div className='searchcard'>
<div className='flex-search-bar'>
    <h2>Aurangabad (Maharashtra) to Pune</h2>
    <h2>Fron INR 345</h2>
</div>
<div className='flex-search-bar'>
    <h3>281 Bus Options</h3>
    <h3>First Bus 00:10</h3>
    <h3>Last Bus 23:59</h3>
    <Link to="/booknow" className='btn-link'>Book Now</Link>
</div>
   </div>

  
    </>
}
export default Contact;