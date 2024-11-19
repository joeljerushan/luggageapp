import { hp, wp } from "../../utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "../../utils/ColorSheet";

export const styles = StyleSheet.create({
  IconContainer: {
    width: wp(17),
    paddingTop: hp(1),
    alignItems: "center",
    justifyContent: "space-between",
  },
  ActiveIconContainer: {
    // borderTopColor: Colors.brand["border"],
    borderTopWidth: 2,
    borderRadius: 5,
  },
  Label: {
    fontSize: RFValue(11),
    marginTop: hp(1),
    fontWeight: "400",
    color: ColorSheet.Primary,
  },

  ActiveLabel: {
    fontWeight: "700",
  },
});
