import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: bgColor}]}>
      <Text style={[styles.btntitle, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  btntitle: {},
});
