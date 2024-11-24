import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../../utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    height: hp(6),
    padding: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: ColorSheet.Title,
    // backgroundColor: 'red'
  },
  input: {
    flex: 1,
  },
});
