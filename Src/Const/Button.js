import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../Const/Color';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  title: {color:COLORS.backgroundC, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    borderColor:COLORS.bordercolor,
    paddingHorizontal:8,
    paddingVertical:16,
    width:300,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A3CFFF',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 16,
    
  },
});

export {PrimaryButton};