import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
            <img src='/logo.png' className='h-8' alt="al-qur'an-plus" />
            <p>HALAL Industries Ltd.<br />Providing reliable tech since 2024</p>
                <p className='text-sm text-center text-gray-400'>
                    ©{new Date().getFullYear()}{' '}
                    <Link
                        to='https://github.com/SideeID'
                        className='hover:underline'
                    >
                        Side ID
                    </Link>
                    . Made by moslem from Mars with ❤️
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Branding</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Design</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Marketing</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover hover:text-skin-linkColorSecondary">About us</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Contact</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Jobs</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Terms of use</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Privacy policy</a>
                <a className="link link-hover hover:text-skin-linkColorSecondary">Cookie policy</a>
            </nav>
        </footer>
        // <footer className='shadow w-auto bg-gray-900 mt-5'>
        //     <div className='w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between'>
        //         <p className='text-sm text-center text-gray-400'>
        //             ©{new Date().getFullYear()}{' '}
        //             <Link
        //                 to='https://github.com/SideeID'
        //                 className='hover:underline'
        //             >
        //                 Side ID
        //             </Link>
        //             . Made by moslem from Mars with ❤️
        //         </p>
        //     </div>
        // </footer>
    );
}

export default Footer;
