import React from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <header className="bg-opacity-40 bg-white text-black fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://phimmoichills.net/dev/images/logo.png" alt="phimmoi.ahihi.com" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center px-4 -mb-1 ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center px-4 -mb-1 ">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/new" className="flex items-center px-4 -mb-1">New</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <NavLink to='/login' className="self-center px-8 py-3 rounded">Đăng nhập</NavLink>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Đăng ký</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
