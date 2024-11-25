
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { hp } from '../../../../../../utils/Scaling';
import { ColorSheet } from '../../../../../../utils/ColorSheet';

export const styles = StyleSheet.create({
  bottomSheetBackdrop: {
    flex: 1,
  },
  bottomSheet: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mainContentContainer: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    padding: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ColorSheet.Header,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerTitle: {
    color: ColorSheet.White,
    fontSize: RFValue(13),
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomSheetScrollViewContent: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  listOfDataContainer: {
    flex: 1,
    paddingHorizontal: hp(2),
    // backgroundColor: 'pink'
  },
});
