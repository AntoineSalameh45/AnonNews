import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../store/news/newsSlice';
import styles from './styles';
import BreakingNews from '../../components/organisms/BreakingNews';

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.news.news);
  const [page] = useState(Math.floor(Math.random() * 10) + 1);
  const [pageSize] = useState(5);

  useEffect(() => {
    dispatch(getNews({page, pageSize}));
  }, [dispatch, page, pageSize]);

  const renderNewsItem = ({item}: any) => (
    <View style={styles.subContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <>
      <ImageBackground
        source={require('../../assets/img4.jpg')}
        style={styles.bgimg}>
        <BreakingNews />
        <FlatList
          data={news}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </ImageBackground>
    </>
  );
};

export default Home;
