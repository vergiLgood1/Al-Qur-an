<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href='/' className='flex items-center space-x-3'>
                    <img src='/logo.png' className='h-8' alt="al-qur'an-plus" />
                    <span className='text-2xl font-semibold text-white'>
                        My Qur'an
                    </span>
                </a>
                <div className='flex md:order-2'>
                    <button
                        onClick={handleModal}
                        data-collapse-toggle='navbar-search'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-search'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between ${
                        !isOpenNav ? 'hidden' : ''
                    } w-full md:flex md:w-auto md:order-1`}
                    
                >
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium text-lg first-line:border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700'>
                        <li>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block py-2 px-3 text-white md:bg-transparent bg-blue-700 rounded md:p-0 md:text-blue-500'
                                        : 'block py-2 px-3 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/doa'}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'block py-2 px-3 text-white md:bg-transparent bg-blue-700 rounded md:p-0 md:text-blue-500'
                                        : 'block py-2 px-3 rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                }
                            >
                                Doa
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <DarkMode>

                </DarkMode>
            </div>