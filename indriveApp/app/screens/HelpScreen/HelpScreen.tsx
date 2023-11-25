import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Portal, Button, PaperProvider, TextInput } from 'react-native-paper';
const Help = () => {

  const [visible, setVisible] = React.useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,margin:10};

  return (
    <PaperProvider>
      <Portal>
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
      </View>
      
    </PaperProvider>
  )
}

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  textInpput:{
    height:40,
    borderColor:'grey',
    borderWidth:1,
    paddingHorizontal:10,
    marginVertical:10
  },
  noteContainer:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
margin:10,
padding:10
  }
});