import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';

const ImageViewerCard = (props) => {
    const {
        imageUri,
    } = props;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  )
}

ImageViewerCard.propTypes = {
    imageUri: PropTypes.string,
  };

export default ImageViewerCard;