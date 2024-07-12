import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CommonCart from "../../../components/CommonCart";
import styles from "./style";
import MainButton from "../../../components/MainButton";
import images from "../../../theme/Images";
import { fetchCart } from "../../../redux/features/getCartReducer";
import { useNavigation } from "@react-navigation/native";

const Cart = ({ toggleCartModal }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.Cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleContinue = () => {
    navigation.navigate("Address");
  };
  const handleLogin = () => {
    navigation.navigate("LetStart");
  };
  

  const renderEmptyCart = () => {
    return (
      <View style={styles.containerEmptyCart}>
        <Image source={images.emtycart} style={styles.image} />
        <Text style={styles.titleEmptyCart}>Empty Cart</Text>
        <TouchableOpacity
          style={styles.goShopButtonEmptyCart}
          onPress={toggleCartModal}
        >
          <Text style={styles.buttonTextEmptyCart}>Go Shop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <CommonCart
      productId={item.cartItemId}
      itemText={item.product.name}
      quantityText={`${item.quantity} x`}
      priceText={`${item.product.priceList[0].currency} ${item.product.priceList[0].currencySymbol}${item.product.priceList[0].oldPrice} / ${item.product.priceList[0].currencySymbol}${item.product.priceList[0].price}`}
      totalPriceText={`${item.product.priceList[0].currency} ${item.product.priceList[0].currencySymbol}${
        item.quantity * item.product.priceList[0].price
      }`}
      imgUrl={item.product.thumbImage[0]}
      showDeleteIcon={true}
      showIncrementContainer={true}
    />
  );

  if (loading?.fetch) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    );
  }

  if (error?.fetch) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={renderEmptyCart}
      />
      {products.length > 0 && (
        <>
          <Text style={styles.totalItemsText}>
            Total items: {products.length}
          </Text>
          <Text style={styles.orderTotalText}>
            Order Total: $
            {products.reduce(
              (sum, item) =>
                sum + item.quantity * item.product.priceList[0].price,
              0
            )}
          </Text>
          <MainButton title="CHECKOUT" onPress={handleContinue} />
          {/* <MainButton title="LOGIN TO CHECKOUT" onPress={handleLogin} /> */}

        </>
      )}
    </View>
  );
};

export default Cart;
