import {Platform, StyleSheet} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { dynamicSize } from "../../../utilities/helpers";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white,
    },
    scrolViewWrapper:{
        flex: 1,
        backgroundColor:Colors.white,
        marginHorizontal:20
    },
    backgroundStyle: {
        height: responsiveHeight(10),
        paddingTop:responsiveHeight(2)
    },
    topBanner:{
        flexDirection:'column',
        height:89,
        backgroundColor:'red'
    },
    calculateRowHeader:{
        paddingTop:Platform.OS =="ios" ? 40 :15,
        paddingHorizontal: dynamicSize(12, true)
    },
    headerRowAdjust:{
        position:'absolute',
        top:0,
        left:0,
        right:0
    },
    loginContainer:{
        flex:1,
        flexDirection:'column',
        paddingHorizontal: dynamicSize(12, true),
        paddingTop:Platform.OS =="ios" ? 30 :0
    },
    countryContainer:{
marginTop:10
    },
    chooseAmountLabel:{
        fontSize:20,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium,
        alignSelf:'center',
        marginTop:5
    },
    calculateVectorCenter:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:20
    },
    buyNowText:{
        fontSize:15,
        lineHeight:22.01,
        color:Colors.WHITE,
        fontFamily:Fonts.medium,
        borderWidth:1,
        borderColor:"transparent"
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 15,
        lineHeight:21,
        fontFamily:Fonts.regular,
        color:Colors.DARKGREY
    },
    selectedTextStyle: {
        fontSize: 15,
        lineHeight:21,
        fontFamily:Fonts.regular,
        color:Colors.OFFBLACK
    },
    iconStyle: {
       marginRight:5
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
        lineHeight:21,
        fontFamily:Fonts.regular
    },
    calculateBanner:{
        flexDirection:'row',
        marginTop:20,
        backgroundColor:'#EDF8F5',
        justifyContent:'space-between',
        alignItems:'center',
        height:60
    },
    memberContainer:{
        flexDirection:'column',
        justifyContent:'center',
        paddingTop:20
    },
    memberText:{
        fontSize:15,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium,
        marginTop:5
    
    },
    slideContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10
    },

    tabsContainer: {
        paddingVertical:10,
        width: '100%',
    },
    tabStyle: {
        borderColor: 'transparent',
        backgroundColor: '#E0E0E0',
        paddingVertical:2,
    },
    activeTabStyle: {
        backgroundColor: '#7BA986',

    },
    tabTextStyle: {
        color: '#000',
        fontSize:16,
        lineHeight:25.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium

    },
    activeTabTextStyle: {
        color: '#fff',
    },
    selectedText: {
        marginTop: 16,
        fontSize: 16,
        lineHeight:25.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    continueButtonWrapper:{
        paddingTop:20,
        paddingBottom:20
    },
    labelLeft: {
        marginRight: 10,
        fontSize:14,
        lineHeight:17.12,
        color: Colors.OFFBLACK,
        fontFamily:Fonts.regular
    },
    progressBar: {
        flex: 1,
        marginHorizontal: 10,
    },
    progressText: {
        position: 'absolute',
        left: '47%',
        transform: [{ translateX: -10 }],
        fontSize:14,
        lineHeight:17.12,
        color: Colors.white,    
        fontFamily:Fonts.medium
    },
    labelRight: {
        marginLeft: 10,
        fontSize:14,
        lineHeight:17.12,
        color: Colors.OFFBLACK,
        fontFamily:Fonts.regular
    },
    totalCarbonsText:{
        fontSize:responsiveFontSize(4),
        color: Colors.OFFBLACK,
        fontFamily:Fonts.medium,

        marginLeft:responsiveWidth(-10)
    },
    annualText:{
        fontSize:responsiveFontSize(1.8),
        color: Colors.OFFBLACK,
        fontFamily:Fonts.regular,
        width:responsiveWidth(68),
        lineHeight:20,
        marginHorizontal:responsiveWidth(3),


    },
    carbonTextRow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingVertical:28
    },
    carbonRowLeft:{
        width:'40%',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    carbonRowRight:{
        width:'60%'
    },
    carbonRowAdjustment:{
        position:'absolute',
        top:0,
        left:0,
        right:0
    },
    flexContainer:{
        // padding: 20,

        marginBottom:10
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#757575',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
      sliderWrapper: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        height: 40,
      },
      slider: {
        width: "100%", 
        height: 40,
        position:'relative'
      },
      sliderLabel: {
        fontSize:14,
        lineHeight:17.12,
        color: Colors.OFFBLACK,
        fontFamily:Fonts.regular,
        width: 30,
        textAlign: 'center',
      },
      thumb: {
        position: 'absolute',
        top: '40%',
        transform: [{ translateY: -10 }],
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8FB297',
        borderRadius: 20,
      
      },
      thumbText: {
        fontSize:14,
        lineHeight:17.12,
        color: Colors.OFFBLACK,
        fontFamily:Fonts.regular,
      },
      rowWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:-10
      }
   
   
});
