import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: hp(2),
    marginTop: hp(1.5),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ColorSheet.TableBg,
    backgroundColor: ColorSheet.CardBg,
  },
  text: {
    fontSize: RFValue(12),
    fontWeight: '700',
    lineHeight: hp(2.5),
    color: ColorSheet.Description,
  },
});
