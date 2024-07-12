import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import React from "react";
import styles from "./style";
import ImageWrapper from "../image";
import imagePaths from "../../utilities/imagePaths";
import { DeleteIcon } from "../../assets";
const ProductCard = ({navigation, dataItem}) => {
	return (

		<TouchableOpacity style={styles.cardContainer}
            // onPress={()=> navigation.navigate("ProductDetail")}
        >
            <View style={styles.cardLeft}>
                <ImageWrapper
                    imagePath={dataItem?.image}
                    maxWidth={115} maxHeight={108}
                />
                <View style={styles.QuantityRow}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.minuesText}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.qtyText}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.plusText}>+</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.productNameText}>Winston Creek IFM Project (1)</Text>
                <Text style={styles.productQtyPrice}>2 x $25.00 / $20.00</Text>
                <Text style={styles.totalPriceText}>$40.00</Text>
                <View style={styles.deleteRow}>
                    <DeleteIcon/>
                </View>
            </View>

            
            
           
        </TouchableOpacity>
	);
};

export default ProductCard;
