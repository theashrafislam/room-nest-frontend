import React from 'react'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

export default function Home() {

    const name = useAuth();

    // console.log(name)

    const notify = () => toast.success('Here is your toast.');

    return (
        <div className='text-red-500'>
            <button onClick={notify}>Make me a toast</button>
            <p className='text-lg text-red-500'>Hello I am home page okay!!</p>
        </div>
    )
}