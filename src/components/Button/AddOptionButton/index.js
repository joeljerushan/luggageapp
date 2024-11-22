import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import BagSvg from '@/assets/icons/Bag.svg';
import MoneySvg from '@/assets/icons/Money-Outline.svg';
import { styles } from './styles';


const AddOptionButton = (props) => {
  const {title, onPress, type, style} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}  // Use correct style name 'button_root'
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>  // Use correct text style 'title_txt'
      {type === 'bag' && (
        <BagSvg/>
      )}
      {type === 'money' && (
        <MoneySvg/>
      )}
    </TouchableOpacity>
  );
};

// Define Type Props
AddOptionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default AddOptionButton;
