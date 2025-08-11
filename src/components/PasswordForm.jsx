import React from 'react'
import { useContext } from 'react'
import { passwordContext } from '../store/store'

const PasswordForm = () => {

    const { form, handleInputChange, showPassword, setShowPassword, handleSubmit, editingId } = useContext(passwordContext)

    return (
        <section className='inputs  w-[95%] mx-auto  flex flex-col gap-1.5 items-center p-3'>
            {/* *******************************************************************************************************************
                                                                SITE URL INPUT
                ******************************************************************************************************************* */}
            <input type="text" name='url' value={form.url} placeholder='Enter Site URL' className='w-full bg-white py-0.5 px-5 rounded-full text-sm  border border-green-500 outline-none' onChange={(e) => { handleInputChange(e) }} />

            <div className='w-full flex flex-col md:flex-row gap-1.5 md:items-center md:justify-between'>
                {/* *******************************************************************************************************************
                                                                USERNAME INPUT
                ******************************************************************************************************************* */}
                <input type="text" name='username' value={form.username} placeholder='Enter Username' className='md:w-[65%] bg-white py-0.5 px-5 rounded-full text-sm  border border-green-500 outline-none' onChange={(e) => { handleInputChange(e) }} />
                {/* *******************************************************************************************************************
                                                                PASSWORD INPUT
                ******************************************************************************************************************* */}
                <div className='md:w-[33%]  relative'>
                    <input type={showPassword ? "text" : "password"} name='password' value={form.password} placeholder='Enter Password' className='w-full bg-white py-0.5 pl-5 pr-8 rounded-full text-sm  border border-green-500 outline-none' onChange={(e) => { handleInputChange(e) }} />
                    {/* Hide & SHow PassWord eye image  */}
                    <img src={showPassword ? "/eye.png" : "/close-eye.png"} alt={showPassword ? "ShowPassword-icon" : "HidePassword-icon"} className='h-5 absolute right-1.5 top-0.5 cursor-pointer' onClick={() => { setShowPassword(!showPassword) }} />
                </div>
            </div>
            {/* *******************************************************************************************************************
                                                               SAVE PASSWORD BUTTON
                ******************************************************************************************************************* */}
            <button className='cursor-pointer bg-green-400 hover:bg-green-300 rounded-full px-8 py-1 w-fit border border-green-900 my-2 flex items-center gap-2' onClick={() => { handleSubmit() }}>
                <img src="/apps-add.png" alt="AddPassword-icon" className='h-5' />
                {editingId ? "Update Password" : "Save Password"}
            </button>
        </section>
    )
}

export default PasswordForm