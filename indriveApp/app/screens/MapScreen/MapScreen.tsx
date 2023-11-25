import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
const  Map = ({navigation}: any) => {

  const [visible, setVisible] = React.useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,margin:10};
  // const navigation = useNavigation(); 

  return (
    <PaperProvider>
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/map.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>Inside</Text>
              <Button onPress={() => navigation.navigate("Stories")}>Text</Button>
              <View style={styles.emptyBlock} />
            </View>
          </ImageBackground>
        </View>
      {/* <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Add Your Notes</Text>
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Enter Your Notes...'
            style={styles.textInpput}
          />
        <View style={{width:150}}>
          <Button mode="contained" onPress={() => {}}>
            Add Node
          </Button>
        </View>
        </Modal>
      </Portal>

      <View style={styles.container}>
      <Button style={{marginTop: 30, backgroundColor:'#f0f0f0'}} onPress={showModal}>
        ADD Notes
      </Button>
      {notes.map((note,index)=>(
        <View key={index} style={styles.noteContainer}>
            <Text style={{borderLeftColor:"blue", borderLeftWidth:2, color:"black",padding:10,borderRadius:10}}>{note}</Text>
       
          <Button onPress={() => {}}>
              Delete
          </Button>
        </View>  
      ))}
      </View> */}
      
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