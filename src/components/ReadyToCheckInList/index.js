import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CopySvg from '@/assets/icons/Home/Copy-Bold.svg';
import PropTypes from 'prop-types';

const ReadyToCheckInList = (props) => {
  const {
    status,
    name,
    dropOff,
    pickUp,
    bags,
    totalAmount,
    days,
    orderId,
    description,
  } = props;
  return (
    <View style={styles.container}>
      {/* data */}
      <View style={styles.dataContainer}>
        {/* header */}
        <Text style={styles.header}>{status}</Text>
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

      {/* footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {'James completed payment online 12 days ago'}
        </Text>
      </View>
    </View>
  );
};

// Define Type Props
ReadyToCheckInList.propTypes = {
  status: PropTypes.string.isRequired,
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
  description: PropTypes.string.isRequired,
}

export default ReadyToCheckInList;
