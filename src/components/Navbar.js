import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState(false);
  const [username, setusername] = useState('');
  const chekuser = () => {
    if (localStorage.getItem('auth') !== null) {
      setuser(true)
      setusername(localStorage.getItem('user'))
    }
    else {
      navigate('/login')
    }

  }
  const handlelogout = () => {
    localStorage.clear();
    toast.success('Your Log Out Successfully !', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    window.location.href = "http://localhost:8000/login"

  }

  useEffect(() => {
    chekuser();
  }, [])

  return (
    <nav className=" flex items-center flex-col justify-evenly  shadow-lg py-4 md:flex-row item-center inline ">
      <div className="logo font-bold text-3xl text-blue-500">
        Loanifier
      </div>
      <ul className="flex space-x-6 py-2   font-bold">
        <Link className="hover:text-blue-300  cursor-pointer " to="/">Home</Link>
        <Link className="hover:text-blue-300  cursor-pointer " to="/">Services</Link>
        <Link className="hover:text-blue-300  cursor-pointer " to="/loan">Request Loan </Link>

      </ul>

      <div className="auth space-x-6 font-bold py-2 ">
        
        {/* Check user is Exsists or Not */}
        {!user && <div> <Link className="hover:text-blue-300  cursor-pointer mx-2 " to="/login">Login</Link>
          <Link className="hover:text-blue-300  cursor-pointer mx-2 " to="/signup"> Signup</Link>
        </div>}

        {user && <div> <button onClick={handlelogout}>Logout</button>  <button className="mx-2 text-blue-700">{username}</button>  <Link className="hover:text-blue-300  cursor-pointer mx-2 " to="/myloan" >Myloan</Link>  </div>}

      </div>
      <ToastContainer />
    </nav>
  )
}

export default Navbar