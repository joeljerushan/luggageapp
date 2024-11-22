import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: hp(8),
        padding: hp(1),
        marginTop: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: ColorSheet.CardBg,
        backgroundColor: ColorSheet.Primary,
    },
});
