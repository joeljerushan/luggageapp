import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const NotificationCard = (props) => {
    const { id, description } = props;
  return (
    <View style = {styles.container} key={id}>
      <Text style = {styles.text}>{description}</Text>
    </View>
  )
}

// Default Props
NotificationCard.defaultProps = {
   id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default NotificationCard;