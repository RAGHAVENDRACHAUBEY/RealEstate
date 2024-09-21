import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';

const Start = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Signup')
        },3000)
    })


  return (
    <View style={styles.container}>
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