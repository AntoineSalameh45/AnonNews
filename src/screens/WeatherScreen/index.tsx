import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Max from '../../assets/svg/MaxSvg.svg';
import Min from '../../assets/svg/MinSvg.svg';
import {WEATHER_API} from '@env';
import fetchWeatherApi from '../../utils/fetchWeather';
import {useFocusEffect} from '@react-navigation/native';

const Weather = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const currentResponse = await fetchWeatherApi.get(
        `/current.json?key=${WEATHER_API}&q=auto:ip`,
      );
      setCurrentWeatherData(currentResponse.data);

      const forecastResponse = await fetchWeatherApi.get(
        `/forecast.json?key=${WEATHER_API}&q=auto:ip&days=3`,
      );
      setForecastData(forecastResponse.data.forecast.forecastday);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchWeatherData();
    }, []),
  );

  return (
    <>
      <ImageBackground
        source={require('../../assets/img5.jpg')}
        style={styles.bgimg}>
        <View style={styles.viewContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherDesc}>Currently:</Text>
              {currentWeatherData ? (
                <Text style={styles.weatherDesc}>
                  {currentWeatherData.current.temp_c}°C
                </Text>
              ) : (
                <Text>Loading weather data...</Text>
              )}
            </View>
            <View style={styles.locationContainer}>
              {currentWeatherData ? (
                <>
                  <Text style={styles.weatherDesc}>
                    {currentWeatherData.location.name},{' '}
                    {currentWeatherData.location.country}
                  </Text>
                  <Text style={styles.weatherText}>
                    {currentWeatherData.current.condition.text}
                  </Text>
                </>
              ) : (
                <Text>Getting current location...</Text>
              )}
            </View>
          </View>
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>3-Day Weather Forecast</Text>
            {forecastData.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.text}>{day.date}</Text>
                <Text style={styles.text}>
                  <Max width={15} height={15} /> {day.day.maxtemp_c}°C,{' '}
                  <Min width={15} height={15} /> {day.day.mintemp_c}°C
                </Text>
                <Text style={styles.text}>
                  {day.day.condition.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Weather;
