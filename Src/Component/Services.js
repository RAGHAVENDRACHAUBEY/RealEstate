import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  Easing,
} from 'react-native';
import COLORS from '../Const/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { RadioButton } from 'react-native-paper';

const {width} = Dimensions.get('window'); // Get screen width for responsive design

const properties = [
  {
    id: '1',
    image: require('../Assets/images/product1.jpg'),
    amount: '$41,000',
    rating: 5,
    reviews: 20,
    title: 'Place perfect for nature',
    address: '318-S Oakley Blvd, Chicago, IL 60612, USA',
    category: 'Apartment',
  },
  {
    id: '2',
    image: require('../Assets/images/product2.jpg'),
    amount: '$41,000',
    rating: 5,
    reviews: 20,
    title: 'Place perfect for nature',
    address: '318-S Oakley Blvd, Chicago, IL 60612, USA',
    category: 'Apartment',
  },
  {
    id: '3',
    image: require('../Assets/images/product3.jpg'),
    amount: '$41,000',
    rating: 5,
    reviews: 20,
    title: 'Place perfect for nature',
    address: '318-S Oakley Blvd, Chicago, IL 60612, USA',
    category: 'Apartment',
  },
];

const Services = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 40]); // Initial range
  const [propertyType, setPropertyType] = useState('buy');

  const handleFilter = (type) => {
    console.log(`Filter by ${type}`);
    // Implement the filter logic here...
    setFilterModalVisible(false); // Close the modal after selecting filter
  };

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, index * 200, (index + 2) * 200];
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 1, 1, 0],
    });
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.85, 1, 1, 0.85],
    });

    return (
      <TouchableOpacity style={styles.propertyCard} onPress={()=> navigation.navigate('Details')}>
        <Animated.View style={[styles.propertyCard, {opacity, transform: [{scale}]}]}>
          <Image source={item.image} style={styles.propertyImage} />
          <View style={styles.propertyContent}>
            <Text style={styles.propertyAmount}>{item.amount}</Text>
            <View style={styles.propertyRating}>
              {[...Array(item.rating)].map((_, i) => (
                <Text key={i} style={styles.star}>★</Text>
              ))}
              <Text style={styles.reviews}>({item.reviews} Reviews)</Text>
            </View>
            <Text style={styles.propertyTitle}>{item.title}</Text>
            <Text style={styles.propertyAddress}>{item.address}</Text>
            <Text>Category: {item.category}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Filter Icon */}
      <View > 
      <TouchableOpacity
      style={{ flexDirection: "row" ,gap:5}}
        // style={styles.filterIcon}
        onPress={() => setFilterModalVisible(true)}>
     
      <Text style={styles.title}>Filter</Text> 
       <FontAwesome name="filter" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      </View>
      {/* Modal for Filters */}
      <Modal
        visible={filterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Close Icon */}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setFilterModalVisible(false)}>
              <FontAwesome name="close" size={24} color={COLORS.primary} />
            </TouchableOpacity>

            <Text style={styles.radioTitle}>Property Type</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setPropertyType(newValue)}
              value={propertyType}
            >
              <View style={styles.radioContainer}>
                <RadioButton value="buy" />
                <Text>Buy</Text>
              </View>
              <View style={styles.radioContainer}>
                <RadioButton value="rent" />
                <Text>Rent</Text>
              </View>
              <View style={styles.radioContainer}>
                <RadioButton value="commercial" />
                <Text>Commercial</Text>
              </View>
            </RadioButton.Group>

            {/* Sort Filters */}
            <Text style={styles.modalTitle}>Sort by</Text>
            <TouchableOpacity onPress={() => handleFilter('highToLow')}>
              <Text style={styles.filterOption}>Price: High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilter('lowToHigh')}>
              <Text style={styles.filterOption}>Price: Low to High</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilter('aToZ')}>
              <Text style={styles.filterOption}>Title: A to Z</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilter('zToA')}>
              <Text style={styles.filterOption}>Title: Z to A</Text>
            </TouchableOpacity>

            {/* Price Range Slider */}
            <Text style={styles.sliderLabel}>
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </Text>
            <MultiSlider
              values={priceRange}
              sliderLength={280}
              onValuesChange={values => setPriceRange(values)}
              min={0}
              max={100}
              step={1}
              allowOverlap={false}
              snapped
              selectedStyle={{ backgroundColor: '#da0f22' }}
              unselectedStyle={{ backgroundColor: '#ddd' }}
              markerStyle={{ height: 20, width: 20, backgroundColor: '#454d55' }}
            />
          </View>
        </View>
      </Modal>

      {/* Animated FlatList */}
      <Animated.FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.propertyList}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:10
  },
  propertyList: {
    paddingVertical: 10,
    marginTop:15,
  },
  propertyCard: {
    width: width * 0.9,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  propertyImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  propertyContent: {
    padding: 10,
  },
  propertyAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  propertyRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  star: {
    fontSize: 16,
    color: '#FFD700', // Gold color for stars
  },
  reviews: {
    marginLeft: 5,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  propertyAddress: {
    fontSize: 14,
    color: 'gray',
  },
  // filterIcon: {
  //   position: 'absolute',
  //   top: 20,
  //   left:20,
  //   zIndex: 10,
  // },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  closeIcon: {
    alignSelf: 'flex-end',
  
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterOption: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  radioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  sliderLabel: {
    fontSize: 16,
    marginTop: 10,
  },
  title:{
    fontSize:16,fontWeight:"bold",color:"black"
  }
});

export default Services;
