import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
});
