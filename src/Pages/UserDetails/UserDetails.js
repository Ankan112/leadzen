import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

const UserDetails = () => {
    const data = useLoaderData();
    return (
        <div>
            <Navigation></Navigation>
            <div className='w-10/12 mx-auto'>
                <div className='flex justify-between items-center border-b-2 px-4 py-6 my-10'>
                    <div>
                        <h1 className='font-semibold'>Name</h1>
                        <h1>Aston caley</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Contact</h1>
                        <h1>2342342</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold'>City</h1>
                        <h1>Dhaka</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold'>State</h1>
                        <h1>Dhaka</h1>
                    </div>
                    <div>
                        <button className="btn btn-active"><Link to='/'>Go Back</Link></button>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Description</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat quisquam, facilis praesentium voluptatem animi esse minima incidunt dolores tempore voluptatum debitis. Libero facilis quibusdam enim adipisci, blanditiis pariatur iusto! Odit voluptatibus nam tenetur esse officiis debitis suscipit optio ut provident hic. Reiciendis similique facere, a commodi, sunt saepe earum et vel eius architecto culpa quibusdam facilis voluptatum consectetur qui.</p>
                </div>
                <div className='my-6'>
                    <h1 className="text-2xl font-bold">Company</h1>
                    <p className='mt-4'><span className='font-semibold'>Name: </span>{data.company.name}</p>
                    <p><span className='font-semibold'>Catch Phrase: </span>{data.company.catchPhrase}</p>
                    <p><span className='font-semibold'>BS: </span>{data.company.bs}</p>
                </div>
                <div className='my-10 grid grid-cols-3'>
                    <div>
                        <div>
                            <h1 className='text-lg font-semibold'>Full Name</h1>
                            <p>{data.name}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>Website</h1>
                            <p>{data.website}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>Email</h1>
                            <p>{data.email}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>Phone</h1>
                            <p>{data.phone}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-lg font-semibold'>Street</h1>
                            <p>{data.address.street}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>City</h1>
                            <p>{data.address.city}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>Suite</h1>
                            <p>{data.address.suite}</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-lg font-semibold'>Zip Code</h1>
                            <p>{data.address.zipcode}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserDetails;