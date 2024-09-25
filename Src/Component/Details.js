import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using vector icons
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import COLORS from '../Const/Color';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.99);

const Details = () => {

  const images1 = [
    { src: require('../Assets/images/ren03.jpg'), alt: 'Image 1' },
    { src: require('../Assets/images/rent01.jpg'), alt: 'Image 2' },
    { src: require('../Assets/images/rent04.jpg'), alt: 'Image 3' },
    { src: require('../Assets/images/rent05.jpg'), alt: 'Image 4' },
  ];

  return (
    <GestureHandlerRootView >
    <ScrollView style={styles.container}>
      {/* Property Image */}
      <Carousel
        width={SLIDER_WIDTH}
        height={230}
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

      {/* Property Overview */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Plot for Sale</Text>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewRow}>
          <Text style={styles.overviewItem}>
            <Icon name="bed" size={20} color="#4A90E2" /> 2 BHK
          </Text>
          <Text style={styles.overviewItem}>
            <Icon name="bathtub" size={20} color="#4A90E2" /> 2 Bathrooms
          </Text>
          <Text style={styles.overviewItem}>
            <Icon name="square-foot" size={20} color="#4A90E2" /> 1200 sq.ft
          </Text>
        </View>
        <View style={styles.overviewRow}>
          <Text style={styles.overviewItem}>
            <Icon name="location-on" size={20} color="#4A90E2" /> HSR Layout
          </Text>
          <Text style={styles.overviewItem}>
            <Icon name="local-offer" size={20} color="#4A90E2" /> ₹ 25,000/month
          </Text>
        </View>
      </View>

      {/* Property Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          This is a spacious 2 BHK apartment located in the heart of HSR Layout with modern amenities
          and close proximity to schools, hospitals, and shopping malls.
        </Text>
      </View>

      {/* Property Amenities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesContainer}>
          <View style={styles.amenityItem}>
            <Icon name="pool" size={24} color="#4A90E2" />
            <Text style={styles.amenityText}>Swimming Pool</Text>
          </View>
          <View style={styles.amenityItem}>
            <Icon name="fitness-center" size={24} color="#4A90E2" />
            <Text style={styles.amenityText}>Gym</Text>
          </View>
          <View style={styles.amenityItem}>
            <Icon name="local-parking" size={24} color="#4A90E2" />
            <Text style={styles.amenityText}>Parking</Text>
          </View>
          <View style={styles.amenityItem}>
            <Icon name="security" size={24} color="#4A90E2" />
            <Text style={styles.amenityText}>24x7 Security</Text>
          </View>
          <View style={styles.amenityItem}>
            <Icon name="elevator" size={24} color="#4A90E2" />
            <Text style={styles.amenityText}>Elevator</Text>
          </View>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Owner Contact</Text>
        <View style={styles.contactInfo}>
          <Icon name="phone" size={24} color="#4A90E2" />
          <Text style={styles.contactText}>+91 98765 43210</Text>
        </View>
        <View style={styles.contactInfo}>
          <Icon name="email" size={24} color="#4A90E2" />
          <Text style={styles.contactText}>owner@nobroker.com</Text>
        </View>
      </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    width: ITEM_WIDTH,
    height: 230,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode:"cover"
  },
  propertyImage: {
    width: '100%',
    height: 250,
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:COLORS.primary
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  overviewItem: {
    fontSize: 14,
    color: '#555',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  amenityText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },

});

export default Details;
