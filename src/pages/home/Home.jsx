import React from 'react'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

export default function Home() {

    const name = useAuth();

    // console.log(name)

    const notify = () => toast.success('Here is your toast.');

    return (
        <div className='text-red-500'>
            <Helmet>
                <title>RoomNest | Luxury Room Rental</title>
                <link rel="canonical" href="http://localhost:5173/" />
            </Helmet>
            <button onClick={notify}>Make me a toast</button>
            <p className='text-lg text-red-500'>Hello I am home page okay!!</p>
        </div>
    )
}