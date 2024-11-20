import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    mainContainer: {
        width :'100%',
        padding: hp(2),
        backgroundColor: 'green'
    },
    grayView: {
        width: '100%',
        height: hp(30),
        marginTop: hp(2),
        marginBottom: hp(3),
        borderRadius: 10,
        backgroundColor: 'rgba(38,38,38,0.8)'
    },
});
