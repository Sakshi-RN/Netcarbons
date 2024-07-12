import {StyleSheet} from "react-native";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    imageBackground: {
        marginTop: responsiveHeight(-12),
        width: "100%",
        height: responsiveHeight(50),
    },
    thankYouText: {
        color: Colors.OFFBLACK,
        position: 'absolute',
        bottom: responsiveHeight(1),
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2.5),
        alignSelf: 'center',
    },
    purchaseOrderContainer: {
        padding: responsiveWidth(3),
    },
    labelText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2),
    },
    valueText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(0.5),
    },
    purchaseOrderDetails: {
        borderColor: Colors.lightgrey,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(3),
        borderWidth: 1,
        marginTop: responsiveHeight(3)
    },
    detailText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2),
    },
    socialLoginsContainer: {
        backgroundColor: Colors.socialColor,
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(3),
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
        alignSelf: 'center',
    },
    shareText: {
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
    },
    scannerImage: {
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        alignSelf: 'center',
        marginTop: responsiveFontSize(2),
    },
    linkText: {
        textAlign: 'center',
        marginTop: responsiveFontSize(3),
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(2),
    },
    buttonContainer: {
        padding: responsiveWidth(5),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2)
    },
    widthStyle: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line:{
        backgroundColor:Colors.lightgrey,
        height:1,
        marginTop:responsiveHeight(2)
    }


});
