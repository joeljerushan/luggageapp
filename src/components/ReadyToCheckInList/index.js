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

const ReadyToCheckInList = () => {
  return (
    <View style={styles.container}>
      {/* data */}
      <View style={styles.dataContainer}>
        {/* header */}
        <Text style={styles.header}>{'READY TO CHECK IN'}</Text>
        {/* Name */}
        <Text style={styles.name}>{'John Doe'}</Text>
        {/* rowContainer- ----- 1 */}
        <View style={styles.rowContainer}>
          {/* Drop-off */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Drop-off'}</Text>
            <Text style={styles.dateText}>{'9.00 AM - 02/11'}</Text>
          </View>
          {/* Pick-up */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Pick-up'}</Text>
            <Text style={styles.dateText}>{'9.00 AM - 02/11'}</Text>
          </View>
        </View>
        {/* rowContainer ---- 2 */}
        <View style={styles.rowContainer}>
          {/* Bags */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Bags'}</Text>
            <Text style={styles.dateText}>{'02'}</Text>
          </View>
          {/* Total amount */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Total amount'}</Text>
            <Text style={styles.dateText}>£{'25.65'}</Text>
          </View>
        </View>
        {/* rowContainer ---- 3 */}
        <View style={styles.rowContainer}>
          {/* Days */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Days'}</Text>
            <Text style={styles.dateText}>{'04'}</Text>
          </View>
          {/* Order ID */}
          <View style={styles.commonContainer}>
            <Text style={styles.dataTitle}>{'Order ID'}</Text>
            <View style={styles.orderIdContainer}>
              <Text style={styles.dateText}>{'56823296'}</Text>
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

export default ReadyToCheckInList;
