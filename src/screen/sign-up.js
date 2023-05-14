import { View, Text, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './../common/custom-button';
import CustomTextInput from './../common/custom-text-input';
import { ScrollView } from 'react-native-gesture-handler';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contect, setContect] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const intialState = {
        nameError: '',
        emailError: '',
        contectError:'',
        passwordError: '',
        confirmPasswordError: '',
    }
    const reducer = (form, action) => {
        if(action.error){
            switch (action.type) {
                case 'name': return{...form,nameError:"Invalid Name"};
                case 'email': return{...form,emailError:"Invalid Email"};
                case 'contect': return{...form,contectError:"Invalid Contect"};
                case 'password': return{...form,passwordError:"Invalid Password"};
                case 'confirmPassword': return{...form,confirmPasswordError:"Password din't match"};
                default:
                    break;
            }
            
        }else {
            switch (action.type) {
                case 'name': return{...form,nameError:""};
                case 'email': return{...form,emailError:""};
                case 'contect': return{...form,contectError:""};
                case 'password': return{...form,passwordError:""};
                case 'confirmPassword': return{...form,confirmPasswordError:""};
                default:
                    break;
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, intialState);
    const navigation = useNavigation();
    

    const saveData = async() => {
        await AsyncStorage.setItem('User', JSON.stringify({email: email, name:name,password:password,contect:contect}));
        navigation.navigate("Login");

    }

    const signInHandel = () => {
        let isError = false;
        if (!name || name.length < 3) {
            dispatch({type:'name',error:true});
            isError = true;
        }
        if(!email || !email.includes("@") || !email.includes(".")){
            dispatch({type:'email',error:true});
            isError = true;
          }
        if(!contect || contect.length != 10) {
            dispatch({type:'contect',error:true});
            isError = true;
        }
        if(!password || password.length < 8) {
            dispatch({type:'password',error:true});
            isError = true;
        }
        if(confirmPassword != password) {
            dispatch({type:'confirmPassword',error:true});
            isError = true;
        }
        
        if(!isError) {
            saveData();
        }
    }
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View>
                <Image
                    source={require('../images/RD_commerce.png')}
                    style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 80, borderRadius: 50 }}
                />
                <Text style={{
                    marginTop: 20,
                    alignSelf: 'center',
                    fontSize: 24,
                    fontWeight: 500,
                    color: '#000'
                }}>Create your Account</Text>

                <CustomTextInput 
                    value={name}
                    onChangeText={txt => {setName(txt); dispatch({type:'name',error:false})}}          
                    borderColor={state.nameError == '' ? 'black' : 'red'}
                    icon={require('../images/user.png')} 
                    placeholder='Name' />
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'red',
                        alignSelf: 'flex-end',
                        marginRight: 40
                    }}
                    >{state.nameError}</Text>
                <CustomTextInput 
                    value={email}
                    onChangeText={txt => {setEmail(txt); dispatch({type:'email',error:false})}} 
                    borderColor={state.emailError == '' ? 'black' : 'red'}
                    icon={require('../images/email.png')} 
                    placeholder='Email' />
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'red',
                        alignSelf: 'flex-end',
                        marginRight: 40
                    }}
                >{state.emailError}</Text>
                <CustomTextInput 
                    value={contect}
                    onChangeText={txt => {setContect(txt); dispatch({type:'contect',error:false})}} 
                    borderColor={state.contectError == '' ? 'black' : 'red'}
                    icon={require('../images/smartphone.png')} 
                    placeholder='Contect No' />
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'red',
                        alignSelf: 'flex-end',
                        marginRight: 40
                    }}
                >{state.contectError}</Text>
                <CustomTextInput 
                    value={password}
                    onChangeText={txt => {setPassword(txt); dispatch({type:'password',error:false})}} 
                    icon={require('../images/lock.png')}
                    borderColor={state.passwordError == '' ? 'black' : 'red'} 
                    placeholder='Password' 
                    type='password' />
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'red',
                        alignSelf: 'flex-end',
                        marginRight: 40
                    }}
                >{state.passwordError}</Text>
                <CustomTextInput 
                    value={confirmPassword}
                    onChangeText={txt => {setConfirmPassword(txt); dispatch({type:'confirmPassword',error:false})}} 
                    icon={require('../images/lock.png')}
                    borderColor={state.confirmPasswordError == '' ? 'black' : 'red'} 
                    placeholder='Confirm Password' 
                    type='password' 
                    eyeIcon={true} />
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: 'red',
                        alignSelf: 'flex-end',
                        marginRight: 40
                    }}
                >{state.confirmPasswordError}</Text>
                <CustomButton 
                    title={'Sign up'} 
                    bgColor={'#000'} 
                    textColor={'#fff'} 
                    onPress={signInHandel} />
                <View style={{
                    fontSize: 18,
                    fontWeight: 800,
                    marginTop: 30,
                    marginLeft: 10,
                    flexDirection: 'row',
                    textDecorationLine: 'underline'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginLeft: 10
                    }}>Have an account?</Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginLeft: 10,
                        color: 'blue',
                        textDecorationLine: 'underline'
                    }}
                        onPress={() => { navigation.goBack(); }}
                    >
                        Login
                    </Text>

                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp