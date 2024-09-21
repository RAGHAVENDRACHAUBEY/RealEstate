import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Const/Color';
import { PrimaryButton } from '../Const/Button';
import LottieView from 'lottie-react-native'; // For Lottie Animation

const Signin = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // For fade-in animation

  // Fade in animation when the component mounts
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1.5 seconds fade-in duration
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
    console.log('Form submitted:', formData);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Top-Left Lottie Animation */}
      <LottieView
        source={require('../Assets/images/animationl.json')} 
        autoPlay
        loop
        style={styles.lottieTopLeft}
      />

      {/* Bottom-Right Lottie Animation */}
      <View style={styles.lottieBottomRight}>
      <LottieView
        source={require('../Assets/images/animationr.json')} 
        autoPlay
        loop
        style={{ width: 350,  
          height: 200,
         }} 
      />
</View>
      <View style={styles.loginbox}>
        <Text style={styles.title}>
          Sign In! <Text style={styles.subtitle}>Welcome Back.</Text>
        </Text>
        
        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Sign In Button with Fade-In Effect */}
        <Animated.View style={[styles.animatedButton, { opacity: fadeAnim }]}>
          <PrimaryButton title="Sign In" onPress={handleSubmit} />
        </Animated.View>

        <Text style={styles.textCenter}>
          Don't have an account? <Text style={styles.link}>Sign Up</Text>
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
    position:"relative"
  },
  // Style for Lottie animations
  lottieTopLeft: {
    position: 'absolute',
    top:"0%",
    right: 0,
    width: 350,  
    height: 200, 
  },
  lottieBottomRight: {
    position: 'absolute',
    bottom: 0,
    left: 0,
   
  },
  loginbox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    width: 280,
  },
  passGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
  },
  animatedButton: {
    marginTop: 15,
    width: '100%',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
  link: {
    color: COLORS.yellow,
    fontWeight: 'bold',
  },
});

export default Signin;
