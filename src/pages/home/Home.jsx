import React from 'react'
import toast from 'react-hot-toast';

export default function Home() {

    const notify = () => toast.success('Here is your toast.');

    return (
        <div className='text-red-500'>
            <button onClick={notify}>Make me a toast</button>
        </div>
    )
}