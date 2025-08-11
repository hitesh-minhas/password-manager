import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import PasswordsTable from './PasswordsTable';
import PasswordForm from './PasswordForm';
import VaultHeader from './VaultHeader';
import { useContext } from 'react';
import { passwordContext } from '../store/store';

const vault = () => {

    const { fetchPasswords } = useContext(passwordContext)
    useEffect(() => { fetchPasswords() }, [])

    return (
        <div className='container md:mx-auto md:my-10 md:w-[95%] lg:w-2/3  p-3 bg-green-50  md:rounded-xl  min-h-[98vh] md:min-h-[90vh]'>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <VaultHeader />
            <PasswordForm />
            <PasswordsTable />
        </div >
    )
}

export default vault