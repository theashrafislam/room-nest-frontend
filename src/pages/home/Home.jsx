import React from 'react'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../../components/home/HomeHero';
import ExploreByCategory from '../../components/home/ExploreByCategory';

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

            {/* hero section   */}
            <HomeHero />

            {/* Explore by Category */}
            <ExploreByCategory />


        </div>
    )
}