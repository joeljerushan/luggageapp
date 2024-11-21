import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import CopySvg from '@/assets/icons/Home/Copy-Bold.svg';
  import PropTypes from 'prop-types';
import { styles } from './styles';
  
  const BookingComfirmedCard = (props) => {
    const {
      id,
      name,
      dropOff,
      pickUp,
      bags,
      totalAmount,
      days,
      orderId,
    } = props;
    return (
      <View style={styles.container}>
        {/* data */}
        <View style={styles.dataContainer} key={id}>
          {/* Name */}
          <Text style={styles.name}>{name}</Text>
          {/* rowContainer- ----- 1 */}
          <View style={styles.rowContainer}>
            {/* Drop-off */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{'Drop-off'}</Text>
              <Text style={styles.dateText}>{`${dropOff?.time} - ${dropOff?.date}`}</Text>
            </View>
            {/* Pick-up */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{`${pickUp?.time} - ${pickUp?.date}`}</Text>
              <Text style={styles.dateText}>{'9.00 AM - 02/11'}</Text>
            </View>
          </View>
          {/* rowContainer ---- 2 */}
          <View style={styles.rowContainer}>
            {/* Bags */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{'Bags'}</Text>
              <Text style={styles.dateText}>{bags}</Text>
            </View>
            {/* Total amount */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{'Total amount'}</Text>
              <Text style={styles.dateText}>{totalAmount}</Text>
            </View>
          </View>
          {/* rowContainer ---- 3 */}
          <View style={styles.rowContainer}>
            {/* Days */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{'Days'}</Text>
              <Text style={styles.dateText}>{days}</Text>
            </View>
            {/* Order ID */}
            <View style={styles.commonContainer}>
              <Text style={styles.dataTitle}>{'Order ID'}</Text>
              <View style={styles.orderIdContainer}>
                <Text style={styles.dateText}>{orderId}</Text>
                {/* Copy Svg */}
                <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                  <CopySvg />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  // Define Type Props
  BookingComfirmedCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dropOff: PropTypes.shape({
      time: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    pickUp: PropTypes.shape({
      time: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    bags: PropTypes.string.isRequired,
    totalAmount: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
  }
  
  export default BookingComfirmedCard;
  