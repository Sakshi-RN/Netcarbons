import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist, updateWishlist } from "../../redux/features/wishlistReducer";

const WishlistButton = ({ productId }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.products);

  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    setIsWishlisted(wishlist.some((item) => item.product._id === productId));
  }, [wishlist, productId]);

  const toggleWishlist = () => {
    const updatedWishlist = isWishlisted
      ? wishlist.filter((product) => product.product._id !== productId)
      : [...wishlist, { product: productId }];

    dispatch(updateWishlist({ products: updatedWishlist })).then((responseJson) => {
      dispatch(fetchWishlist());
    })
    setIsWishlisted(!isWishlisted);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleWishlist}>
      <Icon
        name={isWishlisted ? "heart" : "heart-outline"}
        size={24}
        color={isWishlisted ? Colors.DARKRED : Colors.OFFBLACK}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    justifyContent: "center",
  },
});

export default WishlistButton;
