import React, { useState, useEffect } from 'react'
import Banner from './img/1.jpg'
import Typed from 'react-typed';
import Personal from './img/bu.jpg';
import home from './img/home.jpg';
import Business from './img/business.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {

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




    return (
        <div className="w-9/12 m-auto my-8">

            {/* Banner Section  */}
            <div className="content flex justify-around items-center flex-col md:flex-row ">

                <div className="article space-y-2 ">
                    <h1 className="font-bold text-3xl" >Welcome to Loanifier</h1>
                    <div className='flex font-bold text-2xl'>
                        <span className="font-bold mr-2 text-blue-500">Provide</span>
                        <Typed
                            strings={[
                                'Home Loan ',
                                'Personal Loan   ',
                                'Business Loan']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            className="flex"
                        >
                            <div className="d-block"></div>
                        </Typed></div>


                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio labore illum illo sed incidunt dignissimos quod, ex neque consectetur quaerat voluptate reiciendis molestias maxime veritatis voluptas reprehenderit necessitatibus earum. lore
                    </p>
                </div>
                <div className="imgg">
                    <img src={Banner} alt="" />
                </div>
            </div>
            <h2 className="font-bold text-center my-4 text-4xl" >Our Services</h2>
            {/* Services Section  */}

            <div className="services flex my-8  flex-col md:flex-row">

                <div className="service flex flex-col justify-center align-center mx-4 shadow-lg p-2  shadow-gray-500/40 cursor-pointer hover:shadow-blue-500/40 px-4">
                    <div className="imgg">
                        <img src={Personal} alt="" width={400} />
                    </div>
                    <div className="article space-y-2 ">
                        <h2 className="text-center font-bold my-2">Personal Loan </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla accusamus quidem ullam distinctio voluptatibus, molestiae cum incidunt eveniet vel facere, aperiam deleniti fugit nisi corrupti. Officia non porro nisi nemo facilis officiis repellat.</p>
                    </div>
                </div>


                <div className="service flex flex-col justify-center align-center mx-4 shadow-lg p-2  shadow-gray-500/40 cursor-pointer hover:shadow-blue-500/40  px-4">
                    <div className="imgg">
                        <img src={home} alt="" width={400} />
                    </div>
                    <div className="article space-y-2 ">
                        <h2 className="text-center font-bold my-2 ">Home Loan </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla accusamus quidem ullam distinctio voluptatibus, molestiae cum incidunt eveniet vel facere, aperiam deleniti fugit nisi corrupti. Officia non porro nisi nemo facilis officiis repellat.</p>
                    </div>
                </div>


                <div className="service flex flex-col justify-center align-center mx-4 shadow-lg p-2  shadow-gray-500/40 cursor-pointer hover:shadow-blue-500/40 px-4">
                    <div className="imgg">
                        <img src={Business} alt="" width={400} />
                    </div>
                    <div className="article space-y-2 ">
                        <h2 className="text-center font-bold my-2 ">Business Loan </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla accusamus quidem ullam distinctio voluptatibus, molestiae cum incidunt eveniet vel facere, aperiam deleniti fugit nisi corrupti. Officia non porro nisi nemo facilis officiis repellat.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home