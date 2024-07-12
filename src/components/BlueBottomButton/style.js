import { StyleSheet } from "react-native";
import { Colors } from '../../theme/colors';
import { Fonts } from "../../theme/fonts";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    topBanner: {
        position: 'absolute',
        bottom: 2,
        alignSelf: 'flex-end',
        paddingBottom: responsiveHeight(5),
    },
    bottomRowAdjust: {
        flex: 1,
        backgroundColor: '#424242',
    },
    newPositionStyles: {
        flex: 1,

    },
    plusIconWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#75B1DC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    textStyles: {
        color: Colors.WHITE,
        fontSize: responsiveFontSize(4.5),
    },
    percentIconButton: {
        width: 60,
        height: 60,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: responsiveHeight(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        borderRadius: 4,
        backgroundColor: '#424242',
    },
    textColor: {
        color: Colors.WHITE,
        fontFamily: Fonts.regular,
        fontSize: responsiveFontSize(1.8),
    },
    viewWidth: {
        width: responsiveWidth(60),
        alignItems: 'flex-end',
        paddingRight: responsiveWidth(3),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        paddingRight: responsiveWidth(5),
        paddingBottom: responsiveHeight(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
});
