import {StyleSheet} from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(10), 
    },
    inputContainer: {
        marginTop:responsiveHeight(2.5),
    },
    buttonContainer: {
        position: 'absolute',
        bottom: responsiveHeight(3),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    errorText:{
        color:Colors.RED
    }

});
