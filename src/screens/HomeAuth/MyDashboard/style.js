import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    headerText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(3),
        alignSelf: 'center'
    },
    metricContainer: {
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        paddingVertical: responsiveHeight(4),
        marginTop: responsiveHeight(2),
    },
    metricValue: {
        color: Colors.OFFBLACK,
        fontFamily: Fonts.medium,
    },
    metricCaption: {
        color: Colors.SECONDARY,
        marginTop: responsiveHeight(3),
    },
    graphContainer: {
        paddingHorizontal: responsiveWidth(3),
        // paddingVertical:responsiveHeight(5)
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontFamily: Fonts.medium,
        marginTop: responsiveHeight(3),
        alignSelf: 'center'
    },
    totalText: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(2.7),
        alignSelf: 'center',
        marginTop:responsiveHeight(8)
    },
    greenbarView: {
        backgroundColor: '#75ad50',
        width: 25,
        height: 10,
        marginHorizontal:responsiveWidth(2),

    },
    redbarView: {
        backgroundColor: '#f29b68',
        width: 25,
        height: 10,
        marginHorizontal:responsiveWidth(2),

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginVertical:responsiveHeight(1.5)

    },
    textStyle: {
        fontFamily: Fonts.medium,
        fontSize: responsiveFontSize(1.2),
        alignSelf: 'center',

    },
    viewRow: {
        alignItems:'center',
        flexDirection:'row',
        marginVertical:responsiveHeight(1.5),
        justifyContent:'space-around'
    }


});
