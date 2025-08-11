import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-slate-700 text-gray-400 w-full relative'>
            <div className="container mx-auto p-2 md:w-2/3  flex flex-col ">
                <div className='text-xl md:text-2xl text-gray-300'>About</div>
                <div className=' w-[90%] text-justify self-end text-gray-400 text-xs md:text-sm'>
                    This password manager is a personal project built for educational purposes. It utilizes React for the front-end, Express.js for the back-end, and MongoDB for data storage. The goal was to gain hands-on experience with development and learn best practices for secure data handling. Please note that this is a practice project and should not be used for storing sensitive information
                </div>
            </div>
        </div>
    )

}

export default Footer