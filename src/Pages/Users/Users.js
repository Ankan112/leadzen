import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log(res.data)
                setUsers(res.data)

            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className='w-10/12 mx-auto'>
                {
                    users.map(user => <div key={user.id} className='flex justify-between items-center border-2 rounded-xl px-4 py-6 my-10'>
                        <div>
                            <h1 className='font-semibold'>Name</h1>
                            <h1>{user.username}</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Contact</h1>
                            <h1>{user.phone}</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>City</h1>
                            <h1>{user.address.city}</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>State</h1>
                            <h1>{user.address.street}</h1>
                        </div>
                        <div>
                            <button className="btn btn-active"><Link to={`/user/${user.id}`}>Details</Link></button>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Users;