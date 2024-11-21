import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const BookingTabButton = props => {
  const {
    leftTabNumber,
    middleTabNumber,
    rightTabNumber,
    activeTab, 
    onTabPress
  } = props;

  return (
    <View style={styles.container}>
      {/* Ready */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'ready' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('ready')}>
        <Text style={styles.text}>Ready {leftTabNumber}</Text>
      </TouchableOpacity>
      {/* Checked */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'checked' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('checked')}>
        <Text style={styles.text}>Checked {middleTabNumber}</Text>
      </TouchableOpacity>
      {/* Past */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'expired' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('expired')}>
        <Text style={styles.text}>Expired {rightTabNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define Type Props
BookingTabButton.propTypes = {
  leftTabNumber: PropTypes.string,
  middleTabNumber: PropTypes.string,
  rightTabNumber: PropTypes.string,
  activeTab: PropTypes.string,
  onTabPress: PropTypes.func,
};

export default BookingTabButton;
