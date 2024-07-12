import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import images from "../../theme/Images";
import styles from "./style";
import { Colors } from "../../theme/colors";
import WishlistButton from '../../components/WishlistButton'
import {
  fetchCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/features/getCartReducer";

const CommonCart = ({
  dataItem,
  productId,
  itemText,
  quantityText,
  priceText,
  imgUrl,
  totalPriceText,
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
    });
  };

  const handleDecreaseItemQuantity = () => {
    if (quantity > 1) {
      dispatch(
        updateCartItemQuantity({
          product: productId,
          quantity: quantity - 1,
          cartItemId: productId,
        })
      ).then((responseJson) => {
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
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text style={styles.orderItemText}>{itemText}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.orderDetails}>{quantityText}</Text>
              <Text style={styles.orderItem}>{priceText}</Text>
              <Text style={styles.orderItemText}>{totalPriceText}</Text>
            </View>
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
