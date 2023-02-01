import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import UserTable from '../UserTable/UserTable';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <UserTable></UserTable>
            <Footer></Footer>
        </div>
    );
};

export default Home;