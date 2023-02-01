import React from 'react';
import banner from '../../../image/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Effective Users Information <br /> Management System</h1>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;