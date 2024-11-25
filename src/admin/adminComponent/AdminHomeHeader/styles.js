import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  notificationSearchContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'green'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'blue'
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.View,
  },
  qrContainer: {
    flex: 0.35,
    alignItems: 'flex-end',
    // backgroundColor: 'blue'
  },
});
