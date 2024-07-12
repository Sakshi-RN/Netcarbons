import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import React from "react";
import styles from "./style";
import ImageWrapper from "../image";
import imagePaths from "../../utilities/imagePaths";
import WishlistButton from "../../components/WishlistButton";

const HomeCard = ({ navigation, dataItem }) => {


    return (

        <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate("ProductDetail", {productId:dataItem?._id})}
        >
            <Image
                style={{ width: "100%", height: 285 }}
                source={{ uri: `${dataItem.image[0]}` }}
            />

            <View style={styles.shadowVectorAdjustment}>
                <ImageWrapper
                    imagePath={imagePaths.homeShadowVector}
                    maxWidth={"100%"} maxHeight={169}
                />
            </View>

            <View style={styles.percentValueRow}>
                <View style={styles.percentTagWrapper}>
               
                    <Text style={styles.percentValText}>
                        {dataItem?.priceList[0]?.oldPrice && dataItem?.priceList[0]?.price
                            ? (dataItem.priceList[0].oldPrice / dataItem.priceList[0].price).toFixed(2)
                            : 'N/A'}
                    </Text>
                </View>

                <View style={styles.newTagWrapper}>
                    <Text style={styles.percentValText}>{dataItem.tag}</Text>
                </View>
            </View>

            <View style={styles.contentWrapper}>
                <View style={styles.titleWrapper}>
             
                    <Text style={styles.titleText}>{dataItem.name}</Text>
                    <WishlistButton productId={dataItem?._id}/>
         
                </View>

                <View style={styles.amountPriceWrapper}>
                    <Text style={styles.cutAmountText}>${dataItem?.priceList[0].oldPrice}</Text>
                    <Text style={styles.totalAmountText}>${dataItem?.priceList[0].price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HomeCard;