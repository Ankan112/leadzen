import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div style={{ backgroundColor: '#1E2022' }} >
            <div className="navbar text-white w-10/12 mx-auto">
                <div className="flex-1">
                    <h1 className="normal-case font-bold text-xl">Leadzen</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu-horizontal px-1">
                        <li className='pr-6'><Link to='/home'>Home</Link></li>
                        <li><Link to='/users'>All Users</Link></li>
                        {/* <li><Link to='/home'>Home</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;