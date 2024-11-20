import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReadyToCheckInList from '../../../../../components/ReadyToCheckInList'

const HomeToday = () => {
  return (
    <View
      style = {{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
      }}
    >
      {/* Ready To Check In List */}
          <ReadyToCheckInList/>
      <Text>HomeToday</Text>
    </View>
  )
}

export default HomeToday

const styles = StyleSheet.create({})