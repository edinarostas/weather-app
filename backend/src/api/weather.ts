import axios from 'axios';

export const getWeather = async (latitude: number, longitude: number) => {
    try {
        const apiUrl = `${process.env.API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        return {
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Could not fetch weather data');
    }
};
