import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from './DarkMode'

export default function Navbar() {

    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModal = () => {
        setIsOpenNav(!isOpenNav);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className=' border-gray-200 bg-gray-900 sticky top-0 z-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-ghost ">
                        <img src='/logo.png' className='h-8' alt="al-qur'an-plus" />
                        <span className='text-2xl font-semibold '>My - Quran</span>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-4">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'hover:bg-skin-bgLinkSecondaryDark bg-skin-bgLinkSecondary' : 'bg-transparent hover:text-skin-linkColorSecondary'}><a href='/' className='font-semibold '>Home</a></NavLink></li>
                        <li><NavLink to={'/doa'} className={({ isActive }) => isActive ? 'bg-skin-bgLinkSecondary ' : 'bg-transparent hover:text-skin-linkColorSecondary'}><a href='/' className='font-semibold '>Doa</a></NavLink></li>
                        <li><NavLink to={'/Masjid'} className={({ isActive }) => isActive ? 'bg-skin-bgLinkSecondary ' : 'bg-transparent hover:text-skin-linkColorSecondary'}><a href='/' className='font-semibold '>Masjid</a></NavLink></li>
                        <li><NavLink to={'/Donasi'} className={({ isActive }) => isActive ? 'bg-skin-bgLinkSecondary ' : 'bg-transparent hover:text-skin-linkColorSecondary'}><a href='/' className='font-semibold '>Donasi Amal</a></NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className='hover:text-skin-linkColorSecondary'>
                        <DarkMode toggleDarkMode={toggleDarkMode}/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
