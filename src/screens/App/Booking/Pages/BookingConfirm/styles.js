import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: hp(2),
    // backgroundColor: 'yellow'
  },
  contentContainerScroll: {
    flexGrow: 1,
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    padding: hp(2),
    // backgroundColor: 'green',
  },
  successCard: {
    width: '100%',
    height: hp(30),
    gap: 5,
    marginTop: hp(3),
    marginBottom: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: ColorSheet.CardBg,
  },
  successText: {
    fontSize: RFValue(18),
    fontWeight: '700',
    color: ColorSheet.Description,
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
  },
});
