import React from 'react';
import Weather from '../components/Weather';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Weather />
        </div>
    );
};

export default HomePage;
