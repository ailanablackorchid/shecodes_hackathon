import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
import storiesArray from '../../api/stories';

const Stories = ({navigation}: any) => {
    const [content, setContent] = useState(storiesArray);

  return (
    <View style={styles.container}>
        <Button
            onPress={() => navigation.navigate('MainScreen', {
                  screen: 'Map'
            })}
            style={styles.buttonClose}
        >x</Button>
        <Image source={content[0].content} style={styles.story}/>
    </View>
  );}

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  story: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'red',
  }
});