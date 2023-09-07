import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myloan = () => {
    const [date, setdate] = useState(new Date());
    const [dates, setDates] = useState([])
    const [loan, setloan] = useState({})
    const [approved, setapproved] = useState(false); 
    const [Exsists, setExsists] = useState(false)

    const fetchData = () => {
        const apiUrl = 'http://127.0.0.1:8001/myloan';
        const requestData = {
            auth: localStorage.getItem('auth')
        };

        //  Made Post request to Give data to Backend 
        fetch(apiUrl, {
            method: 'GET',  //  HTTP method (POST, GET, etc.)
            headers: {
                'Content-Type': 'application/json;  charset=utf-8',  //  content type
                'auth': localStorage.getItem('auth')
            },
            // Convert data to JSON string
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.length)
                if(data.length === 0 ){
                    setExsists(false); 
                    console.log('thsi ')
                }

                else {
                    setExsists(true)
                    console.log('this isere ')
                    if (data[0]?.status == '') {
                        setloan(data[0])
    
                    }
                    else {
                        toast.success('Your loan is approved !', {
                            position: "bottom-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setloan(data[0])
                        setapproved(true)
    
                        // Convert String to Date
    
                        let str = data[0]?.date
                        var strToDate = new Date(str);
                        strToDate.setDate(strToDate.getDate());
                        let l = []
    
                        // set date where user Have to pay installment 
                        for (let i = 0; i < data[0]?.term; i++) {
                            strToDate.setDate(strToDate.getDate() + 7)
                            l.push(strToDate.toString())
                        }
                        setDates(l)
    
                    }
                }
                // Check Loan is approved or Not 

               

            })


    }
    useEffect(() => {
        fetchData();

    }, [])
    return (
        <>
        {Exsists &&     <div className="container w-9/12 m-auto border  border-black rounded p-4 my-4 ">
        <h1>Your requested Amount is : {loan.amount}₹</h1>
        <p>Your Weekly Installment is : {loan.installment}₹</p>
        <p> Your Loan Request Date {loan.date?.toString()}</p>
        <p>Your Loan Status is : {loan.status}</p>

        {/* Display Date Section  */}

        {dates.map((item) => {
            if (approved == true) {
                return (
                    <div className="text-center font-bold ml-4 " key={item.slice(0, 15)} > Pay your Installment at this date :  {item.slice(0, 15)}</div>
                )
            }

        })}
        {!approved && <p className="font-bold text-red-800" >Your Loan is not approved </p>}
        <small className="font-bold text-center my-4">Kindly Pay Your Installment on Time </small>
        <ToastContainer />
    </div>}

    {!Exsists && <p className="font-bold text-center text-2xl my-4" >You don't take any  Loan from Us  </p>}
    </>
     
    )
}

export default Myloan