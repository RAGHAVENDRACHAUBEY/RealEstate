import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import COLORS from '../Const/Color';

const Start = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('onboarding')
        },3000)
    })


  return (
    <View style={styles.container}>
       <StatusBar translucent backgroundColor={COLORS.yellow} />
    <LottieView
      source={require('../Assets/images/animationpath.json')} 
      autoPlay
      loop
      style={styles.animation}
    />
  </View>
  )
}

export default Start

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
      },
      animation: {
        width: 300,
        height: 300,
      },

})