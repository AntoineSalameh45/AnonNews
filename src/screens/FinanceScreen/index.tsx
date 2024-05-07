import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import fetchFinanceNews from '../../utils/fetchFinanceNews';
import {FINANCE_API} from '@env';
import {useFocusEffect} from '@react-navigation/native';

const Finance = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchNews();
    }, []),
  );

  const fetchNews = async () => {
    try {
      const newsResponse = await fetchFinanceNews.get('/everything', {
        params: {
          q: 'finance',
          sortBy: 'publishedAt',
          apiKey: FINANCE_API,
        },
      });
      const shuffledNews = newsResponse.data.articles.sort(
        () => 0.5 - Math.random(),
      );
      const selectedNews = shuffledNews.slice(0, 10);
      setNews(selectedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => Linking.openURL(item.url)}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
      <Text style={styles.readMore}>Read more</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/img6.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView>
        <View style={styles.newsContainer}>
          {news.length > 0 ? (
            <FlatList
              data={news}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <View style={styles.newsItem}>
              <Text style={styles.newsTitle}>Loading news...</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Finance;
