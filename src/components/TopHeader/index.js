import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';

const TopHeader = props => {
  const {title, childFront, childBack} = props;
  return (
    <View style={styles.container}>
      {/* ICON */}
      <TouchableOpacity
        style={styles.frontIconContainer}
        activeOpacity={0.5}
        onPress={() => {}}>
        {childFront}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/*  */}
      <TouchableOpacity
        style={styles.BackIconContainer}
        activeOpacity={0.5}
        onPress={() => {}}>
        {childBack}
      </TouchableOpacity>
    </View>
  );
};

// Default Props
TopHeader.propTypes = {
  title: PropTypes.string,
  childFront: PropTypes.node,
  childBack: PropTypes.node,
};

export default TopHeader;
