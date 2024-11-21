import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '@/utils/Scaling';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../../utils/ColorSheet';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Date */}
      <View style={styles.date}>
        <Text style={styles.headerText}>Date</Text>
      </View>
      {/* name */}
      <View style={styles.name}>
        <Text style={styles.headerText}>Name</Text>
      </View>
      {/* status */}
      <View style={styles.status}>
        <Text style={styles.headerText}>Status</Text>
      </View>
      {/* revenue */}
      <View style={styles.revenue}>
        <Text style={styles.headerText}>Revenues</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(7),
    padding: hp(1),
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange'
  },
  headerText: {
    fontSize: RFValue(12),
    fontWeight: '700',
    color: ColorSheet.TableHeader,
  },
});
