import React from 'react'

function Header() {
    const logo = "data:image/png;base64,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"
    return (
        <div >
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 border bottom-2">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <div className="flex items-center">
                            <a href="/" className='flex'>
                                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CDC</span>
                            </a>
                        </div>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>

                                <li>
                                    <a href="https://spc.iitj.ac.in/placement-team" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>

                                <li>
                                    <div href="mailto:placement@iitj.ac.in" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    <button 
                                        onClick="window.location.href='mailto:someone@example.com?subject=Contact&body=Hello';">
                                        Contact Us
                                        </button>
                                    </div>
                                </li>

                                <li>
                                    <a href="/all-jobs" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">All Jobs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header
