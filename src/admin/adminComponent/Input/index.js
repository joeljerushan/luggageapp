import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropDownViewSvg from '@/assets/icons/ArrowSquareDown-Outline.svg'
import PropTypes from 'prop-types'
import { styles } from './styles'

const AdminDropDrownView = (props) => {
  const { placeholder, value, onChangeText, onPress, style } = props
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={false}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <DropDownViewSvg />
      </TouchableOpacity>
    </View>
  )
}

AdminDropDrownView.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    onPress: PropTypes.func,
    style: PropTypes.object
}

export default AdminDropDrownView;