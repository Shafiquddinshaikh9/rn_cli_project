import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.img} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type == 'password' ? true : false}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    alignContent: 'center',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  input: {
    marginLeft: 10,
  },
});
