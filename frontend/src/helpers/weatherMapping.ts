// src/helpers/weatherMapping.ts
export const getWeatherCondition = (weatherCode: number) => {
    let description = '';
    let backgroundClass = '';

    if (weatherCode === 0) {
        description = 'Clear sky';
        backgroundClass = 'clear-sky';
    } else if ([1, 2, 3].includes(weatherCode)) {
        description = 'Mainly clear, partly cloudy, and overcast';
        backgroundClass = 'partly-cloudy';
    } else if ([45, 48].includes(weatherCode)) {
        description = 'Fog and depositing rime fog';
        backgroundClass = 'foggy';
    } else if ([51, 53, 55].includes(weatherCode)) {
        description = 'Drizzle: Light, moderate, and dense intensity';
        backgroundClass = 'rainy';
    } else if ([56, 57].includes(weatherCode)) {
        description = 'Freezing Drizzle: Light and dense intensity';
        backgroundClass = 'snowy';
    } else if ([61, 63, 65].includes(weatherCode)) {
        description = 'Rain: Slight, moderate and heavy intensity';
        backgroundClass = 'rainy';
    } else if ([66, 67].includes(weatherCode)) {
        description = 'Freezing Rain: Light and heavy intensity';
        backgroundClass = 'snowy';
    } else if ([71, 73, 75].includes(weatherCode)) {
        description = 'Snow fall: Slight, moderate, and heavy intensity';
        backgroundClass = 'snowy';
    } else if (weatherCode === 77) {
        description = 'Snow grains';
        backgroundClass = 'snowy';
    } else if ([80, 81, 82].includes(weatherCode)) {
        description = 'Rain showers: Slight, moderate, and violent';
        backgroundClass = 'rainy';
    } else if ([85, 86].includes(weatherCode)) {
        description = 'Snow showers slight and heavy';
        backgroundClass = 'snowy';
    } else if (weatherCode === 95) {
        description = 'Thunderstorm: Slight or moderate';
        backgroundClass = 'thunderstorm';
    } else if ([96, 99].includes(weatherCode)) {
        description = 'Thunderstorm with slight and heavy hail';
        backgroundClass = 'thunderstorm';
    }

    return { description, backgroundClass };
};
