import React, {useState} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from '../bottom/profile';
import Main from '../bottom/main';
import Search from '../bottom/search';
import Cart from '../bottom/cart';
import Wishlist from '../bottom/wishlist';

export default function Hom() {
  const  [activeTab, setActiveTab] = useState(0);
  return (
    <View style={styles.homeContainer}>
      {activeTab==0 ? (<Main/>): activeTab==1 ? (<Search/>) : activeTab==2 ? (<Cart/>) : activeTab==3 ? (<Wishlist/>) : (<Profile/>)}
      <View style={styles.navigaeIconContainer}>
        <TouchableOpacity onPress={()=> {setActiveTab(0)}}>
          <Image 
          source={require('../images/user.png')} 
          style={{
            width:32,
            height:32,
            tintColor: activeTab == 0 ? '#000' : '#8e8e8e'
             }}/>
          <View style={{
            height:5, 
            width:'100%',
            marginTop:2, 
            backgroundColor: activeTab == 0 ? 'green' : '#fff'
            }}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setActiveTab(1)}}>
          <Image 
          source={require('../images/user.png')} 
          style={{
            width:32,
            height:32,
            tintColor: activeTab == 1 ? '#000' : '#8e8e8e'
            }}/>
          <View style={{
            height:5, 
            width:'100%',
            marginTop:2, 
            backgroundColor: activeTab == 1 ? 'green' : '#fff'
            }}>
          </View>
        </TouchableOpacity>
        <View style={{
          justifyContent: 'center', 
          alignItems:'center'
          }}>
          <TouchableOpacity 
          style={{width:42, 
            height:42,
            backgroundColor: activeTab==2 ? 'green' : '#8e8e8e', 
            borderRadius:21, 
            justifyContent:'center',
            alignItems:'center'}}
          onPress={()=> {setActiveTab(2)}}>
          <Image 
          source={require('../images/user.png')} 
          style={{
            width:26,
            height:26, 
            tintColor: activeTab==2 ? '#000' : '#fff'
            }}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=> {setActiveTab(3)}}>
          <Image 
          source={require('../images/user.png')} 
          style={{
            width:32,
            height:32,
            tintColor: activeTab == 3 ? '#000' : '#8e8e8e'
            }}/>
          <View style={{
            height:5, 
            width:'100%',
            marginTop:2, 
            backgroundColor: activeTab == 3 ? 'green' : '#fff'
            }}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setActiveTab(4)}}>
          <Image 
          source={require('../images/user.png')} 
          style={{
            width:32,
            height:32,
            tintColor: activeTab == 4 ? '#000' : '#8e8e8e'
            }}/>
          <View style={{
            height:5, 
            width:'100%',
            marginTop:2, 
            backgroundColor: activeTab == 4 ? 'green' : '#fff'
            }}>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
  navigaeIconContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#ffff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})