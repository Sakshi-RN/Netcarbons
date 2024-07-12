import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
        marginVertical: 15,
        backgroundColor: Colors.WHITE
    },
    paginationActiveStyle: {
        width: 30,
        height: 4,
        backgroundColor: Colors.WHITE
    },
    paginationInactiveStyle: {
        width: 30,
        height: 4,
        backgroundColor: Colors.BLACK
    },

    bannerAdjustment: {
        position: 'absolute',
        bottom: responsiveHeight(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        paddingLeft: responsiveWidth(3)

    },
    headerAdjustment: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
    },
    standardWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    shoppingCartRow: {
        flexDirection: 'row',
        width: responsiveWidth(18),
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundStyle: {
        height: responsiveHeight(10),
        paddingTop: responsiveHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5),

    },
    CartButton: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(10)

    },
    wishlistButton: {
        marginTop: responsiveHeight(3),
        marginRight: responsiveWidth(-5)

    },
    badgeContainer: {
        position: 'absolute',
        right: -7,
        top: -8,
        backgroundColor: Colors.DARKRED,
        borderRadius: 8,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: Colors.WHITE,
        fontSize: responsiveFontSize(1.5),
        fontFamily: Fonts.regular
    },



})

export default styles
