import React from 'react'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="bg-white shadow dark:bg-gray-900  ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-10 mr-3 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loanifier</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link className="mr-4 hover:underline md:mr-6" to="/"> Home </Link>
                        </li>
                        <li>
                            <Link className="mr-4 hover:underline md:mr-6" to="/loan"> Request Loan  </Link>

                        </li>

                        <li>
                            <Link className="mr-4 hover:underline md:mr-6" to="/"> Contact </Link>

                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Loanifier™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer