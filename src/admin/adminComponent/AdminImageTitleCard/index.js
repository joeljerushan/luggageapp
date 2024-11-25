import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const AdminImageTitleCard = props => {
  const {imageUri, title, description, onPress} = props;
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {/* Image */}
      <Image source={{uri: imageUri}} style={styles.image} />
      <View style={{gap: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Define Props
AdminImageTitleCard.propTypes = {
  imageUri: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func
};

export default AdminImageTitleCard;
