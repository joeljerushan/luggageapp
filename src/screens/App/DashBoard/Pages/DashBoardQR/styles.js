import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'yellow'
    },
    mainContainer: {
        width: '100%',
        padding: hp(2),
    },
    qrContainer: {
        width: '100%',
        height: hp(40),
        marginTop: hp(3),
        marginBottom: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: ColorSheet.CardBg,

        // backgroundColor: 'green'
    },
    qrImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'cover',
    }
});
