import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
const  Map = ({navigation}: any) => {

  return (
    <PaperProvider>
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/map.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.innerContainer}>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate('Stories', {
                  screen: 'Stories'
                  })}>
                    Узнать больше о Безопасной поездке
              </Button>
              <View style={styles.emptyBlock} />
            </View>
          </ImageBackground>
        </View>
  </PaperProvider>
  )
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  image: {
    flex: 1,
  },
  button: {
    margin: 4,
    padding: 4,
    background: 'url("../../assets/gradient.png")',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  emptyBlock: {
    backgroundColor: 'grey',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexGrow: 0.45,
    opacity: 0.5,
  }
});