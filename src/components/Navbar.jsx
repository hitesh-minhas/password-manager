import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-700 w-full flex items-center justify-between py-2 px-2 md:px-15 ">
            <div className="logo text-lg md:text-xl">
                <span className='text-white font-bold'>&lt;</span>
                <span className='text-white font-semibold'>Password</span>
                <span className='text-green-500 font-semibold'>Vault/</span>
                <span className='text-green-500 font-bold'>&gt;</span>
            </div>
            <div className="flex  items-center w-2/4 md:w-1/4 justify-between ">
                <a href="/" className='text-gray-400 text-sm hover:text-white hover:scale-105 duration-300 ease-in-out'>Home</a>
                <a href="/About" className='text-gray-400 text-sm hover:text-white hover:scale-105 duration-300 ease-in-out'>About</a>
                <a href="https://github.com/hitesh-minhas/password-manager" target='_blank' className='text-gray-400 text-sm hover:text-white hover:scale-105 duration-300 ease-in-out'>Code</a>
            </div>
        </nav>
    )
}

export default Navbar