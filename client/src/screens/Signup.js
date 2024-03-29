import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <CustomInput
        placeholder={'Enter Name'}
        icon={require('../images/user-interface.png')}
      />
      <CustomInput
        placeholder={'Enter Email id'}
        icon={require('../images/mail.png')}
      />
      <CustomInput
        placeholder={'Enter Mobile Number'}
        icon={require('../images/mobile-phone.png')}
        keyboardType={'number-pad'}
      />
      <CustomInput
        placeholder={'Enter Password'}
        icon={require('../images/hide.png')}
        type={'password'}
      />
      <CustomButton
        title={'Signup'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {}}
      />
      <Text
        style={styles.signupGo}
        onPress={() => {
          navigation.navigate('login');
        }}>
        Already have account?
      </Text>
    </View>
  );
};

export default Signup;

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
    marginTop: 20,
  },
});
