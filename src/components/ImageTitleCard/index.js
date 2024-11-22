import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';

const ImageTitleCard = (props) => {
    const { imageUri, title, description } = props;
  return (
    <View style = {styles.container}>
        {/* Image */}
        <Image source={{ uri: imageUri }} style={styles.image} />
      <View style = {{ gap: 5 }}>
        <Text style = {styles.title}>{title}</Text>
        <Text style = {styles.description}>{description}</Text>
      </View>
    </View>
  )
}

// Define Props
ImageTitleCard.propTypes = {
  imageUri: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ImageTitleCard;