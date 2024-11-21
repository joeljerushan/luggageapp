import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';

const HomeTabButton = props => {
  const {
    leftTabNumber,
    middleTabNumber,
    rightTabNumber,
    activeTab, 
    onTabPress
  } = props;

  return (
    <View style={styles.container}>
      {/* Today */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'today' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('today')}>
        <Text style={styles.text}>Today {leftTabNumber}</Text>
      </TouchableOpacity>
      {/* Upcoming */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'upcoming' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('upcoming')}>
        <Text style={styles.text}>Upcoming {middleTabNumber}</Text>
      </TouchableOpacity>
      {/* Past */}
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          activeTab === 'past' && styles.activeButton,
        ]}
        activeOpacity={0.5}
        onPress={() => onTabPress('past')}>
        <Text style={styles.text}>Past {rightTabNumber}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define Type Props
HomeTabButton.propTypes = {
  leftTabNumber: PropTypes.string,
  middleTabNumber: PropTypes.string,
  rightTabNumber: PropTypes.string,
  activeTab: PropTypes.string,
  onTabPress: PropTypes.func,
};

export default HomeTabButton;
