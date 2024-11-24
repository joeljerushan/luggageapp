import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CopySvg from '@/assets/icons/Home/Copy-Bold.svg';
import {styles} from './styles';
import PropTypes from 'prop-types';

const CheckedInList = (props) => {
  const { 
    id,
    status,
    type,
    name,
    dropOff,
    pickUp,
    bags,
    totalAmount,
    days,
    orderId,
    description,
    onPress,
    disabled
   } = props;
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
    >
      {/* data */}
      <View style={styles.dataContainer} key={id}>
        {/* header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{status}</Text>
          {/* Paid in shop */}
          {type == 'paidInShop' && (
            <View style={styles.paidInShopContainer}>
              <Text style={styles.paidInShop}>{'Paid in Shop'}</Text>
            </View>
          )}
          {/* Paid cash */}
          {type == 'paidCash' && (
            <View style={styles.paidCashContainer}>
              <Text style={styles.paidCash}>{'Paid Cash'}</Text>
            </View>
          )}
        </View>
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
            <Text style={styles.dataTitle}>{'Pick-up'}</Text>
            <Text style={styles.dateText}>{`${pickUp?.time} - ${pickUp?.date}`}</Text>
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
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Define Type Props
CheckedInList.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

export default CheckedInList;
