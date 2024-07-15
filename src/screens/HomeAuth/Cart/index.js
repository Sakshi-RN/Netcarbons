import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CommonCart from "../../../components/CommonCart";
import styles from "./style";
import MainButton from "../../../components/MainButton";
import images from "../../../theme/Images";
import { fetchCart } from "../../../redux/features/getCartReducer";
import { useNavigation } from "@react-navigation/native";
import { useStripe } from '@stripe/stripe-react-native';


const Cart = ({ toggleCartModal }) => {
  const {initPaymentSheet,presentPaymentSheet}=useStripe()
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.Cart);

  const STRIPE_SECRET = "sk_test_51PYC9fRxMdVFM3P7YdgZErcGg0DPagPhzROg5bedHYPw3PFCN9nrax2qKXFviJo4T4vNwvIrGx1uksCkCfKoqLd600PFMEmJig";
  useEffect(() => {
    dispatch(fetchCart());
  }, [ dispatch ]);

const onCheckout = async (amount) => {
    try {
      // 1. Create a payment intent on your backend
      // const response = await fetch("https://your-backend.com/create-payment-intent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ amount, secret: STRIPE_SECRET }),
      // });
      // const { paymentIntent } = await response.json();

      // if (!paymentIntent) {
      //   throw new Error("Failed to create payment intent");
      // }

      // 2. Initialize the Payment sheet
      const { error: initError } = await initPaymentSheet({
        merchantDisplayName: "Sakshi Sahu",
        paymentIntentClientSecret: STRIPE_SECRET,
      });

      if (initError) {
        console.error(initError);
        Alert.alert("Error", "Failed to initialize payment sheet");
        return;
      }

      // 3. Present the Payment Sheet from Stripe
      // const { error: presentError } = await presentPaymentSheet();

      // if (presentError) {
      //   console.error(presentError);
      //   Alert.alert("Error", "Payment failed");
      //   return;
      // }

      // 4. If payment is successful -> create the order
      Alert.alert("Success", "Payment was successful");

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong with the checkout process");
    }
  };

  const handleContinue = () => {
    toggleCartModal();
    navigation.navigate("Address");
  };
  const handleLogin = () => {
    toggleCartModal();
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

  const renderItem = ({ item }) => {
    return (
      <CommonCart
        productId={item.cartItemId}
        itemText={item.product.name}
        quantityText={`${ item.quantity } x`}
        oldpriceText={`${ item.product.priceList[ 0 ].currency } ${ item.product.priceList[ 0 ].currencySymbol }${ item.product.priceList[ 0 ].oldPrice }`}
        priceValue={item.product.priceList[ 0 ].price}
        priceText={`/${ item.product.priceList[ 0 ].currencySymbol }`}
        totalPriceText={`${ item.quantity * item.product.priceList[ 0 ].price
          }`}
        currency={`${ item.product.priceList[ 0 ].currency } ${ item.product.priceList[ 0 ].currencySymbol }`}
        imgUrl={item.product.thumbImage[ 0 ]}
        showDeleteIcon={true}
        showIncrementContainer={true}
      />
    );
  };

  // if (loading?.fetch) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color="grey" />
  //     </View>
  //   );
  // }

  if (error?.fetch)
  {
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
                sum + item.quantity * item.product.priceList[ 0 ].price,
              0
            )}
          </Text>
          {/* <MainButton title="CHECKOUT" onPress={handleContinue} /> */}
          <MainButton title="CHECKOUT" onPress={() => onCheckout(5)} />
          {/* <MainButton title="LOGIN TO CHECKOUT" onPress={handleLogin} /> */}
        </>
      )}
    </View>
  );
};

export default Cart;
