import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NotificationSvg from '@/assets/icons/Home/Notification.svg'
import SeacrhSvg from '@/assets/icons/Home/Search.svg'
import QRSvg from '@/assets/icons/Home/ScanBarcode.svg'
import DropArrow from '@/assets/icons/Home/ArrowCircleDown.svg'
import PropTypes from 'prop-types';
import { styles } from './styles'

const AdminHomeHeader = (props) => {
    const {
        title,
        onPressSearch,
        onPressScanQr,
        onPressNotification,
        onPressDropView,
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressDropView}
        >
          <DropArrow/>
        </TouchableOpacity>
      </View>
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
AdminHomeHeader.propTypes = {
    title: PropTypes.string,
    onPressSearch: PropTypes.func,
    onPressScanQr: PropTypes.func,
    onPressNotification: PropTypes.func,
    onPressDropView: PropTypes.func,
  };

export default AdminHomeHeader;