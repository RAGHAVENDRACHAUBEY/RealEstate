import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../Const/Color';

const { width } = Dimensions.get('window');  

const propertyTypes = [
  { id: '1',  name: 'Houses', count: '30 Properties' },
  { id: '2',name: 'Packer & Mover', count: '25 Properties', link: '/packer-mover' },
  { id: '3',  name: 'Offices', count: '25 Properties' },
  { id: '4', name: 'Villas', count: '40 Properties' },
  
  // Add more items if needed
];

const PropertyTypeSection = () => {

  const renderItem = ({ item }) => (
    <View style={styles.propertyCard}>
      <View style={styles.propertyName}>
        <Text style={styles.propertyTitle}>{item.name}</Text>
        <Text>{item.count}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeading}>
        <Text style={styles.heading}>Explore by Property Type</Text>
        <View style={styles.sectionLine}>
          <View style={styles.line1} />
          <View style={styles.line2} />
        </View>
      </View>

      <FlatList
        data={propertyTypes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.propertyList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1
  },
  sectionHeading: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:COLORS.primary
  },
  sectionLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent:"center",
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
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  propertyList: {
    alignItems: 'center',
  },
  propertyCard: {
  
    width: width * 0.5, // Adjust width as needed
    marginRight: 20,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginVertical:5
  },
  propertyImage: {
    resizeMode: 'contain',
  },
  propertyName: {
    padding: 10,
    flexDirection:"column",
    alignContent:"center",
    justifyContent:"center"
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
  },
  separator: {
    width: 20, 
  },
});

export default PropertyTypeSection;
