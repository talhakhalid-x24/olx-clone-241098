import React from 'react';
import GetApp from './Get App/GetApp';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Recommendation from './Recommendation/Recommendation';
import Search from './Search Pages/Search';
import BookList from './Bottom List/BottomList';
import Footer from './Footer/Footer';
import ScrollArrow from './Bottom to Top/ScrollArrow';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <figure></figure>
            <Search />
            <ScrollArrow />
            <Recommendation />
            <GetApp />
            <BookList />
            <Footer />
        </div>
    );
}

export default Home;
