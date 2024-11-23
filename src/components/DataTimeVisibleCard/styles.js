import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    padding: hp(1.5),
    gap: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    // backgroundColor: 'pink'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'green'
  },
  titleText: {
    fontSize: RFValue(13),
    color: ColorSheet.TableHeader,
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'blue',
  },
  timeText: {
    width: wp(24),
    fontSize: RFValue(11),
    color: ColorSheet.TableHeader,
    fontWeight: '600',
    textAlign: 'center',
    // backgroundColor: 'red',
  },
  contentText: {
    fontSize: RFValue(13),
    color: ColorSheet.Title,
    fontWeight: '700',
  },
});
