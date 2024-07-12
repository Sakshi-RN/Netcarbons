import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({

    container: {
        flex: 1,
    },
    content: {
        marginHorizontal: responsiveWidth(5),
    },
    inputContainer: {
        marginTop: responsiveHeight(2.5),
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(70),
        marginTop: responsiveHeight(2.5),
    },
    button: {
        width: responsiveWidth(32),
        paddingVertical: responsiveHeight(1.5),
        backgroundColor: Colors.PastelGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.WHITE,
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2),
    },

});
