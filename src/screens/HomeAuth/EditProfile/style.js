import { StyleSheet ,Platform ,Dimensions} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    modalWrapper:
    {
        height: height * 0.35,
        padding: 8,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderTopEndRadius : responsiveHeight(4),
        borderTopLeftRadius : responsiveHeight(4),
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        marginHorizontal: responsiveWidth(5),
        paddingBottom: responsiveHeight(10),
    },
    icon: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: responsiveHeight(2),
        borderRadius: 50,
        resizeMode:'contain'
    },
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        height: responsiveHeight(6),
        marginVertical: 10,
        borderColor: Colors.lightgrey,
        borderWidth: 1.3,
    },
    placeholderStyle: {
        fontSize: 15,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.DARKGREY
    },
    selectedTextStyle: {
        fontSize: 15,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.BLACK,

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
        lineHeight: 21,
        fontFamily: Fonts.regular,
        color: Colors.OFFBLACK
    },
    iconStyle: {
        marginRight: 5
    },
    inputContainer: {
        marginTop: responsiveHeight(2.5),
    },
    text: {
        color: "white",
        fontSize: 18,
        lineHeight: 22.01,
        textAlign: "center",
        letterSpacing: -0.3,
        fontFamily: Fonts.medium,
      },
      button: {
        width: "100%",
        backgroundColor: Colors.OFFBLACK,
        padding: Platform.OS == "ios" ? 18 : 16,
      },
    buttonContainer: {
        position: 'absolute',
        bottom: responsiveHeight(3),
        width: '100%',
        paddingHorizontal: responsiveWidth(5),
    },
    inputParent: {
        paddingVertical: responsiveHeight(5)
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    bottomSheet: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        margin: 0,
        zIndex: 5,
    },
    containerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    label: {
        // marginBottom: 5,
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
    },
    calendercContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errorText:{
        color:Colors.RED
    },
    label: {
        marginBottom: 5,
        fontSize: responsiveFontSize(2),
        color: Colors.OFFBLACK,
      },
});
