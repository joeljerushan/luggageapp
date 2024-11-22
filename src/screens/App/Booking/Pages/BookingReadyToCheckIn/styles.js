import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  contentContainerScroll: {
    flexGrow: 1,
    paddingBottom: hp(2),
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    padding: hp(2),
    // backgroundColor: 'green',
  },
  readyToCheckInList: {
    marginTop: hp(2),
  },
  customerDataContainer: {
    width: '100%',
    padding: hp(2),
    gap: 10,
    marginTop: hp(3),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    backgroundColor: ColorSheet.CardBg,
  },
  customerDataTitle: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.CustomerTitle,
  },
  customerData: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.TableHeader,
  },
  bookingActivityHeaderContainer: {
    width: '100%',
    marginTop: hp(3),
    // backgroundColor: 'green',
  },
  bookingActivityHeader: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: ColorSheet.View,
  },
  bookActiveContainer: {
    marginTop: hp(2),
    padding: hp(2),
    gap: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    backgroundColor: 'rgba(246,246,246,0.4)',
  },
  bookActiveTitle: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.TableHeader,
  },
  bookActivedata: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.CustomerTitle,
  },
  buttonContainer: {
    width: '100%',
    marginTop: hp(4),
  },
});
