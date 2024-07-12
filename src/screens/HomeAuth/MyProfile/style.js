import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: responsiveWidth(5),
        justifyContent: 'space-between',

    },
    loginText: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium,
        color: Colors.GREY,
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: Fonts.medium,
        color: Colors.OFFBLACK,
        marginTop: responsiveHeight(2),
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: responsiveHeight(2),
        flexDirection: 'row',
        marginTop: responsiveHeight(4.5),

    },
    profileImage: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(10),
        marginBottom: responsiveHeight(1),
    },
    profileName: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: Fonts.medium,
        color: Colors.BLACK,
    },
    profileEmail: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.regular,
        color: Colors.GREY,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(5)
    },
    menuItemText: {
        fontSize: responsiveFontSize(2.2),
        fontFamily: Fonts.medium,
        color: Colors.BLACK,
        marginLeft: responsiveWidth(3),
        flex: 1,
    },


    profileInfo: {
        width: responsiveWidth(70),
        paddingHorizontal: responsiveWidth(5),
    },
    emptyProfileContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: responsiveHeight(30)
    }
});
