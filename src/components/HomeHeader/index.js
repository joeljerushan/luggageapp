import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NotificationSvg from '@/assets/icons/Home/Notification.svg'
import SeacrhSvg from '@/assets/icons/Home/Search.svg'
import QRSvg from '@/assets/icons/Home/ScanBarcode.svg'
import PropTypes from 'prop-types';
import { styles } from './styles'

const HomeHeader = (props) => {
    const {
        title,
        onPressSearch,
        onPressScanQr,
        onPressNotification,
    } = props;
  return ( 
    <View style = {styles.container}>
      {/* Notification & Search */}
      <View style = {styles.notificationSearchContainer}>
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressNotification}
        >
            <NotificationSvg/>
        </TouchableOpacity>
        {/* Search */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressSearch}
        >
            <SeacrhSvg/>
        </TouchableOpacity>
      </View>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      {/* QR */}
      <TouchableOpacity
        style = {styles.qrContainer}    
        activeOpacity={0.5}
        onPress={onPressScanQr}
      >
        <QRSvg/>
      </TouchableOpacity>
    </View>
  )
}

// Define Type Props
HomeHeader.propTypes = {
    title: PropTypes.string,
    onPressSearch: PropTypes.func,
    onPressScanQr: PropTypes.func,
    onPressNotification: PropTypes.func,
  };

export default HomeHeader;