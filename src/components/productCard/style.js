import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'
import { dynamicSize } from '../../utilities/helpers'

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:'row',
        borderRadius:10,
        marginVertical:8,
        backgroundColor:Colors.WHITE,
        borderWidth:1,
        borderColor:Colors.LIGHTGREYOFF,
        padding:10
    },
    cardLeft:{
        width:'40%',
        flexDirection:'column'
    },
    cardRight:{
        width:'60%',
        flexDirection:'column',
        // justifyContent:'space-between'
    },
    productNameText:{
        fontSize:16,
        lineHeight:25.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    productQtyPrice:{
        fontSize:15,
        lineHeight:21.94,
        color:Colors.SECONDARY,
        fontFamily:Fonts.regular
    },
    totalPriceText:{
        fontSize:18,
        lineHeight:22.01,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.regular,
        // marginTop:10
    },
    QuantityRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
        borderBottomColor:Colors.LIGHTGREYOFF,
        borderBottomWidth:2,
        paddingTop:10,
        paddingBottom:10
    },
    minuesText:{
        fontSize:16,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    qtyText:{
        fontSize:16,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    plusText:{
        fontSize:16,
        lineHeight:21.94,
        color:Colors.OFFBLACK,
        fontFamily:Fonts.medium
    },
    deleteRow:{
        flexDirection:"row",
        justifyContent:'flex-end',
        paddingTop:30
    }
    
    
})

export default styles
