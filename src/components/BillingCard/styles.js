import {hp, wp} from '@/utils/Scaling';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ColorSheet} from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: hp(3),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: ColorSheet.CardBg,
    backgroundColor: ColorSheet.CardBg,
  },
  dataContainer: {
    padding: hp(2),
    gap: 15,
  },
  rowContainer: {
    width: '95%',
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  commonContainer: {
    width: '45%',
    gap: 8,
    // backgroundColor: 'green'
  },
  descriptionContainer: {
    gap: 8,
  },
  dataTitle: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: ColorSheet.Text,
  },
  dateText: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: ColorSheet.Title,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '47%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ColorSheet.TableHeader,
  },
  buttonText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: ColorSheet.Text,
  },
});
