import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ProductItem(props) {
  // console.log(props.product)
  const imageUrl = props.product.images;
  return (
    
    <View 
    style= {{
        width:180,
        height:200,
        elevation:2,
        marginLeft:20,
        marginBottom:10,
        borderRadius:10,
        borderWidth:1
    }}>
      <View style={{
        width:'90%',
        height:'60%',
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 5
      }}>
      <Image 
      source={{uri: imageUrl}}
      style={{
        width:100,
        height: 100
      }}/>
      </View>
      <TouchableOpacity><Text style={{marginLeft:10, marginTop:5,color:'green'}}>{props.product.name}</Text></TouchableOpacity>
      <View style={{flexDirection:'row', justifyContent: 'space-between',marginLeft:11,marginRight:11,marginTop:8}}>
        <Text style={{fontSize:13}}>₹ {props.product.price}</Text>
        <TouchableOpacity style={{backgroundColor:'red',width:60,height:25,justifyContent:'center',alignItems:'center',borderRadius:5}}><Text style={{fontSize:10}}>Add to card</Text></TouchableOpacity>
      </View>
        <Text style={{color:'red',marginLeft:10}}>* {props.product.rating}</Text>
    </View>
  )
}