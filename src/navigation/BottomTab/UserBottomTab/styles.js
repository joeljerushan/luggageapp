import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { hp, wp } from "../../../utils/Scaling";
import { ColorSheet } from "../../../utils/ColorSheet";

export const styles = StyleSheet.create({
  IconContainer: {
    width: wp(20),
    paddingTop: hp(1),
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: 'red'
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
    color: ColorSheet.White,
  },

  ActiveLabel: {
    fontWeight: "700",
  },
});
