import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const UserTable = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log(res.data)
                setUsers(res.data)

            })
    }, [])
    // console.log(users)
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                {
                    users.map(user => <div data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: 'white' }} key={user.id} className='flex justify-between items-center border-2 rounded-xl px-4 py-6 my-10'>
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
                {/* <div className='flex justify-between items-center border-2 rounded-xl px-4 py-6 my-10'>
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
                        <button className="btn btn-active">Button</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default UserTable;