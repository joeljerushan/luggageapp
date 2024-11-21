import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        padding: hp(1),
        marginTop: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: ColorSheet.View,
    },
    buttonContainer: {
        flex: 0.32,
        height: hp(4),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    activeButton: {
        borderRadius: 8,
        backgroundColor: ColorSheet.Gray,
    },
    text: {
        fontSize: RFValue(11),
        fontWeight: '600',
        color: ColorSheet.Primary,
    },
});
