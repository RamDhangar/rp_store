import React, {useState} from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type, eyeIcon, borderColor}) => {
    [passwordMode, setPasswordMode] = useState(true);
    return (
        <View style={{
            alignSelf:'center',
            paddingLeft:20,
            width:'85%',
            height: 50,
            borderRadius:10,
            borderColor: borderColor ? borderColor: 'black',
            borderWidth: 0.6,
            marginTop: 30,
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-between',
            paddingLeft:20,
            paddingRight:20
        }}>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Image source={icon} style={{width:24, height:24}} />
                <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={(txt) => {onChangeText(txt)}}
                style={{marginLeft:10}}
                secureTextEntry={ type == "password" ? passwordMode : false}
                />
            </View>
        {
            (type == "password" && eyeIcon && passwordMode) &&
            <TouchableOpacity onPress={()=> setPasswordMode(!passwordMode)}> 
                <Image  source={require('../images/eye.png')} style={{width:24, height:24}} />
            </TouchableOpacity>
}{
    (type == "password" && eyeIcon && !passwordMode) &&
            <TouchableOpacity onPress={()=> setPasswordMode(!passwordMode)}> 
                <Image  source={require('../images/eye-close.png')} style={{width:24, height:24}} />
            </TouchableOpacity>

            
        }
    </View> 
    );
}

export default CustomTextInput;