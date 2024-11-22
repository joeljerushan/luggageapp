import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSheet.Header,
    height: hp(7),
    marginTop: hp(2.5),
    padding: hp(2),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    borderWidth: 2, 
    borderColor: ColorSheet.CardBg,
    backgroundColor: ColorSheet.Primary

  },
  title: {
    opacity: 0.5,
    color: ColorSheet.TableTitle,
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});
