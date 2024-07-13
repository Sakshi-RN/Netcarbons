import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "../../../redux/features/wishlistReducer";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CommonCart from "../../../components/CommonCart";
import styles from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../theme/colors";

const WishlistComponent = ({ toggleWishlistModal }) => {
  const dispatch = useDispatch();
  const { products, wishlistLoading, wishlistError } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const renderEmptyCart = () => (
    <View style={styles.containerEmptyCart}>
      <Icon name={"heart-outline"} size={70} color={Colors.OFFBLACK} />
      <Text style={styles.titleEmptyCart}>Empty Wishlist</Text>
      <TouchableOpacity style={styles.goShopButtonEmptyCart} onPress={toggleWishlistModal}>
        <Text style={styles.buttonTextEmptyCart}>
          Add items to see wishlist
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (wishlistLoading) {
    return <Text>Loading...</Text>;
  }

  if (wishlistError) {
    return <Text>Error: {wishlistError.message}</Text>;
  }

  if (!products || products.length === 0) {
    return renderEmptyCart();
  }

  const renderItem = ({ item }) => {
    const product = item.product;
    const priceInfo = product.priceList.find(
      (price) => price.currency === "USD"
    );
    return (
      <CommonCart
        itemText={product.name}
        priceText={`${product.priceList[0].currency} $${product.priceList[0].oldPrice} / $${product.priceList[0].price}`}
        imgUrl={product.thumbImage[0]}
        showHeartIcon={true}
        productId={product._id}
        priceValue={item.product.priceList[ 0 ].price}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyCart}
      />
    </View>
  );
};

export default WishlistComponent;
