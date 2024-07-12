import {StyleSheet, Platform} from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

export default StyleSheet.create({
    headerWrapper:{
        // flex:1,
        // backgroundColor:Colors.WHITE,
        // shadowColor: "#000000",
        // shadowOffset: {
        // width: 0,
        // height: 3,
        // },
        // shadowOpacity:  0.17,
        // shadowRadius: 3.05,
        // elevation: 4, 
        // borderBottomWidth:0.5,
        // borderBottomColor:Colors.LIGHTGREYOFF,
        // borderBottomWidth:1,
        marginTop:Platform.OS === "ios" ? 7 :0
        // paddingTop:Platform.OS === "ios" ? 35 :0
        // paddingTop:Platform.OS === "ios" ? 45 :0
    },
    
	header:{
       flexDirection:"row",
       justifyContent:'space-between',
       alignItems:'flex-end',
    //    paddingVertical:30,
       paddingTop: Platform.OS == "ios" ? 40 :25,
       paddingBottom: Platform.OS == "ios" ? 30 :30,
       paddingHorizontal:15
    },
    headerLeft:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center', 
        justifyContent:'center'
    },
    headerRight:{
        justifyContent:'center',
        // marginTop:3, 
        // backgroundColor:'red'
    },
    headerRow:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    },
    profileWrapper:{
        width:30,
        height:30
    },
    welcomeUser:{
        color:Colors.BLACK,
        fontSize:18,
        lineHeight:28,
        fontWeight:600,
        marginRight:5,
        letterSpacing:-0.3,
        fontFamily:Fonts.semiBold
    },
    profileImg:{
        width:'100%',
        height:'100%'
    },
    appLogo:{
        // width:41, 
        // height:35
        width:135, 
        height:24,
        // marginTop:0
    },
    cancelText:{
        fontSize:15,
        lineHeight:23,
        color:Colors.LIGHTBLUE,
        fontWeight:500,
        marginBottom:7
    },
    cancelBtn:{
        marginTop:10
    },
    profileImage:{
        width:37,
        height:37,
        borderRadius:18.5
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileLoaderWrapper:{
        width:37,
        height:37,
        borderRadius:18.5,
        borderColor:Colors.LIGHTGREY,
        borderWidth:.4,
    }
});
