export const getWeatherCondition = (weatherCode: number) => {
    let description = '';

    if (weatherCode === 0) {
        description = 'Clear sky';
    } else if ([1].includes(weatherCode)) {
        description = 'Mainly clear';
    } else if ([2].includes(weatherCode)) {
        description = 'Partly cloudy';
    } else if ([3].includes(weatherCode)) {
        description = 'Overcast';
    } else if ([45, 48].includes(weatherCode)) {
        description = 'Fog and depositing rime fog';
    } else if ([51, 53, 55].includes(weatherCode)) {
        description = 'Drizzle: Light, moderate, and dense intensity';
    } else if ([56, 57].includes(weatherCode)) {
        description = 'Freezing Drizzle: Light and dense intensity';
    } else if ([61, 63, 65].includes(weatherCode)) {
        description = 'Rain: Slight, moderate and heavy intensity';
    } else if ([66, 67].includes(weatherCode)) {
        description = 'Freezing Rain: Light and heavy intensity';
    } else if ([71, 73, 75].includes(weatherCode)) {
        description = 'Snow fall: Slight, moderate, and heavy intensity';
    } else if (weatherCode === 77) {
        description = 'Snow grains';
    } else if ([80, 81, 82].includes(weatherCode)) {
        description = 'Rain showers: Slight, moderate, and violent';
    } else if ([85, 86].includes(weatherCode)) {
        description = 'Snow showers slight and heavy';
    } else if (weatherCode === 95) {
        description = 'Thunderstorm: Slight or moderate';
    } else if ([96, 99].includes(weatherCode)) {
        description = 'Thunderstorm with slight and heavy hail';
    }

    return description;
};
