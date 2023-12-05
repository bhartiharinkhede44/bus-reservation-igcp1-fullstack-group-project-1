import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storageUser);
    }, [])
    return (
        <>
            <div className="design-nav flex">
                <div>
                    <Link to="/" className="font text-reserve">Bus reservation🚎</Link>
                </div >
                <div className="flex-direction">
                    <Link to="/login" className="container-text  design">Login</Link>
                    <Link to="/signup" className="container-text  design"> Signup</Link>
                    <Link to="/blog" className="container-text  design">Blog</Link>
                    <Link to="/faq" className="container-text  design">FAQ</Link>
                    <Link to="/contact" className="container-text  design"> Contact</Link>
                </div>
                <div className="user ">
                    Hello,{user.name || "User"}
                    {
                        user?.name ? (<span
                            onClick={(() => {
                                localStorage.removeItem("user");
                                window.location.href = "/login";
                            })}>
                            <span className="logout-btn">Logout</span>
                        </span>) : null
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar