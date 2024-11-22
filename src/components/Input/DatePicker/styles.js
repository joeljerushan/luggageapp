import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        height: hp(6),
        padding: hp(0.4),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(1),
        borderWidth: 1,
        borderColor: ColorSheet.Title,
    },
});
