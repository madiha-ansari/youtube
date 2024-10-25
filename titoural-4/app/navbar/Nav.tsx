import React from 'react'

const Nav = () => {
    return (
        <div>

            <div className='bg-black p-4'>
                <ul className='flex  justify-evenly'>
                    <li className='cursor-pointer text-slate-200 hover:text-red-800 italic'>Home</li>
                    <li className='cursor-pointer text-slate-200 hover:text-red-800 italic'>About</li>
                    <li className='cursor-pointer text-slate-200 hover:text-red-800 italic'>Services</li>
                    <li className='cursor-pointer text-slate-200 hover:text-red-800 italic'>Contact</li>
                </ul>
            </div>


        </div>
    )
}

export default Nav
