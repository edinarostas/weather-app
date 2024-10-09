// src/components/Weather.tsx
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import './Weather.scss';

// Define the TypeScript types for the weather data
interface WeatherData {
    getWeather: {
        temperature: number;
        windspeed: number;
    };
}

interface WeatherVars {
    latitude: number;
    longitude: number;
}

// GraphQL Query to get weather data
const GET_WEATHER = gql`
  query GetWeather($latitude: Float!, $longitude: Float!) {
    getWeather(latitude: $latitude, longitude: $longitude) {
      temperature
      windspeed
    }
  }
`;

const Weather: React.FC = () => {
    const [location] = useState({ latitude: 49.2827, longitude: -123.1207 }); // Vancouver, BC

    const { loading, error, data } = useQuery<WeatherData, WeatherVars>(GET_WEATHER, {
        variables: {
            latitude: location.latitude,
            longitude: location.longitude,
        },
    });

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error fetching weather data</p>;

    return (
        <div className='weather-container'>
            <div className='weather-card'>
                <h1 className='weather-card__title'>Current Weather</h1>
                <p className='weather-card__data'>
                    Temperature: {data?.getWeather.temperature}°C
                </p>
                <p className='weather-card__data'>
                    Windspeed: {data?.getWeather.windspeed} m/s
                </p>
            </div>
        </div>
    );
};

export default Weather;
