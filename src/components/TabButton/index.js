import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import PropTypes from 'prop-types';

const TabButton = (props) => {
  const { activeTab, onTabPress } = props;

  return (
    <View style={styles.container}>
      {/* Today */}
      <TouchableOpacity
        style={[
            styles.buttonContainer,
            activeTab === 'today' && styles.activeButton
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('today')}
      >
        <Text>Today 04</Text>
      </TouchableOpacity>
      {/* Upcoming */}
      <TouchableOpacity
        style={[
            styles.buttonContainer,
            activeTab === 'upcoming' && styles.activeButton
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('upcoming')}
      >
        <Text>Upcoming 10</Text>
      </TouchableOpacity>
      {/* Past */}
      <TouchableOpacity
        style={[
            styles.buttonContainer,
            activeTab === 'past' && styles.activeButton
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('past')}
      >
        <Text>Past 56</Text>
      </TouchableOpacity>
    </View>
  )
}

// Define Type Props
TabButton.propTypes = {
  activeTab: PropTypes.string,
  onTabPress: PropTypes.func
}

export default TabButton;