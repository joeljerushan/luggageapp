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
});
