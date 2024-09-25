import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Const/Color';
import {PrimaryButton} from '../Const/Button';
import LottieView from 'lottie-react-native';

const Signup = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    navigation.navigate("Signin")
  };
const [isFocused, setIsFocused] = useState(false);
const [isFocusedEmail, setIsFocusedEmail] = useState(false);
const [isFocusedPassword, setIsFocusedPassword] = useState(false);
const [conisFocusedPassword, setconIsFocusedPassword] = useState(false);
  return (
    <ScrollView style={{flex:1, backgroundColor: COLORS.backgroundC}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.container}>
        <View>
          <Image source={require('../Assets/images/logo.png')} style={styles.img} />
        </View>
        
        <View style={styles.loginbox}>
          <Text style={styles.title}>
            Signup! <Text style={styles.subtitle}>New Account.</Text>
          </Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={[
                styles.input,
                { borderColor: isFocused ? COLORS.yellow : '', borderWidth: 1 } 
              ]}
              placeholder="Enter Name"
              value={formData.name}
              onChangeText={value => handleChange('name', value)}
              placeholderTextColor="black"
              onFocus={() => setIsFocused(true)}  
              onBlur={() => setIsFocused(false)} 
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Email <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={[
                styles.input,
                { borderColor: isFocusedEmail ? COLORS.yellow : '', borderWidth: 1 } 
              ]}
              placeholder="Enter Email"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
              keyboardType="email-address"
               placeholderTextColor="black"
               onFocus={() => setIsFocusedEmail(true)}  
              onBlur={() => setIsFocusedEmail(false)} 
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.passGroup}>
              <TextInput
               style={[
                styles.input,
                { borderColor: isFocusedPassword ? COLORS.yellow : '', borderWidth: 1 } 
              ]}
                placeholder="Enter Password"
                secureTextEntry={!showPassword}
                value={formData.password}
                onChangeText={value => handleChange('password', value)}
                 placeholderTextColor="black"
                 onFocus={() => setIsFocusedPassword(true)}  
              onBlur={() => setIsFocusedPassword(false)} 
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.iconWrapper}>
                <FontAwesome
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>
              Confirm Password <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
             style={[
              styles.input,
              { borderColor: conisFocusedPassword ? COLORS.yellow : '', borderWidth: 1 } 
            ]}
              placeholder="Enter Confirm Password"
              secureTextEntry={!showPassword}
              value={formData.confirmPassword}
              onChangeText={value => handleChange('confirmPassword', value)}
               placeholderTextColor="black"
               onFocus={() => setconIsFocusedPassword(true)}  
              onBlur={() => setconIsFocusedPassword(false)} 
            />
            <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.iconWrapper1}>
                <FontAwesome
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                />
            </TouchableOpacity>
          </View>
  
          <PrimaryButton title="Sign Up" onPress={handleSubmit} />
  
          <Text style={styles.textCenter}>
            Already have login? <TouchableOpacity onPress={()=> navigation.navigate('Signin')}><Text style={styles.link}>Sign In</Text></TouchableOpacity>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundC,
  },
  loginbox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom:20,
    marginTop:40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.titleText,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.titleText,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color:'black'
  },
  required: {
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    width:290,
    placeholderTextColor:"red"
  },
  passGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
  },
  iconWrapper1: {
    position: 'absolute',
    top: 35,
    right: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
  link: {
    color:COLORS.yellow,
    fontWeight: 'bold',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  img:{
    width:250,height:180,marginTop:35
  }
});

export default Signup;
