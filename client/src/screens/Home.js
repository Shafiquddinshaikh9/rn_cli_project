import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {Banner} from 'react-native-paper';
import Carousel from '../components/Carousel';

const Home = () => {
  const images = [
    require('../images/b4.jpg'),
    require('../images/b5.jpg'),
    require('../images/user-interface.png'),
    require('../images/mobile-phone.png'),
  ];
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
  },
  // slider: {width: '100%', height: 200},
});
