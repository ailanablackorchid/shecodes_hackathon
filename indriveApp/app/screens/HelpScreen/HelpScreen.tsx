import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
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
          <Text>При вызове безопасности, ваша поездка, местоположение и инфо будут отправлены выбранному контакту</Text>
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Ваше ФИО*'
            style={styles.textInpput}
          />
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Экстренный контакт *'
            style={styles.textInpput}
          />
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Домашний адрес *'
            style={styles.textInpput}
          />
          <TextInput 
            value={note}
            onChangeText={setNote}
            placeholder='Ваше ФИО*'
            style={styles.textInpput}
          />
        <View style={{width:150}}>
          <Button mode="contained" onPress={() => {}}>
            Сохранить
          </Button>
        </View>
        </Modal>
      </Portal>

      <View style={styles.container}>
      <Button style={styles.createButton} onPress={showModal}>
        Заполнить анкету безопасности
      </Button>
      {notes.map((note,index)=>(
        <View key={index} style={styles.noteContainer}>
            <Text style={{borderLeftColor:"blue", borderLeftWidth:2, color:"black",padding:10,borderRadius:10}}>{note}</Text>
        </View>  
      ))}
      <Image source={require('../../assets/buttons.png')} style={styles.buttons}/>
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
    marginVertical:10,
    backgroundColor: 'white',
  },
  noteContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:10,
    padding:10
  },
  buttons: {
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    marginTop: 30,
    backgroundColor:'rgba(159, 52,53)',
    padding: 10,
    color: 'white'
}
});