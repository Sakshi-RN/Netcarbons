import {Platform, StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
    },
    scrolViewWrapper:{
        flex: 1,
        backgroundColor:Colors.white,
   
    },
    topBanner:{
        flexDirection:'column',
        height:89
    },
    loginContainer:{
        flex:1,
        flexDirection:'column',
        paddingHorizontal: dynamicSize(12, true),
        paddingTop:Platform.OS =="ios" ? 30 :0,
        marginTop:Platform.OS =="ios" ? 0 :-10,
    },
    headerRowAdjust:{
        position:'absolute',
        top:0,
        left:0,
        right:0
    },
    usernameText:{
        fontSize:32,
        lineHeight:37.54,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    rowWrap:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:15
    },
    contentLightText:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.SECONDARY,
        fontFamily:Fonts.regular
    },
    contentDarkText:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    otpInput: {
        width: '100%',
        height: 100,
    },
    underlineStyleBase: {
        width: 47,
        height: 74,
        borderWidth: 0,
        borderWidth: 1,
        borderColor:Colors.LIGHTGREY,
        fontSize: 32,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    underlineStyleHighLighted: {
        borderColor: Colors.OFFBLACK
    },
    otpWrapper:{
        width:'100%',
        paddingBottom:20
    },
    requestNewCodeWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10
    },
    requestNewWrap:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    timerText:{
        fontSize:15,
        lineHeight:21.94,
        color:"#B7323B",
        fontFamily:Fonts.medium
    },

    resendText:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    pandaBottomRow:{
        flexDirection:'row',
        justifyContent:'center'
    },
    skipText:{
        fontSize:18,
        lineHeight:22.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    error:{
        fontSize:15,
        lineHeight:23,
        color:Colors.RED,
        fontFamily:Fonts.medium,
        marginTop:5
    }
   
});
