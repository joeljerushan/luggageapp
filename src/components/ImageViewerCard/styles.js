import { StyleSheet } from 'react-native';
import { hp, wp } from "@/utils/Scaling";

export const styles = StyleSheet.create({
  container: {
    height: hp(30),
    marginTop: hp(2),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(38, 38, 38, 0.5)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(250, 250, 250, 0.6)',
  },
});
