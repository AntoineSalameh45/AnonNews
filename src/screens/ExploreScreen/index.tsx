import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  Pressable,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../store/news/newsSlice';
import styles from './styles';
import Right from '../../assets/svg/RightSvg.svg';
import Left from '../../assets/svg/LeftSvg.svg';
import {AppDispatch} from '../../store';

const Explore = () => {
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const [pageSize] = useState(10);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const news = useSelector((state: any) => state.news.news);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getNews({page, pageSize}));
      } catch (error) {
        if (error.response && error.response.status === 403) {
          Alert.alert('Token has expired. Please login again.');
        } else {
          console.error('Error fetching news:', error);
        }
      }
    };

    fetchData();
  }, [page, pageSize, dispatch]);

  const handleNext = () => {
    if (currentNewsIndex === news.length - 1) {
      setPage(page => page + 1);
      setCurrentNewsIndex(0);
    } else {
      setCurrentNewsIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentNewsIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 11) {
      setPage(11);
    } else if (pageNumber < 1) {
      setPage(1);
    } else {
      setPage(pageNumber);
    }
    setCurrentNewsIndex(0);
  };

  const renderNewsItem = ({item}: any) => (
    <>
      {item.image_url ? (
        <Image source={{uri: item.image_url}} style={styles.newsImage} />
      ) : (
        <Image
          source={require('../../assets/img4.jpg')}
          style={styles.newsImage}
        />
      )}
      <View style={styles.newsItemContainer}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        {item.description && (
          <Text style={styles.newsDescription}>{item.description}</Text>
        )}
        <Text style={styles.newsPublishedOn}>{item.pubDate}</Text>
        <View style={styles.newsInfoContainer}>
          <Text style={styles.newsSource}>
            Source:{' '}
            <Text
              style={styles.newsSourceLink}
              onPress={() => Linking.openURL(item.source_url)}>
              {item.source_url}
            </Text>
          </Text>
          <Text style={styles.newsCountry}>
            Country: {item.country.join(', ')}
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <ImageBackground
      source={require('../../assets/img4.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.newsContainer}>
        <FlatList
          data={news.slice(currentNewsIndex, currentNewsIndex + 1)}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) =>
            item && item.id ? item.id.toString() : index.toString()
          }
          showsHorizontalScrollIndicator={false}
          onScrollToIndexFailed={() => {}}
        />
        <View style={styles.paginationContainer}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentNewsIndex === 0}>
            <Left width={20} height={20} />
          </TouchableOpacity>
          <Text>
            {currentNewsIndex + 1} / {news.length}
          </Text>
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentNewsIndex === news.length - 1}>
            <Right width={30} height={30} />
          </TouchableOpacity>
          {page > 2 && (
            <Pressable
              onPress={() => handlePageChange(page - 2)}
              style={{display: page <= 2 ? 'none' : 'flex'}}>
              <Text>{page - 2}</Text>
            </Pressable>
          )}
          {page > 1 && (
            <Pressable
              onPress={() => handlePageChange(page - 1)}
              style={{display: page <= 1 ? 'none' : 'flex'}}>
              <Text>{page - 1}</Text>
            </Pressable>
          )}
          <Text style={styles.activePage}>{page}</Text>
          {page < 11 && (
            <Pressable
              onPress={() => handlePageChange(page + 1)}
              style={{display: page >= 11 ? 'none' : 'flex'}}>
              <Text>{page + 1}</Text>
            </Pressable>
          )}
          {page < 10 && (
            <Pressable
              onPress={() => handlePageChange(page + 2)}
              style={{display: page >= 10 ? 'none' : 'flex'}}>
              <Text>{page + 2}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Explore;
