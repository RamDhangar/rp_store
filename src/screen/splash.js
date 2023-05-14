import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';

function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  },[])
  const getData = async () => {
    const logedinUser = await AsyncStorage.getItem('logedinUser');
    if (!logedinUser) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home')
    }
  }
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../images/playstore.png')} style={{width:200,height:200}}/>
      </View>
    );
}

export default Splash;