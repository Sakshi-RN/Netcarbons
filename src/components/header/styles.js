import {StyleSheet, Platform} from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

export default StyleSheet.create({
    headerWrapper:{
        marginTop:Platform.OS === "ios" ? 7 :0
    },
    
	header:{
       flexDirection:"row",
       justifyContent:'space-between',
       alignItems:'flex-end',
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
        width:135, 
        height:24,
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
