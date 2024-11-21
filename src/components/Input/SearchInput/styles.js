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
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(38,38,38,0.2)',
    },
    inputSearch: {
        flex: 1,
        height: hp(4),
        marginLeft: wp(3),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: RFValue(12),
        fontWeight: '500',
        color: ColorSheet.black,
        // backgroundColor: 'green'
    },
});
