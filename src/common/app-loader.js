import { View, Text, ActivityIndicator, Modal, StyleSheet } from 'react-native'
import React from 'react'

const AppLoader = ({modalVisible, setModalVisible}) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: 200,
      height: 200,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    }
  })
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalView}>
            <ActivityIndicator size={"large"}/>
          </View>
        </View>
      </Modal>
  )
}

export default AppLoader