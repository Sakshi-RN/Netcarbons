import {StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: dynamicSize(20, true)
  }
});
