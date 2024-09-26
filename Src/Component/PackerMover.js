import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../Const/Color';
import {PrimaryButton} from '../Const/Button';
import {Picker} from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const PackerMover = () => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [acc1, setAcc] = useState(true);
  const [acc2, setAcc2] = useState('');
  const [acc3, setAcc3] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  return (
    <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}>
      <View style={styles.bookingSection}>
        
          <View style={styles.chipContainer}>
            <View style={styles.chipContent}>
              <View style={styles.iconWrapper}>
                <Icon name="truck" size={34} style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Complete booking</Text>
                <Text style={styles.subtitle}>
                  for <Text style={styles.boldText}>Within City Movement</Text>
                </Text>
              </View>
              {/* <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.buttonText}>Select Inventory</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        
        <Text style={styles.questionText}>
          Where are you going to relocate?
        </Text>

        <View style={styles.cityButtonsContainer}>
          <TouchableOpacity
            style={ acc1 ? styles.cityButtonSelected : styles.cityButton  }
            onPress={() => {
              setAcc(true);
              setAcc2(false);
              setAcc3(false);
            }}>
            <Text style={styles.cityButtonText}>Within City</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ acc2 ? styles.cityButtonSelected : styles.cityButton  }
            onPress={() => {
              setAcc(false);
              setAcc2(true);
              setAcc3(false);
            }}>
            <Text style={styles.cityButtonText}>Between Cities</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={ acc3 ? styles.cityButtonSelected : styles.cityButton  } onPress={() => {
              setAcc(false);
              setAcc2(false);
              setAcc3(true);
            }}>
            <Text style={styles.cityButtonText}>Rent Truck</Text>
          </TouchableOpacity>
        </View>
{
    acc1 ? (<>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Select City</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={selectedCity}
              onValueChange={itemValue => setSelectedCity(itemValue)}
              style={styles.picker} // Optional: style for the picker
            >
              {/* Static city options */}
              <Picker.Item label="Bangalore" value="Bangalore" />
              <Picker.Item label="Mumbai" value="Mumbai" />
              <Picker.Item label="Delhi" value="Delhi" />
              <Picker.Item label="Chennai" value="Chennai" />
              <Picker.Item label="Kolkata" value="Kolkata" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Search your Locality</Text>
          <View style={styles.inputGroup}>
            <Icon name="map-pin" size={20} style={styles.inputIcon} />
            <TextInput
              placeholder="Shifting From"
              style={styles.textInput}
              value="Whitefield, Bangalore"
            />
            <TouchableOpacity>
              <Icon name="x" size={20} style={styles.inputClearIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <Icon name="map-pin" size={20} style={styles.inputIcon} />
            <TextInput
              placeholder="Shifting To"
              style={styles.textInput}
              value="Koramangala, Bangalore"
            />
            <TouchableOpacity>
              <Icon name="x" size={20} style={styles.inputClearIcon} />
            </TouchableOpacity>
          </View>
        </View></>):(<>{
        acc2 ? (<>
        {/* Search Source City */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Search Source City</Text>
          <View style={styles.inputGroup}>
            <Icon name="map-pin" size={20} style={styles.inputIcon} />
            <TextInput
              placeholder="Search Source City"
              style={styles.textInput}
              
            />
            <TouchableOpacity>
              <Icon name="x" size={20} style={styles.inputClearIcon} />
            </TouchableOpacity>
          </View>
        </View>

      {/* Search Destination City */}
      <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <Icon name="map-pin" size={20} style={styles.inputIcon} />
            <TextInput
             placeholder="Search Source Destination City"
              style={styles.textInput}
              
            />
            <TouchableOpacity>
              <Icon name="x" size={20} style={styles.inputClearIcon} />
            </TouchableOpacity>
          </View>
        </View>

      {/* Select Shifting Date */}
      <View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Select Shifting Date</Text>
  <TouchableOpacity style={styles.inputGroup} onPress={() => setShowDatePicker(true)}>
    <Icons name="calendar-today" size={24} style={styles.inputIcon} />
    <Text style={styles.textInput}>{date.toDateString()}</Text>
  </TouchableOpacity>
  {showDatePicker && (
    <DateTimePicker
      value={date}
      mode="date"
      display="default"
      onChange={onDateChange}
    />
  )}
</View>
        </>):(<>{
            acc3 ?(<><View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Select City</Text>
                <View style={styles.dropdown}>
                  <Picker
                    selectedValue={selectedCity}
                    onValueChange={itemValue => setSelectedCity(itemValue)}
                    style={styles.picker} // Optional: style for the picker
                  >
                    {/* Static city options */}
                    <Picker.Item label="Bangalore" value="Bangalore" />
                    <Picker.Item label="Mumbai" value="Mumbai" />
                    <Picker.Item label="Delhi" value="Delhi" />
                    <Picker.Item label="Chennai" value="Chennai" />
                    <Picker.Item label="Kolkata" value="Kolkata" />
                  </Picker>
                </View>
              </View>
      
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Search your Locality</Text>
                <View style={styles.inputGroup}>
                  <Icon name="map-pin" size={20} style={styles.inputIcon} />
                  <TextInput
                    placeholder="Pickup From"
                    style={styles.textInput}
                   
                  />
                  <TouchableOpacity>
                    <Icon name="x" size={20} style={styles.inputClearIcon} />
                  </TouchableOpacity>
                </View>
              </View>
      
              <View style={styles.inputContainer}>
                <View style={styles.inputGroup}>
                  <Icon name="map-pin" size={20} style={styles.inputIcon} />
                  <TextInput
                    placeholder="Drop at"
                    style={styles.textInput}
                    
                  />
                  <TouchableOpacity>
                    <Icon name="x" size={20} style={styles.inputClearIcon} />
                  </TouchableOpacity>
                </View>
              </View></>):(<></>)
        }</>)
    }</>)
}

        <TouchableOpacity>
          <PrimaryButton title="Check Prices" />
        </TouchableOpacity>
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>How it Works?</Text>
      </View>

      {/* Process Steps */}
      <View style={styles.stepsContainer}>
        {/* Step 1 */}
        <View style={styles.step}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#000" />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.stepTitle}>Share your Shifting Requirement</Text>
            <Text style={styles.stepSubtitle}>Help us by providing when and where do you want to move</Text>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.step}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#000" />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.stepTitle}>Receive Free Instant Quote</Text>
            <Text style={styles.stepSubtitle}>Get guaranteed lowest priced quote for your shifting instantly</Text>
          </View>
        </View>

        {/* Step 3 */}
        <View style={styles.step}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#000" />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.stepTitle}>Assign Quality Service Expert</Text>
            <Text style={styles.stepSubtitle}>To ensure safe relocation, a quality service expert will be allotted for your move</Text>
          </View>
        </View>

        {/* Step 4 */}
        <View style={styles.step}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#000" />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.stepTitle}>Leave the Heavy Lifting to Us</Text>
            <Text style={styles.stepSubtitle}>Enjoy hassle-free on-time movement of your household goods</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bookingSection: {
    marginBottom: 20,
  },

  chipContainer: {
    marginRight: 16,
  },
  chipContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderColor: 'rgb(202, 220, 235)',
    borderWidth: 1,
    boxShadow: 'rgb(202, 220, 235) -2px 0px 1px',
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#363636',
  },
  subtitle: {
    fontSize: 12,
    color: '#363636',
  },
  boldText: {
    fontWeight: 'bold',
  },
  selectButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  cityButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cityButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 6,
  },
  cityButtonSelected: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 6,
  },
  cityButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#363636',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 5,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputClearIcon: {
    marginLeft: 10,
  },
  checkPriceButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
  },
  headingWrapper: {
    paddingVertical: 16,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  stepsContainer: {
    marginVertical: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#F7F7F8',
    borderRadius: 25,
  },
  textWrapper: {
    marginLeft: 16,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepSubtitle: {
    fontSize: 12,
    color: '#7d7d7d',
  },
});

export default PackerMover;
