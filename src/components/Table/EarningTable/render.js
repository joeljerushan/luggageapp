import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '@/utils/Scaling';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../../utils/ColorSheet';
import PropTypes from 'prop-types';

const Render = props => {
  const {date, name, status, revenue} = props;
  return (
    <View style={styles.container}>
      {/* Date */}
      <View style={styles.date}>
        <Text style={styles.dataText}>{date}</Text>
      </View>
      {/* name */}
      <View style={styles.name}>
        <Text style={styles.dataText}>{name}</Text>
      </View>
      {/* status */}
      <View style={styles.status}>
        <Text style={styles.dataText}>{status}</Text>
      </View>
      {/* revenue */}
      <View style={styles.revenue}>
        <Text style={styles.dataText}>{revenue}</Text>
      </View>
    </View>
  );
};

Render.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  revenue: PropTypes.string,
};

export default Render;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(7),
    padding: hp(1),
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    backgroundColor: ColorSheet.CardBg,
  },
  date: {
    flex: 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  name: {
    flex: 0.34,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  status: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  revenue: {
    flex: 0.25,
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange'
  },
  dataText: {
    fontSize: RFValue(12),
    fontWeight: '800',
    color: ColorSheet.TableHeader,
  },
});
