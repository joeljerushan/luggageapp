import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import AddOptionButton from '../../../../../components/Button/AddOptionButton'
import { styles } from './styles'
import TopHeader from '../../../../../components/TopHeader'
import BackArrow from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import QRSvg from '@/assets/icons/Home/ScanBarcode.svg'

const DashBoardQrScreen = () => {

  return (
    <SafeAreaView style = {styles.root}>
      <View style = {styles.mainContainer}>
        {/* Header */}
      <TopHeader
        title = {'Dashboard'}
        childFront = {<BackArrow/>}
        childBack = {<QRSvg/>}
      />
      {/* Qr */}
      <View style = {styles.qrContainer}>
        <Image
          style = {styles.qrImage}
          source={{ uri: 'https://www.picng.com/thumbnail/qr_code/png_qr_code_67732_small.png'}}
        />
      </View>
      {/* Option Button */}
      {/* Payment Link */}
      <AddOptionButton 
        title = {'Payment Link'} 
        type='bag'
        onPress = {() => {}} 
      />
      {/* Cash Order */}
      <AddOptionButton 
        title = {'Cash Order'} 
        type='money'
        onPress = {() => {}} 
      />
      <Text></Text>

      </View>
    </SafeAreaView>
  )
}

export default DashBoardQrScreen;