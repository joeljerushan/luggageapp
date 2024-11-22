import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { ColorSheet } from '../../../utils/ColorSheet';

export const styles = StyleSheet.create({
  dropdownView: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: ColorSheet.Title,
    // backgroundColor: 'red'
  },
  dropdown: {
    flex: 1,
    paddingLeft: hp(2),
    paddingRight: hp(2),
    // backgroundColor: 'green'
  },
  arrowDropContainer: {
    width: wp(9),
    height: hp(3.8),
    padding: hp(0.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
    borderWidth: 2,
    borderColor: ColorSheet.Compelete,
    // backgroundColor: 'blue'
  },

  item: {
    padding: hp(1),
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  textItem: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Title,
  },
  icon: {
    marginRight: hp(1),
  },

  placeholderStyle: {
    fontSize: RFValue(14),
    color: ColorSheet?.TextInputTxtColor,
  },
  selectedTextStyle: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet?.TextInputTxtColor,
  },
  dropdownContainerStyle: {
    // backgroundColor: 'yellow',
    borderBottomLeftRadius: hp(1),
    borderBottomRightRadius: hp(1),
    borderColor: ColorSheet?.TextInputTxtColor,
    borderWidth: 1,
    marginTop: hp(3),
    padding: hp(1),
  },
  iconStyle: {
    width: wp(20),
    height: hp(20),
  },
});
