import SchemaBuilder from '@pothos/core';
import { Weather } from '../types/weatherTypes';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Schema Builder
const builder = new SchemaBuilder({});

// Define the Weather object type with objectRef
const WeatherRef = builder.objectRef<Weather>('Weather').implement({
    fields: (t) => ({
        temperature: t.float({
            description: 'Current temperature in Celsius',
            resolve: (weather) => weather.temperature,
        }),
        windspeed: t.float({
            description: 'Current wind speed in m/s',
            resolve: (weather) => weather.windspeed,
        }),
    }),
});

// Define the root Query type for getting weather data
builder.queryType({
    fields: (t) => ({
        getWeather: t.field({
            type: WeatherRef,
            args: {
                latitude: t.arg.float({
                    required: true,
                    description: 'Latitude of the location',
                }),
                longitude: t.arg.float({
                    required: true,
                    description: 'Longitude of the location',
                }),
            },
            resolve: async (parent, { latitude, longitude }) => {
                console.log('Fetching from API async:', process.env.API_URL);
                const apiUrl = `${process.env.API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

                try {
                    console.log('Fetching from API try:', process.env.API_URL);
                    const response = await axios.get(apiUrl);
                    const weatherData = response.data.current_weather;

                    return {
                        temperature: weatherData.temperature,
                        windspeed: weatherData.windspeed,
                    };
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    throw new Error('Failed to fetch weather data');
                }
            },
        }),
    }),
});

// Export the built schema
export const schema = builder.toSchema({});
