import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CalendarSvg from '@/assets/icons/Calendar1-Outline.svg'
import { styles } from './styles'
import PropTypes from 'prop-types';

const DatePicker = (props) => {
    const {style} = props
  return (
    <View style={[styles.container,style]}>
      <TouchableOpacity
        style={styles.calendaerContainer}
        activeOpacity={0.5}
        onPress={() => {}}
      >
        <CalendarSvg/>
      </TouchableOpacity>
    </View>
  )
}

// Default Props
DatePicker.propTypes = {
    style: PropTypes.object,
}

export default DatePicker;