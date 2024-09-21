import React, { useState } from 'react';
import { View, Text, TextInput, Animated, TouchableOpacity, StyleSheet, ScrollView, LayoutAnimation, UIManager, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import { PrimaryButton } from '../Const/Button';
import COLORS from '../Const/Color';
import PropertyTypeSection from './PropertyTypeSection';
import PropertyRent from './PropertyRent';
import FeaturedProperties from './FeaturedProperties';
import { Picker } from '@react-native-picker/picker';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = () => {
  const [searchType, setSearchType] = useState('Buy');
  const [locality, setLocality] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [address, setAddress] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); // For banner animation

  // Handle Search
  const handleSearch = () => {
    console.log(`Searching for ${searchType} in ${locality} with property type ${propertyType}, price range ${minPrice} to ${maxPrice}, and address ${address}`);
  };

  // Animate banner fade-in
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Handle animation for button press
  const handleSearchTypeChange = (type) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSearchType(type);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        
        {/* Animated Banner */}
        <Animated.View style={[styles.banner, { opacity: fadeAnim }]}>
          <Text style={styles.heading}>
            Find Your Best Dream House for <Text style={styles.highlight}>Rental, Buy & Sell...</Text>
          </Text>
        </Animated.View>

        {/* Search Options */}
        <View style={styles.searchOptions}>
          <TouchableOpacity
            style={[styles.iconButton, searchType === 'Buy' && styles.activeButton]}
            onPress={() => handleSearchTypeChange('Buy')}
          >
            <FontAwesome name="home" size={24} color={searchType === 'Buy' ? COLORS.backgroundC : COLORS.primary} />
            <Text style={[styles.buttonText, searchType === 'Buy' && styles.activeButtonText]}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconButton, searchType === 'Rent' && styles.activeButton]}
            onPress={() => handleSearchTypeChange('Rent')}
          >
            <FontAwesome name="bed" size={24} color={searchType === 'Rent' ? COLORS.backgroundC : COLORS.primary} />
            <Text style={[styles.buttonText, searchType === 'Rent' && styles.activeButtonText]}>Rent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconButton, searchType === 'Commercial' && styles.activeButton]}
            onPress={() => handleSearchTypeChange('Commercial')}
          >
            <FontAwesome name="building" size={24} color={searchType === 'Commercial' ? COLORS.backgroundC : COLORS.primary} />
            <Text style={[styles.buttonText, searchType === 'Commercial' && styles.activeButtonText]}>Commercial</Text>
          </TouchableOpacity>
        </View>

        {/* Search Inputs */}
        <View style={styles.searchInputs}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={propertyType}
              onValueChange={(itemValue) => setPropertyType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Property Type" value="" />
              <Picker.Item label="Apartment" value="apartment" />
              <Picker.Item label="House" value="house" />
              <Picker.Item label="Condo" value="condo" />
              <Picker.Item label="Land" value="land" />
              <Picker.Item label="Commercial" value="commercial" />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Min Price"
            keyboardType="numeric"
            value={minPrice}
            onChangeText={(text) => setMinPrice(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Max Price"
            keyboardType="numeric"
            value={maxPrice}
            onChangeText={(text) => setMaxPrice(text)}
          />

          <PrimaryButton onPress={handleSearch} title="Search" />
        </View>

        {/* Property Sections */}
        <PropertyTypeSection />
        <PropertyRent />
        <FeaturedProperties />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.backgroundC,
  },
  banner: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  highlight: {
    color: COLORS.yellow,
  },
  searchOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#f8bd0d',
    borderRadius: 10,
    shadowColor: '#f8bd0d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor:COLORS.yellow
  },
  activeButton: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.backgroundC,
  },
  activeButtonText: {
    color: COLORS.backgroundC,
  },
  searchInputs: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.textcolor,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.textcolor,
    marginBottom: 10,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default Home;
