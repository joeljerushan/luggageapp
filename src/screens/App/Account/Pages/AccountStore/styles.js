import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  contentContainerScroll: {
    flexGrow: 1,
    paddingBottom: hp(2),
  },
  mainContainer: {
    width: '100%',
    padding: hp(2),
    // backgroundColor: 'green'
  },
  dropDownCalendarContainer: {
    width: '100%',
    marginBottom: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    // backgroundColor: 'pink',
  },
  dropDownStyle: {
    flex: 0.85,
  },
  storeDataContainer: {
    marginBottom: hp(2),
    padding: hp(1.5),
    gap: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    // backgroundColor: 'pink'
  },
  storeDataTitle: {
    fontSize: RFValue(13),
    color: ColorSheet.TableHeader,
    fontWeight: '600',
  },
  storeDataValue: {
    fontSize: RFValue(13),
    color: ColorSheet.Title,
    fontWeight: '700',
  },
});
