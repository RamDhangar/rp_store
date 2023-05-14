import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/header';
import { SliderBox } from "react-native-image-slider-box";
import {data} from './../data/cartData'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductItem from '../common/productItem';
import { productItems } from '../data/productData';
import { ScrollView } from 'react-native-gesture-handler';
const Main = () => {
  const [allProducts, setAllProduct] = useState(productItems)
  let category = []
  useEffect(() => {
   productItems.map((item) => {
    category.push(item.category)
   })
  })
  const slider = data.banner;

  function cotegoryPress(cat) {
    console.warn(cat)
    const filterProduct = productItems.filter(item => {
      return item.category == cat
    })
    setAllProduct(filterProduct)
  }
  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex:1, marginBottom:10, height:'100%'}}>
     <Header/>
     <SliderBox 
     images={slider}
     dotColor="#FFEE58"
     inactiveDotColor="#90A4AE"
     paginationBoxVerticalPadding={20}
     autoplay
     circleLoop 
     autoplayInterval={5000}
     sliderBoxHeight={180}/>

     <View style={{
        marginTop: 10
     }}>
      <FlatList 
      data={category}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) => {
        return (
          
          <TouchableOpacity 
          onPress={()=>cotegoryPress(item)}
          style={{
            padding:10, 
            borderWidth:1,
            marginLeft:20, 
            borderRadius:10
            }}>
            <Text style={{color:'#000'}}>{item}</Text>
          </TouchableOpacity>
        )
      }}/>
     </View>
     <View style={{
        marginTop: 10
     }}>
      <View style={{marginBottom:50}}>
      {allProducts.map((item,index) =>{
        return (
          <View>
            <Text style={{fontSize:14, marginLeft:10, fontWeight: 500, color:'#000',margin: 5}}>{item.category}</Text>
            <FlatList 
              data={item.product}
              contentContainerStyle={allProducts.length == 1 ? {flexDirection : "row", flexWrap:'wrap'}: {}}
              horizontal={allProducts.length == 1 ? false : true}
              renderItem={({item,index}) => {
                  return (
                    <ProductItem product={item}/>
                )
            }}/>
          </View>
          )
      })}
      </View>
     </View>
    </View>
    </ScrollView>
  )
}

export default Main