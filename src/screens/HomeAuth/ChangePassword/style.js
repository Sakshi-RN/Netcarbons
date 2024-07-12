import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Fonts } from "../../../theme/fonts";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:Colors.white,
    },
    content: {
        marginHorizontal: responsiveWidth(5),
    },
    newPasswordContainer: {
        marginVertical: responsiveHeight(5),
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBar: {
        height: responsiveHeight(1),
        backgroundColor: Colors.lightgrey,
        width: responsiveWidth(20),
        borderRadius: 8,
    },
    buttonContainer: {
        position: 'absolute',
        bottom:responsiveHeight(5),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    error:{
        fontSize:15,
        lineHeight:23,
        color:Colors.RED,
        fontFamily:Fonts.medium,
        marginTop:5
    },
    inputWrapper:{
        paddingTop:30
    },
    labelText:{
        fontSize:16,
        lineHeight:25.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium,
        marginBottom:10
    },
    passwordStrengthRow:{
        flexDirection:'row',
        width:'100%',
        paddingTop:15
    }


});
