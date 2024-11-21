import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchSvg from '@/assets/icons/Home/Search.svg'
import { styles } from './styles';

const SearchInput = (props) => {
    const {
        value,
        placeholder,
        onChangeText,
    } = props;
  return (
    <View style = {styles.container}>
      {/* Search Icon */}
      <SearchSvg/>
      {/* Input */}
      <TextInput
        style = {styles.inputSearch}
        value = {value}
        placeholder = {placeholder}
        onChangeText = {onChangeText}
      />
      {/* close */}
    </View>
  )
}

export default SearchInput;