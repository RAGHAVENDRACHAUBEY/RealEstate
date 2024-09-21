import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
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

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../Assets/images/animationl.json')} 
        autoPlay
        loop
        style={styles.lottieTopLeft}
      />
      <View style={styles.lottieBottomRight}>
      <LottieView
        source={require('../Assets/images/animationr.json')} 
        autoPlay
        loop
        style={{ width: 270,  
          height: 150,
         }} 
      />
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
            style={styles.input}
            placeholder="Enter Name"
            value={formData.name}
            onChangeText={value => handleChange('name', value)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Email <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={formData.email}
            onChangeText={value => handleChange('email', value)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Password <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.passGroup}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={value => handleChange('password', value)}
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
            style={styles.input}
            placeholder="Enter Confirm Password"
            secureTextEntry={!showPassword}
            value={formData.confirmPassword}
            onChangeText={value => handleChange('confirmPassword', value)}
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
          Already have login? <Text style={styles.link}>Sign In</Text>
        </Text>
      </View>
    </View>
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
    elevation: 1,
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
  },
  required: {
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    width:280
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
  lottieTopLeft: {
    position: 'absolute',
    top:"0%",
    right: 0,
    width: 280,  
    height: 150, 
  },
  lottieBottomRight: {
    position: 'absolute',
    bottom: 0,
    left: 0,
   
  },
});

export default Signup;
