import './SearchBus.css';
import axios from "axios"
import { Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import BookCard from "./../../components/BookCard/BookCard"
import Navbar from "./../../components/Navbar/Navbar"


function SearchBus() {
    const [user, setUser] = useState({});
    const [searchBus, setSearchBus] = useState([]);
  
    const loadBus = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;
      if (!userId) {
        return;
      }
      const response = await axios.get(`/api/searchbus/${userId}`);
      setSearchBus(response?.data?.data);
      console.log(response?.data?.data);
    };
  
    useEffect(
      () => {
        loadBus();
      },
      [user],
      [searchBus]
    );
  
    useEffect(() => {
      const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (storageUser?.email) {
        setUser(storageUser);
      } else {
        alert("You are not logged in!");
        window.location.href = "/login";
      }
    }, []);

    return<>
    <Navbar/>
    <BookCard/>
    <Navbar/>
   
    </>
}
export default SearchBus;