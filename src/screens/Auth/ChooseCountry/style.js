import {Platform, StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'column',
        backgroundColor:Colors.white,
        // alignItems:'center',
        // justifyContent:'center',
        // paddingHorizontal: dynamicSize(15, true)
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
        paddingBottom:Platform.OS =="ios" ? 20 :4,
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
        marginTop:10
    },
    logoWrapper:{
        position:'absolute',
        top:Platform.OS =="ios" ? 70 :20,
        left:0,
        right:0,
        alignItems:'center'
    },
    titleWrapper:{
        alignItems:'center',
        paddingTop:0
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 4,
        color:Colors.OFFBLACK,
        paddingHorizontal: 8,
    },
    countryDropdownWrapper:{
        paddingHorizontal: dynamicSize(12, true)
    },
    placeholderStyle: {
        fontSize: 15,
        lineHeight:21,
        fontFamily:Fonts.regular,
        color:Colors.DARKGREY
    },
    selectedTextStyle: {
        fontSize: 18,
        lineHeight:21,
        fontFamily:Fonts.regular,
        color:Colors.OFFBLACK,
      
    },
    iconStyle: {
       marginRight:5
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
        lineHeight:21,
        fontFamily:Fonts.regular,
        color:Colors.OFFBLACK
    }
});
