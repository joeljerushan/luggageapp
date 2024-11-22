import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: ColorSheet.Primary,
    },
    dataContainer: {
        padding: hp(2),
        gap: 15,
    },
    header: {
        fontSize: RFValue(12),
        fontWeight: '700',
        color: ColorSheet.Header,
    },
    name: {
        fontSize: RFValue(14),
        fontWeight: '700',
        color: ColorSheet.Title,
    },
    rowContainer: {
        width: '95%',
        marginBottom: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    commonContainer: {
        width: '45%',
        gap: 5,
        // backgroundColor: 'green'
    },
    dataTitle: {
        fontSize: RFValue(12),
        fontWeight: '600',
        color: ColorSheet.Text,
    },
    dateText: {
        fontSize: RFValue(12),
        fontWeight: '500',
        color: ColorSheet.Title,
    },
    orderIdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        // backgroundColor: 'blue'
    },
    footerContainer: {
        width: '100%',
        padding: hp(2),
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: ColorSheet.Header,
    },
    footerText: {
        fontSize: RFValue(11),
        fontWeight: '700',
        color: ColorSheet.White,
    },
});
