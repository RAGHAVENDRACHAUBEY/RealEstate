import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PrimaryButton} from '../Const/Button';
import COLORS from '../Const/Color';
import PropertyTypeSection from './PropertyTypeSection';
import PropertyRent from './PropertyRent';
import FeaturedProperties from './FeaturedProperties';
import {Picker} from '@react-native-picker/picker';
import Navigation from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Home = ({navigation}) => {
  const [searchType, setSearchType] = useState('Buy');
  const [locality, setLocality] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [address, setAddress] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  // Handle Search
  const handleSearch = () => {
    navigation.navigate('SearchScreen');
    console.log(
      `Searching for ${searchType} in ${locality} with property type ${propertyType}, price range ${minPrice} to ${maxPrice}, and address ${address}`,
    );
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
  const handleSearchTypeChange = type => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSearchType(type);
  };
  const [selectedTab, setSelectedTab] = useState('Buy');
  const tabs = ['Buy', 'Rent', 'Commercial'];
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Animated Banner */}
        <Animated.View style={[styles.banner, {opacity: fadeAnim}]}>
          <Text style={styles.heading}>
            Find Your Best Dream House for{' '}
            <Text style={styles.highlight}>Rental, Buy & Sell...</Text>
          </Text>
        </Animated.View>

        {/* Search Options */}
        <View style={styles.tabContainer}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}
              onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.selectedTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>
              Search upto 3 localities or landmarks
            </Text>
            <Icon
              name="search"
              size={20}
              color="white"
              style={styles.inputIcon1}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Services for you</Text>
        <View
          style={{
          flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"
            
          }}>
            <TouchableOpacity onPress={()=> navigation.navigate("packermover")}>
          <View style={styles.card}>
            <Icon name="local-shipping" color={COLORS.yellow} size={24} />
            <Text style={styles.title}>Packers & Movers</Text>
            <Text style={styles.description}>Lowest Quote</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.card}>
            <Icon name="campaign" color={COLORS.yellow} size={24} />
            <Text style={styles.title}>Digital Marketing</Text>
            <Text style={styles.description}>Lowest Quote</Text>
          </View>
          <View style={styles.card}>
            <Icon name="home" color={COLORS.yellow} size={24} />
            <Text style={styles.title}>Home Renovation</Text>
            <Text style={styles.description}>Lowest Quote</Text>
          </View>
          <View style={styles.card}>
            <Icon name="local-shipping" color={COLORS.yellow} size={24} />
            <Text style={styles.title}>Packers & Movers</Text>
            <Text style={styles.description}>Lowest Quote</Text>
          </View>
       
        </View>

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
    flex:1
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: COLORS.yellow,
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
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    color: 'black',
  },

  inputIcon1: {
    marginHorizontal: 12,
    backgroundColor: COLORS.yellow,
    padding: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
    padding: 16,
    // width: 100,
  
    marginBottom:20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    fontSize: 16,
  },
});

export default Home;
