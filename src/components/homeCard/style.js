import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'
import { dynamicSize } from '../../utilities/helpers'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:'column',
        marginHorizontal: dynamicSize(8, true),
        // marginBottom:20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },  
        elevation: 5,
        marginVertical:15,
        backgroundColor:Colors.WHITE
    },
    shadowVectorAdjustment:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0
    },
    percentValueRow:{
        flexDirection:'column',
        position:'absolute',
        top:10,
        left:15
    },
    percentTagWrapper:{
        width:44, 
        height:44,
        borderRadius:22,
        backgroundColor:"#7BA986",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    percentValText:{
        fontSize:16,
        lineHeight:24,
        color:Colors.white,
        fontFamily:Fonts.medium
    },
    newTagWrapper:{
        width:45, 
        height:45,
        borderRadius:23,
        backgroundColor:"#B7323B",
        justifyContent:'center',
        alignItems:'center'
    },
    contentWrapper:{
        flexDirection:'column',
        position:'absolute',
        bottom:10,
        left:15
    },
    titleText:{
        fontSize:18,
        lineHeight:26,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    cutAmountText:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.SECONDARY,
        fontFamily:Fonts.regular
    },
    totalAmountText:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    titleWrapper:{
        paddingBottom:responsiveHeight(3),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'96%'
    }
    
})

export default styles
