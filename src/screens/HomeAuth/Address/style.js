import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    emptyProfileContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: responsiveWidth(5),


    },
    headerStyles: {
        marginTop: responsiveHeight(-4)
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(20),
    },
    inputContainer: {
        marginTop: responsiveHeight(2),
    },
    buttonContainer: {
        position: 'absolute',
        bottom: responsiveHeight(3),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    errorText: {
        color: Colors.RED
    }

});
