import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
import storiesArray from '../../api/stories';

const Stories = ({navigation}: any) => {
    const [content, setContent] = useState(storiesArray);
    const [current, setCurrent] = useState(0);

  return (
    <View style={styles.container}>
        <Button
            onPress={() => navigation.navigate('MainScreen', {
                  screen: 'Map'
            })}
            style={styles.buttonClose}
        >x</Button>
        <Image source={content[current].content} style={styles.story}/>
        <View
            style={{
                width: '40%',
                height: '100%',
                position: 'absolute',
                top: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
        {/* <TouchableWithoutFeedback
            style={{width: '30%', height: '100%'}}
            onPress={() => setCurrent(current - 1)}
        >
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={{width: '30%', height: '100%'}}>
        </TouchableWithoutFeedback> */}
        </View>
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
    width: '100%',
    resizeMode: "cover",
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'red',
  }
});