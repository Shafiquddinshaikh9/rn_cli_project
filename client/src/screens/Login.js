import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomInput
        placeholder={'Enter Email ID'}
        icon={require('../images/mail.png')}
      />
      <CustomInput
        placeholder={'Enter Password'}
        icon={require('../images/hide.png')}
        type={'password'}
      />
      <CustomButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {}}
      />
      <Text style={styles.signupGo}></Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  signupGo: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
  },
});