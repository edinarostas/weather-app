// src/components/Weather.tsx
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { getWeatherCondition } from '../helpers/weatherMapping';
import './Weather.scss';

// Define the TypeScript types for the weather data
interface WeatherData {
    getWeather: {
        temperature: number;
        weatherDescription: number;
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
      weatherDescription
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

    const weatherCode = Number(data?.getWeather.weatherDescription);
    const description = getWeatherCondition(weatherCode);

    return (
        <div className='weather-container'>
            <div className='weather-card'>
                <h1 className='weather-card__title'>Current Weather</h1>
                <h2 className='weather-card__city'>Vancouver, BC</h2>
                <p className='weather-card__temperature'>
                    {data?.getWeather.temperature} °C
                </p>
                <p className='weather-card__data'>
                    Condition: {description}
                </p>
            </div>
        </div>
    );
};

export default Weather;
