import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
const RooyLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/BookAppointment" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/VetInfoPage" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/DateAndTime" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/Payments" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/AddNewCard" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/CardPayments" 
        options={{ headerShown: false}}/>
        <Stack.Screen name="VetAppointment/ReviewSummary" 
        options={{ headerShown: false}}/>
    </Stack>
  )
}

export default RooyLayout