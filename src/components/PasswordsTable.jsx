import { useContext } from 'react'
import { passwordContext } from '../store/store'

const PasswordsTable = () => {
    const { passwords, setEditFields, handleDelete, handleCopy } = useContext(passwordContext)
    return (
        <section className=' PasswordsTable lg:w-[95%] md:w-2/3 mx-auto  md:p-3 '>
            <h1 className=' my-2 text-base'>Your Passwords</h1>
            {
                passwords.length == 0 ? <div className='text-lg md:text-xl text-center my-10'>Vault’s empty! 🧐 Add a password and start securing your secrets! 🔐</div> : <table className=" table-fixed md:table-auto w-full md:rounded-md overflow-hidden text-sm">
                    <thead className='bg-green-800 text-white font-medium'>
                        <tr className='py-2 '>
                            <th className='w-[40%] text-xs font-medium py-2 border-r border-white'>Site URL</th>
                            <th className='w-[30%] text-xs font-medium border-r border-white'>Username</th>
                            <th className='w-[30%] text-xs font-medium border-r border-white'>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passwords.map((item) => {
                            return <tr key={item._id} className='text-center bg-green-100 border-b border-white'>
                                <td className='py-2 px-1 text-xs border-r border-white hover:cursor-pointer hover:text-blue-700 break-words'><a href={item.url} target='_blank'>{item.url}</a></td>
                                <td className='text-xs border-r border-white '>{item.username}</td>
                                <td className='text-xs border-r border-white '>
                                    <div className=' flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-1'>
                                        <p className='min-w-25 '>{"*".repeat(item.password.length)}</p>
                                        <div className='flex items-center justify-between gap-2 md:gap-1'>
                                            <lord-icon onClick={() => { setEditFields(item) }}
                                                className="h-5 cursor-pointer"
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="loop"
                                                delay="2000"
                                                stroke="bold"
                                                colors="primary:#121331,secondary:#000000">
                                            </lord-icon>
                                            <lord-icon onClick={() => { handleDelete(item._id) }}
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                className="h-5 cursor-pointer"
                                                trigger="loop"
                                                delay="2000"
                                                stroke="bold"
                                                colors="primary:#121331,secondary:#000000"
                                            >
                                            </lord-icon>
                                            <img src="/copy.png" alt="Copy" className='h-5 cursor-pointer' onClick={() => { handleCopy(item.password) }} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </section >
    )
}

export default PasswordsTable