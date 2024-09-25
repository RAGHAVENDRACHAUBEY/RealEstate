import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // You can change this to other icon libraries if needed
import COLORS from '../Const/Color';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function SearchScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [selectedPropertyType, setSelectedPropertyType] = useState('Full House');
  const [selectedBHKTypes, setSelectedBHKTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10]);

  const tabs = ['Buy', 'Rent', 'Commercial'];
  const bhkTypes = ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
  const propertyStatus = ['Under Construction', 'Ready'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Bangalore" />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="location-pin" size={20} color="gray" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Search upto 3 localities or landmarks" />
          <Icon name="gps-fixed" size={20} color="gray" style={styles.inputIcon} />
        </View>

        {/* Render fields based on the selected tab */}
        {selectedTab === 'Buy' && (
          <>
            <Text style={styles.sectionTitle}>Looking For</Text>
            <View style={styles.propertyTypeContainer}>
              {['Full House', 'Land/Plot'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.propertyTypeButton, selectedPropertyType === type && styles.selectedPropertyTypeButton]}
                  onPress={() => setSelectedPropertyType(type)}
                >
                  <Text style={[styles.propertyTypeText, selectedPropertyType === type && styles.selectedPropertyTypeText]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>BHK Type</Text>
            <View style={styles.bhkContainer}>
              {bhkTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.bhkButton, selectedBHKTypes.includes(type) && styles.selectedBhkButton]}
                  onPress={() => {
                    if (selectedBHKTypes.includes(type)) {
                      setSelectedBHKTypes(selectedBHKTypes.filter((t) => t !== type));
                    } else {
                      setSelectedBHKTypes([...selectedBHKTypes, type]);
                    }
                  }}
                >
                  <Text style={styles.bhkButtonText}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ paddingLeft:10, }}>
              <Text style={styles.sectionTitle}>Price Range: ₹{priceRange[0]} to ₹{priceRange[1]} Cr</Text>
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
                markerStyle={{ height: 20, width: 20, backgroundColor: '#454d55', }}
              />
            </View>

            <Text style={styles.sectionTitle}>Property Status</Text>
            <View style={styles.propertyStatusContainer}>
              {propertyStatus.map((status) => (
                <TouchableOpacity key={status} style={styles.propertyStatusButton}>
                  <Text style={styles.propertyStatusText}>{status}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {selectedTab === 'Rent' && (
          <>
            <Text style={styles.sectionTitle}>Looking For</Text>
            <View style={styles.propertyTypeContainer}>
              {['Full House', 'PG/Hostel', 'Flatmates'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.propertyTypeButton, selectedPropertyType === type && styles.selectedPropertyTypeButton]}
                  onPress={() => setSelectedPropertyType(type)}
                >
                  <Text style={[styles.propertyTypeText, selectedPropertyType === type && styles.selectedPropertyTypeText]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.sectionTitle}>BHK Type</Text>
            <View style={styles.bhkContainer}>
              {bhkTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.bhkButton, selectedBHKTypes.includes(type) && styles.selectedBhkButton]}
                  onPress={() => {
                    if (selectedBHKTypes.includes(type)) {
                      setSelectedBHKTypes(selectedBHKTypes.filter((t) => t !== type));
                    } else {
                      setSelectedBHKTypes([...selectedBHKTypes, type]);
                    }
                  }}
                >
                  <Text style={styles.bhkButtonText}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ paddingLeft:10, }}>
              <Text style={styles.sectionTitle}>Rent Range: ₹{priceRange[0]} to ₹{priceRange[1]} K</Text>
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
                markerStyle={{ height: 20, width: 20, backgroundColor: '#454d55', }}
              />
            </View>
            <Text style={styles.sectionTitle}>Availability :</Text>
            <View style={styles.bhkContainer}>
              {['Immediate', 'Within 15 days', 'Within 30 days',"Within 45 days"].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.bhkButton,{width:150}, selectedBHKTypes.includes(type) && styles.selectedBhkButton]}
                  onPress={() => {
                    if (selectedBHKTypes.includes(type)) {
                      setSelectedBHKTypes(selectedBHKTypes.filter((t) => t !== type));
                    } else {
                      setSelectedBHKTypes([...selectedBHKTypes, type]);
                    }
                  }}
                >
                  <Text style={styles.bhkButtonText}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {selectedTab === 'Commercial' && (
          <>
            <Text style={styles.sectionTitle}>Looking To</Text>
            <View style={styles.propertyTypeContainer}>
              {['Rent', 'Buy',].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.propertyTypeButton, selectedPropertyType === type && styles.selectedPropertyTypeButton]}
                  onPress={() => setSelectedPropertyType(type)}
                >
                  <Text style={[styles.propertyTypeText, selectedPropertyType === type && styles.selectedPropertyTypeText]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.sectionTitle}>BHK Type</Text>
            <View style={styles.bhkContainer}>
              {['Office Space', 'Co-Working',"Shop","Showroom","Godown/Warehouse","Industrial Shed","Restaurent/Cafe"].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.bhkButton,{width:150,}, selectedBHKTypes.includes(type) && styles.selectedBhkButton]}
                  onPress={() => {
                    if (selectedBHKTypes.includes(type)) {
                      setSelectedBHKTypes(selectedBHKTypes.filter((t) => t !== type));
                    } else {
                      setSelectedBHKTypes([...selectedBHKTypes, type]);
                    }
                  }}
                >
                  <Text style={[styles.bhkButtonText,{fontSize:13}]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
           
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.sectionTitle}>Price Range: ₹{priceRange[0]} to ₹{priceRange[1]} Cr</Text>
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
                markerStyle={{ height: 20, width: 20, backgroundColor: '#454d55', }}
              />
            </View>
          </>
        )}

        <TouchableOpacity  style={styles.searchButton} onPress={()=> navigation.navigate('Services')}>
          <Text style={styles.searchButtonText}>SEARCH</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop:20
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  logoIcon: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoName: {
    marginLeft: 8,
    fontWeight: 'bold',
    color: 'red',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  tabText: {
    color: 'gray',
  },
  selectedTabText: {
    color: 'red',
  },
  content: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 12,
  },
  inputIcon: {
    marginHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  propertyTypeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  propertyTypeButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 8,
  },
  selectedPropertyTypeButton: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow,
  },
  propertyTypeText: {
    color: 'black',
  },
  selectedPropertyTypeText: {
    color: 'white',
  },
  bhkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    
  },
  bhkButton: {
    width: '30%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    alignItems: 'center',
    marginRight: '3%',
    marginBottom: 8,
  },
  selectedBhkButton: {
    backgroundColor: COLORS.yellow,
  },
  bhkButtonText: {
    color: 'black',
    
  },
  propertyStatusContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  propertyStatusButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 8,
  },
  propertyStatusText: {
    color: 'black',
  },
  newBuilderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    marginRight: 8,
  },
  newBuilderText: {
    flex: 1,
  },
  offerBadge: {
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  offerText: {
    color: 'white',
    fontSize: 12,
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom:20
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
