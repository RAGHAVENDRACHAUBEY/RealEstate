import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../Const/Color';

const { width } = Dimensions.get('window');  // Get screen width for responsive design

const properties = [
    {
      id: '1',
      image: require('../Assets/images/product1.jpg'),
      amount: "$41,000",
      rating: 5,
      reviews: 20,
      title: "Place perfect for nature",
      address: "318-S Oakley Blvd, Chicago, IL 60612, USA",
      beds: 4,
      baths: 4,
      sqft: "35,000 Sqft",
      listedOn: "16 Jan 2023",
      category: "Apartment",
     
    },
    {
      id: '2',
      image: require('../Assets/images/product2.jpg'),
      amount: "$41,000",
      rating: 5,
      reviews: 20,
      title: "Place perfect for nature",
      address: "318-S Oakley Blvd, Chicago, IL 60612, USA",
      beds: 4,
      baths: 4,
      sqft: "35,000 Sqft",
      listedOn: "16 Jan 2023",
      category: "Apartment",
   
    },
    {
      id: '2',
      image: require('../Assets/images/product3.jpg'),
      amount: "$41,000",
      rating: 5,
      reviews: 20,
      title: "Place perfect for nature",
      address: "318-S Oakley Blvd, Chicago, IL 60612, USA",
      beds: 4,
      baths: 4,
      sqft: "35,000 Sqft",
      listedOn: "16 Jan 2023",
      category: "Apartment",
      
    },
    // Add more properties here
  ];
const FeaturedProperties = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.propertyCard} >
    <View style={styles.propertyCard}>
      <Image source={item.image} style={styles.propertyImage} />
      <View style={styles.propertyContent}>
        <View style={styles.propertyHeader}>
          <Text style={styles.propertyAmount}>{item.amount}</Text>
        </View>
        <View style={styles.propertyRating}>
          {[...Array(item.rating)].map((_, i) => (
            <Text key={i} style={styles.star}>★</Text>
          ))}
          <Text style={styles.reviews}>({item.reviews} Reviews)</Text>
        </View>
        <Text style={styles.propertyTitle}>{item.title}</Text>
        <Text style={styles.propertyAddress}>{item.address}</Text>
        {/* <View style={styles.propertyDetails}>
          <Text>{item.beds} Beds</Text>
          <Text>{item.baths} Baths</Text>
          <Text>{item.sqft}</Text>
        </View> */}
        <View style={styles.propertyFooter}>
          <Text>Category: {item.category}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     <View style={styles.sectionHeading}>
        <Text style={styles.heading}>Properties for Sales</Text>
      </View>

      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.propertyList}
      />

      {/* <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Properties</Text>
      </TouchableOpacity> */}

      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  sectionHeading: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:COLORS.primary
  },
  sectionLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  line1: {
    width: 50,
    height: 2,
    backgroundColor: 'black',
    marginRight: 5,
  },
  line2: {
    width: 50,
    height: 2,
    backgroundColor: 'black',
  },
  headingContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },

  description: {
    fontSize: 16,
    color: 'gray',
  },
  propertyList: {
    paddingVertical: 10,
  },
  propertyCard: {
    width: width * 0.7,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  propertyImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  propertyContent: {
    padding: 10,
  },
  propertyHeader: {
    marginBottom: 10,
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
    marginBottom: 5,
  },
  propertyAddress: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  propertyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  propertyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAllButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  viewAllText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeaturedProperties;
