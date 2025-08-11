import React from 'react'

const VaultHeader = () => {
    return (
        <section className='Upper mx-auto  md:w-1/4 flex flex-col justify-center items-center gap-1 my-1'>
            <div className="logo text-xl md:text-2xl text-center ">
                <span className='text-green-500 font-bold'>&lt;</span>
                <span className='text-black font-semibold'>Password</span>
                <span className='text-green-500 font-semibold'>Vault/</span>
                <span className='text-green-500 font-bold'>&gt;</span>
            </div>
            <div className='text-green-900  text-center'>Your own Password Manager</div>
        </section>
    )
}

export default VaultHeader