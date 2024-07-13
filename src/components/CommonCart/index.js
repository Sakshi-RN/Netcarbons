import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import { Colors } from "../../theme/colors";
import WishlistButton from '../../components/WishlistButton';
import {
  fetchCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/features/getCartReducer";

const CommonCart = ({
  dataItem,
  productId,
  itemText,
  oldpriceText,
  priceText,
  priceValue,
  imgUrl,
  totalPriceText,
  currency,
  showDeleteIcon = false,
  showHeartIcon = false,
  showIncrementContainer = false,
}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Cart.products) || [];
  const productInCart = products?.find(
    (item) => item.product._id === productId
  );
  const [quantity, setQuantity] = useState(
    productInCart ? productInCart?.quantity : 1
  );

  const handleIncreaseItemQuantity = () => {
    dispatch(
      updateCartItemQuantity({
        product: productId,
        quantity: quantity + 1,
        cartItemId: productId,
      })
    ).then((responseJson) => {
      setQuantity((prev) => prev + 1);
      dispatch(fetchCart());
    });
  };
console.log("priceValuepriceValuepriceValue",priceValue)
  const handleDecreaseItemQuantity = () => {
    if (quantity > 1) {
      dispatch(
        updateCartItemQuantity({
          product: productId,
          quantity: quantity - 1,
          cartItemId: productId,
        })
      ).then((responseJson) => {
        dispatch(fetchCart());
        setQuantity((prev) => prev - 1);
      });
    } else {
      dispatch(removeFromCart(productId)).then((responseJson) => {
        dispatch(fetchCart());
      });
    }
  };

  const handleRemoveItemFromCart = () => {
    dispatch(removeFromCart(productId)).then((responseJson) => {
      dispatch(fetchCart());
    });
  };
  const renderMyOrderList = () => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.row}>
          <Image source={{ uri: imgUrl }} style={styles.image} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.orderItemText}>{itemText}</Text>
            {!showHeartIcon?   <Text style={styles.orderDetails}>{quantity}X</Text>:null}
            <View style={styles.priceRow}>
              <Text style={styles.oldpriceText}>{oldpriceText}{}</Text>
              <Text style={styles.orderItem}>{priceText}{priceValue}</Text>
            </View>
            {!showHeartIcon?<Text style={styles.orderItemText}>{currency}{priceValue*quantity}</Text>:null}
          </View>
        </View>
        <View style={[styles.row, styles.marginTop]}>
          {showIncrementContainer && (
            <View style={styles.incrementContainer}>
              <Text
                style={styles.quantity}
                onPress={handleDecreaseItemQuantity}
              >
                -
              </Text>
              <Text style={styles.quantity}>{quantity}</Text>
              <Text
                style={styles.quantity}
                onPress={handleIncreaseItemQuantity}
              >
                +
              </Text>
            </View>
          )}
          {showDeleteIcon && (
            <TouchableOpacity
              onPress={handleRemoveItemFromCart}
              style={styles.deltIcon}
            >
              <Entypo name="trash" size={25} color={Colors.DARKRED} />
            </TouchableOpacity>
          )}
          {showHeartIcon && (
            <TouchableOpacity style={styles.heartIcon}>
              <WishlistButton productId={dataItem?._id || productId} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return <View style={styles.container}>{renderMyOrderList()}</View>;
};

export default CommonCart;
