import React, { useState, useEffect } from 'react'
import logo from './img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Loan = () => {
    const [amount, setamount] = useState(0)
    const [week, setweek] = useState(0);

    // Set the Value of amount and Week 
    const change = (e) => {
        if (e.target.id == 'amount') {
            setamount(e.target.value)
        }
        else {
            setweek(e.target.value)
        }
    }
    const navigate = useNavigate();

    // Check Whether User is Exsists or Not 
    const chekuser = () => {
        if (localStorage.getItem('auth') == null) {
            navigate('/login')
        }
    }

    useEffect(() => {
        chekuser();
    }, [])


    const handleClick = () => {
        if (amount == 0 || week == 0) {
            console.log('choose the happens')
        }
        else {
            let apiUrl = "http://localhost:8001/requestloan"
            const postData = {
                auth: localStorage.getItem('auth'),
                amount: amount,
                timee: week,
                installment: parseInt(amount / week)

            }

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type
                    // Add any other headers you need, such as authorization tokens
                },
                body: JSON.stringify(postData), // Convert data to JSON string
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON response
                })
                .then(data => {
                    // Handle the response data here
                    console.log(data);
                    if (data.request == 'saved') {
                        toast.success('Your Request is Granted Successfully  !', {
                            position: "bottom-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                    else {
                        toast.error('Pay your First Loan   !', {
                            position: "bottom-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }

                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    toast.error(error, {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
        }
    }
    return (
        <div className="container w-9/12 m-auto border border-black rounded-md p-8 my-8">
            <div className="flex justify-center">
                <img src={logo} className="h-10 mr-3 rounded-full" alt="Flowbite Logo" />

                <h1 className="font-bold text-3xl text-center" >Loanifier</h1>

            </div>

            <div className="inputs flex items-center justify-center flex-col my-8 ">
                <div className="input flex flex-col items-center justify-center flex-col w-full ">
                    <div className="flex justify-between w-full">
                        <label htmlFor="amount">Loan Amount </label>
                        <p>{amount} </p>
                    </div>
                    <input className="w-full" type="range" min="100000" max="10000000" onChange={change} id="amount" />
                    <div className="flex justify-between w-full">
                        <label htmlFor="amount">1lac ₹ </label>
                        <p>1cr ₹</p>
                    </div>
                </div>
                <div className="input flex flex-col items-center justify-center flex-col w-full my-8 ">
                    <div className="flex justify-between w-full">
                        <label htmlFor="amount">Term Repayment Time  </label>
                        <p>{week} </p>
                    </div>
                    <input className="w-full" type="range" min="0" max="5" onChange={change} id="week" />
                    <div className="flex justify-between w-full">
                        <label htmlFor="amount">1 week </label>
                        <p>5 week </p>
                    </div>
                </div>
            </div>

            <div className="summary">
                <h3 className="text-center font-bold text-s md:text-2xl" >Your Requested Amount is :  {amount}₹</h3>
                <h3 className="text-center font-bold text-md md:text-2xl " >Your Repayment Time is : {week}weeks </h3>
                <h4 className="text-center font-bold text-md md:text-2xl " >Your Weekly installment is : {parseInt(amount / week)}₹</h4>
                <button className="bg-blue-600 p-3 border rounded-lg text-white m-auto block my-4" onClick={handleClick} >Request Loan </button>
            </div>
            <ToastContainer />

        </div>


    )
}

export default Loan; 