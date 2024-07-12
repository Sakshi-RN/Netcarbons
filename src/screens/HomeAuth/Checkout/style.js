import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { Circle } from "react-native-svg";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(10),
    },
    inputContainer: {
        marginTop: responsiveHeight(2.5),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: responsiveHeight(1.8),
    },
    halfWidth: {
        width: '46%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: responsiveHeight(3),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    choosePaymentText: {
        color: Colors.OFFBLACK,
        fontSize: responsiveFontSize(2.5),
        fontFamily: Fonts.medium
    },
    reviewOrderText: {
        color: Colors.SECONDARY,
        marginTop: responsiveHeight(1.5)
    },
    paymentMethodText: {
        color: Colors.OFFBLACK,
        fontSize: responsiveFontSize(2.5),
        fontFamily: Fonts.medium,
        marginLeft:responsiveWidth(5)
    },
    radioButton:{
        borderWidth:1,
        borderRadius:10,
        height:18,
        width:18,
        borderColor:Colors.OFFBLACK,
        justifyContent:'center',
        alignItems:'center'

    },
    Circle:{
        borderRadius:5,
        height:10,
        width:10,
        backgroundColor:Colors.OFFBLACK

    },
    appleIcon:{
        width:responsiveWidth(11),
        height:responsiveHeight(2.4),
        marginTop:responsiveHeight(2)
    }
});
