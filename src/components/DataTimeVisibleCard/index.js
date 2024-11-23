import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ArrowRightSvg from '@/assets/icons/ArrowSquareDown-Outline-right.svg';
import ArrowLeftSvg from '@/assets/icons/ArrowSquareLeft-Linear.svg';
import {styles} from './styles';
import PropTypes from 'prop-types';

const DataTimeVisibleCard = props => {
  const {title, data} = props;
  console.log('title', title);

  console.log('data', data[0].timeRange);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentData = data[currentIndex]; // Use currentIndex to fetch the current item

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* title */}
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={handlePrevious}>
            <ArrowLeftSvg />
          </TouchableOpacity>
          <Text style={styles.timeText}>{currentData.timeRange}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={handleNext}>
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      </View>
      {/* Value */}
      <Text style={styles.contentText}>{currentData?.value}</Text>
    </View>
  );
};

// Prop Types
DataTimeVisibleCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: {
    timeRange: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  },
};

export default DataTimeVisibleCard;
