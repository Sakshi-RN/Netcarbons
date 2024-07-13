import React from "react";
import { View, Dimensions, Platform } from "react-native";
import styles from "./style";
import ImageWrapper from "../image";
import { SwiperFlatList } from "react-native-swiper-flatlist";
const { width } = Dimensions.get("window");
import WishlistButton from "../../components/WishlistButton";
import CartHeader from "../../components/HomeHeaders/CartHeader";
import { useNavigation } from "@react-navigation/native";

const ProductSlider = ({ dataItem, productDetailsData ,productId }) => {
  const navigation = useNavigation();
  // console.log("Product Slider :" ,dataItem)
  return (
    <View style={styles.cardContainer}>
      <SwiperFlatList
        autoplayLoop
        index={2}
        showPagination
        data={dataItem}
        paginationStyleItemActive={styles.paginationActiveStyle}
        paginationStyleItemInactive={styles.paginationInactiveStyle}
        renderItem={({ item }) => (
          <View>
            <CartHeader navigation={navigation} />
            <ImageWrapper
              imagePath={{ uri: `${item?.image}` }}
              maxWidth={width}
              maxHeight={Platform.OS == "ios" ? 338 : 250}
              resizeMode={"contain"}
            />
          </View>
        )}
      />

      <View style={styles.bannerAdjustment}>
        <WishlistButton productId={productId} />
        <View style={styles.standardWrapper}>
          {productDetailsData?.details?.sdgs &&
            productDetailsData?.details?.sdgs?.length > 0 &&
            productDetailsData?.details?.sdgs?.map((item) => {
              return (
                <ImageWrapper
                  imagePath={{ uri: `${item?.sdg?.image}` }}
                  maxWidth={48}
                  maxHeight={48}
                  resizeMode={"contain"}
                />
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default ProductSlider;




