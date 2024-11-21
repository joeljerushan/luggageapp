import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

const PrimaryButton = (props) => {
  const {title, onPress, style} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}  // Use correct style name 'button_root'
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>  // Use correct text style 'title_txt'
    </TouchableOpacity>
  );
};

// Define Type Props
PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default PrimaryButton;
