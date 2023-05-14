import { View, Text, Image} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './../common/custom-button';
import CustomTextInput from './../common/custom-text-input';
import { ScrollView } from 'react-native-gesture-handler';
import AppLoader from '../common/app-loader';

function Login() {
  let [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const loginHandel = async() => {
    setModalVisible(true);
    let invalidForm = false;
    if (email == '') {
      setEmailError("Please enter email");
      invalidForm = true;
      setModalVisible(false);
    }
    if(email && (!email.includes("@") || !email.includes("."))){
      setEmailError("Invalid email");
      invalidForm = true;
      setModalVisible(false);
    }
    if(password == '') {
      setPasswordError('Please enter password');
      invalidForm = true;
      setModalVisible(false);
    }
    if(password && password.length < 8) {
      setPasswordError("Password contain atleast 8 charactor");
      invalidForm = true;
      setModalVisible(false);
    }
     
    if(!invalidForm) {
      // console.warn("Pass error")
      // const sEmail = await AsyncStorage.getItem('Email');
      // const pPassword = await AsyncStorage.getItem('Password');
      const user = JSON.parse(await AsyncStorage.getItem('User'));
      console.warn(user)
      if(user && user.email == email && password == user.password) {
        await AsyncStorage.setItem('logedinUser',JSON.stringify(user));
        navigation.navigate('Home');
      } else {
        alert('Wrong password');
      }
      setModalVisible(false);
      }


  }
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View>
        <Image
          source={require('../images/RD_commerce.png')}
          style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 100, borderRadius: 50 }}
        />
        <Text style={{
          marginTop: 20,
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: 500,
          color: '#000'
        }}>Login</Text>

        <CustomTextInput
          value={email}
          onChangeText={txt => { setEmail(txt); setEmailError('') }}
          borderColor={emailError == '' ? 'black' : 'red'}
          icon={require('../images/email.png')}
          placeholder='Enter User Name' />

        <Text
          style={{
            fontSize: 13,
            fontWeight: 300,
            color: 'red',
            alignSelf: 'flex-end',
            marginRight: 40
          }}
        >{emailError}</Text>

        <CustomTextInput
          value={password}
          onChangeText={txt => { setPassword(txt); setPasswordError('') }}
          borderColor={passwordError == '' ? 'black' : 'red'}
          icon={require('../images/lock.png')}
          placeholder='Enter Password'
          type='password'
          eyeIcon={true}
        />

        <Text
          style={{
            fontSize: 13,
            fontWeight: 300,
            color: 'red',
            alignSelf: 'flex-end',
            marginRight: 40
          }}
        >{passwordError}
        </Text>

        <CustomButton
          title={'Login'}
          bgColor={'#000'}
          textColor={'#fff'}
          onPress={loginHandel}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 800,
            marginTop: 30,
            marginLeft: 10,
            textDecorationLine: 'underline'
          }}
          onPress={() => {
            navigation.navigate('Signup')
          }}
        >
          Create New Account?
        </Text>
        <AppLoader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
    </ScrollView>
  );
}

export default Login;