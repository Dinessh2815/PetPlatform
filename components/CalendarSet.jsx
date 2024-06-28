import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-modern-datepicker'



const CalendarSet = () => {

const [date, setDate] = useState(false)

function handleOnPress (propDate) {
  setDate(propDate)
}

  return (
    <View>
      <Modal
      transparent={true}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>  
              <DatePicker
              mode='calendar'
              selected={date}
              onDateChanged={handleOnPress}
              
              />       

            </View>
        
        </View>


      </Modal>
    </View>
  )
}

export default CalendarSet

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        alignItems: 'center',
        marginTop: 100,
        

    },
    modalView:{
        margin:20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        padding: 0,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width:10,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
        height:350
    }
})