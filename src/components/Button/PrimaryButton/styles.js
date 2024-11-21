import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSheet.Header,
    height: hp(6),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: ColorSheet.Primary,
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});
