import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white,
    paddingHorizontal: dynamicSize(12, true)
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
  descText:{
    fontSize:15,
    lineHeight:23,
    color:Colors.black,
    fontFamily:Fonts.regular,
    textAlign:'center',
    marginTop:25,
    marginBottom:30
  },
  btnWrapper:{
    width:'100%',
    marginVertical:10,
    paddingBottom:20
  }
});
