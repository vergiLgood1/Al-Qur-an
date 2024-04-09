import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='shadow w-auto bg-gray-900 mt-5'>
            <div className='w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between'>
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
            </div>
        </footer>
    );
}

export default Footer;
