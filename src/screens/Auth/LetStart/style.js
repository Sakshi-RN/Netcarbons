import {Platform, StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
    },
    welcomeContainer:{
        flex:1, 
        flexDirection:'column', 
        justifyContent:'space-between'
    },
    centerWelcomeWrapper:{
        flexDirection:'column',
        alignItems:'center'
    },
    btnWrapper:{
        width:'100%',
        marginVertical:10,
        // paddingBottom:Platform.OS =="ios" ? 20 :4,
        paddingHorizontal: dynamicSize(12, true),
    },
    titleText:{
        fontSize:32,
        lineHeight:40,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    subTitleText:{
        fontSize:16,
        lineHeight:23.73,
        color:Colors.SECONDARY,
        fontFamily:Fonts.regular,
        marginVertical:10
    },
    logoWrapper:{
        position:'absolute',
        top:Platform.OS =="ios" ? 70 :20,
        left:0,
        right:0,
        alignItems:'center'
    },
    titleWrapper:{
        paddingHorizontal: dynamicSize(12, true)
    },
    signupText:{
        fontSize:18,
        lineHeight:22.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium,
        textAlign:'center'
    },
    signupWrapper:{
        paddingBottom:Platform.OS =="ios" ? 100 :30,
        paddingTop:15
    },
    borderLogin:{
        borderColor:Colors.OFFBLACK
    }
});
