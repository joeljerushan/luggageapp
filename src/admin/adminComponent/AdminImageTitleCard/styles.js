import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    // backgroundColor: 'rgba(38,38,38,0.2)',
  },
  image: {
    width: hp(10),
    height: hp(9),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.black,
  },
  description: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.black,
  },
});
