import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    contentContainer: {
        flexGrow: 1,
        paddingBottom: hp(5)
    },
    mainContainer: {
        width :'100%',
        padding: hp(2),
        // backgroundColor: 'green'
    },
    grayView: {
        width: '100%',
        height: hp(30),
        marginTop: hp(2),
        borderRadius: 10,
        backgroundColor: 'rgba(38,38,38,0.2)'
    },
    cameraView: {
        width: '100%',
        height:'100%',
        borderRadius: 10,
    },
    tabButton: {
        marginTop: hp(3),
    },
});
