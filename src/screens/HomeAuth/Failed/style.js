import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
 
    container: {
        flex: 1,
        paddingHorizontal: responsiveWidth(3),
        alignItems: 'center',
        paddingVertical: responsiveHeight(5),
        backgroundColor: Colors.WHITE
    },
    logo: {
        width: responsiveWidth(60),
        height: responsiveHeight(10),
        resizeMode: 'contain',
        marginBottom: responsiveHeight(2),
    },
    image: {
        marginTop: responsiveHeight(8),
    },
    title: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(3.5),
        color: Colors.OFFBLACK,

    },
    subtitle: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginTop: responsiveHeight(2),
        color: Colors.SECONDARY
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: responsiveHeight(7)
    },
    buttonSpacer: {
        height: responsiveHeight(1.5),
    },

});
