import React, { useState } from 'react'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        let apiUrl = "http://localhost:8001/login"
        const postData = {
            loginpass: password,
            loginusername: username
        }
        console.log(username, password)
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
                setpassword('');
                setusername('');
                toast.success('You Log in  Successfully !', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                localStorage.setItem('auth', data.auth)
                localStorage.setItem('user', data.user)


                setTimeout(() => {
                    window.location.href = "http://localhost:8000/"

                }, 1500)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })

    }



    const handleChange = (e) => {
        if (e.target.id == 'username') {
            setusername(e.target.value)
        }
        else {
            setpassword(e.target.value)
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 p-8">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto p-2 lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2 rounded-full" src={logo} alt="logo" />
                    Loanifier
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="usernmae" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username </label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anas341" required="" value={username} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={handleChange} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?  <Link to='/signup' classNameName="font-medium text-blue-600 hover:underline dark:text-primary-500">  Signup </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </section>
    )
}

export default Login