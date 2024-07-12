import React, {useState, useEffect} from 'react'
import {
    View, 
    KeyboardAvoidingView, 
    Text, 
    Platform, 
    FlatList, 
    TouchableOpacity
} from 'react-native'
import ImageWrapper from '../../../components/image'
import imagePaths from '../../../utilities/imagePaths'
import HomeCard from '../../../components/homeCard'
import Header from '../../../components/header'
import styles from './style'
import { HeartIcon, ShoppingCartIcon, PlusWhiteIcon, PercentBlackIcon } from '../../../assets'
import { Colors } from '../../../theme/colors'

const Results = (props) => {
    const [loading, setLoading] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    let filteredData = [
        {
            id:"1",
            image:require('../../../assets/images/home-product-vector1.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
        {
            id:"2",
            image:require('../../../assets/images/home-product-vector2.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
        {
            id:"3",
            image:require('../../../assets/images/home-product-vector3.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
        {
            id:"4",
            image:require('../../../assets/images/home-product-vector1.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
        {
            id:"5",
            image:require('../../../assets/images/home-product-vector2.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
        {
            id:"6",
            image:require('../../../assets/images/home-product-vector3.png'),
            title:"Winston Creek IFM Project",
            target_amount:'17.00',
            cut_amount:'20.00',
            percent_value:'-12%',
            product_tag:"new"
        },
    ] 

    const onRefresh =()=> {
    }
  return (
        <>
            <View style={styles.topBanner}>
                <ImageWrapper
                    imagePath={imagePaths.loginTopVector}
                    maxWidth={"100%"} maxHeight={Platform.OS == "ios" ? 89 :80}
                />
                <View style={styles.headerRowAdjust}>
                    <Header 
                        navigation={props.navigation}
                        centerLogo={false}
                        title={"Results"}
                        rightIcon={
                            <View style={styles.shoppingCartRow}>
                                <TouchableOpacity
                                    // onPress={()=> props.navigation.navigate("Cart")}
                                >
                                    <Text style={styles.changeFilterText}>filter(1)</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        backIcon={false}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    {filteredData && filteredData?.length ?
                        <FlatList
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={{flexDirection:'column'}}
                            data={filteredData}
                            keyExtractor={(item, index) => String(index)}
                            onRefresh={() => onRefresh()}
                            refreshing={loading}
                            renderItem={({ item, indexObj }) => {
                                return(
                                    <HomeCard 
                                        dataItem={item}
                                        navigation={props.navigation}
                                    />
                                )
                            }}
                        />
                    :
                        null
                    }
                </View>
            </View>

            {!showToggle ?
                <View style={[styles.bottomButtonAdjust, {
                        bottom:showToggle ? 100 :30
                    }]}>
                    <View style={styles.bottomRow}>
                        <TouchableOpacity style={styles.plusIconWrapper}
                            onPress={()=> setShowToggle(true)}
                        >
                            <PlusWhiteIcon/>
                        </TouchableOpacity>
                    </View>
                </View>
            :

                <View style={[styles.bottomRowAdjust, {
                    backgroundColor:showToggle ? Colors.OFFBLACK :"transparent",
                    opacity:showToggle ? 0.9 :0.9,
                }]}>
                    <View style={[styles.bottomButtonAdjust, {
                        bottom:showToggle ? 100 :30
                    }]}>
                        <View style={styles.bottomRow}>
                            {showToggle &&
                                <TouchableOpacity style={styles.percentIconButton}>
                                    <ImageWrapper
                                        imagePath={imagePaths.percentBlackIcon}
                                        maxWidth={24} maxHeight={24}
                                    />
                                </TouchableOpacity>
                            }

                            {showToggle &&
                                <TouchableOpacity style={styles.percentIconButton}>
                                    <ImageWrapper
                                        imagePath={imagePaths.downArrowIcon}
                                        maxWidth={25} maxHeight={28}
                                    />
                                </TouchableOpacity>
                            }

                            {showToggle &&
                                <TouchableOpacity style={styles.percentIconButton}
                                    onPress={()=> props.navigation.navigate("Cart")}
                                >
                                    <ImageWrapper
                                        imagePath={imagePaths.cartBucketIcon}
                                        maxWidth={35} maxHeight={35}
                                    />
                                </TouchableOpacity>
                            }

                            {showToggle &&
                                <TouchableOpacity style={styles.crossIconButton}
                                    onPress={()=> setShowToggle(false)}
                                >
                                    <ImageWrapper
                                        imagePath={imagePaths.crossIcon}
                                        maxWidth={20} maxHeight={20}
                                    />
                                </TouchableOpacity>
                            }

                            

                            
                        </View>
                    </View>
                </View>
            }
            
        </>
)}

export default Results
