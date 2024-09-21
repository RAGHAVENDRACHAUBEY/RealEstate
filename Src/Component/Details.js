import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const Details = () => {
  const images1 = [
    { src: require('../Assets/images/ren03.jpg'), alt: 'Image 1' },
    { src: require('../Assets/images/rent01.jpg'), alt: 'Image 2' },
    { src: require('../Assets/images/rent04.jpg'), alt: 'Image 3' },
    { src: require('../Assets/images/rent05.jpg'), alt: 'Image 4' },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <Carousel
        width={SLIDER_WIDTH}
        height={200}
        data={images1}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.src} style={styles.image} resizeMode="cover" />
          </View>
        )}
        mode="parallax" // Optional: you can change the layout mode to default, parallax, or stack
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        loop
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Details;
