import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-10/12 mx-auto">
                <div className="flex-1">
                    <h1 className="normal-case font-bold text-xl">Leadzen</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/users'>All Users</Link></li>
                        {/* <li><Link to='/home'>Home</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;