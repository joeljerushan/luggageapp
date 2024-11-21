import { hp, wp } from "@/utils/Scaling";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ColorSheet } from "@/utils/ColorSheet";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    contentContainerScroll: {
        flexGrow: 1,
        paddingBottom: hp(5)
    },
    mainContainer: {
        width :'100%',
        padding: hp(2),
        // backgroundColor: 'green'
    },
});
