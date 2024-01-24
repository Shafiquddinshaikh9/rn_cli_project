import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const Carousel = () => {
  const images = [
    require('../images/b4.jpg'),
    require('../images/b5.jpg'),
    require('../images/user-interface.png'),
    require('../images/mobile-phone.png'),
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Homelllllll</Text>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          renderItem={({item, index}) => {
            // return <Text>{item.name}</Text>;
            return (
              <View>
                <Image source={item} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {width: '100%', height: 200},
  img: {
    width: '100%',
    height: 200,
  },
});
