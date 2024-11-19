import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeKingsCrossLuggage = ({ navigation }) => {
  return (
    <View
      style = {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
      }}
    >
      <TouchableOpacity
       onPress={() => navigation.navigate('HomeBooking')}
      >
      <Text>HomeKingsCrossLuggage</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeKingsCrossLuggage

const styles = StyleSheet.create({})