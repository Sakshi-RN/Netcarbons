import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import images from "../../../theme/Images";
import imagePaths from "../../../utilities/imagePaths";
import MainButton from "../../../components/MainButton";
import styles from "./style";
import { Colors } from "../../../theme/colors";
import DropdownComponent from "../../../components/DropdownComponent";
import { fetchCountryCodes } from "../../../redux/features/countryCodeReducer";

import CommonCart from "../../../components/CommonCart";
import { fetchCart } from "../../../redux/features/getCartReducer";
import { useNavigation } from "@react-navigation/native";
import Swiper from 'react-native-swiper';
import {
  Apply_Coupon,
  Remove_Coupon,
} from "../../../redux/features/CouponReducer";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const Payment = () => {
  const [index, setIndex] = useState(0);

  const onIndexChanged = (newIndex) => {
    setIndex(newIndex);
  }

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [toggleShow, setToggleShow] = useState(true);
  const [selectedOption, setSelectedOption] = useState("oneTime");
  const [isCurrencyFocus, setCurrencyFocus] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const { countryCodes } = useSelector((state) => state.country);
  const [couponValue, setCouponValue] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const {
    products = [],
    error,
    loading,
    couponCode,
    couponDiscount,
    orderTotal,
    subTotal,
  } = useSelector((state) => state.Cart);

  const { applyError } = useSelector((state) => state.coupon);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchCountryCodes());
  }, [dispatch]);

  const currencyData = countryCodes.map((code) => ({
    label: code.currency,
    value: code.currency,
  }));

  const handleCurrencyChange = (item) => {
    setSelectedCurrency(item.value);
    setCurrencyFocus(false);
  };

  const handleCouponChange = (text) => {
    setCouponValue(text);
    setCouponError("");
    setCouponApplied(false);
  };

  useEffect(() => {
    if (couponCode !== "") {
      setCouponValue(couponCode);
      setCouponError("");
      setCouponApplied(true);
    }
  }, [couponCode]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleApplyCoupon = () => {
    dispatch(Apply_Coupon(couponValue))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          setCouponApplied(true);
          dispatch(fetchCart());
          setCouponError("");
        } else if (response.meta.requestStatus === "rejected") {
          setCouponError(response.payload.message || "Failed to apply coupon");
        }
      })
      .catch((error) => {
        console.log("Coupon Apply Error: ", error);
        setCouponError(error.message);
      });
  };

  const handleRemoveCoupon = () => {
    dispatch(Remove_Coupon()).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(fetchCart());
        setCouponApplied(false);
        setCouponValue("");
        setCouponError("");
      }
    });
  };

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
  const renderEmptyCart = () => {
    return (
      <View style={styles.containerEmptyCart}>
        <Text style={{ alignSelf: "center", color: "grey" }}>No Products</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <View style={{paddingHorizontal:responsiveWidth(5)}}>

    <CommonCart
      productId={item.cartItemId}
      itemText={item.product.name}
      quantityText={`${item.quantity} x`}
      priceText={`${item.product.priceList[0].currency} ${item.product.priceList[0].currencySymbol}${item.product.priceList[0].oldPrice} / ${item.product.priceList[0].currencySymbol}${item.product.priceList[0].price}`}
      totalPriceText={`${item.product.priceList[0].currency} ${item.product.priceList[0].currencySymbol
        }${item.quantity * item.product.priceList[0].price}`}
      imgUrl={item.product.thumbImage[0]}
      showDeleteIcon={true}
      showIncrementContainer={true}
    />
        </View>
  );

  const renderFlatlist = () => {
    return (
      <>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={renderEmptyCart}
        />
      </>
    );
  };
  const renderCoupon = () => {
    return (
      <View>
        <Text style={styles.totalItemsText}>Add coupon</Text>
        <View style={styles.inputButtonWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type here"
              style={styles.input}
              placeholderTextColor={Colors.grey}
              value={couponValue}
              onChangeText={handleCouponChange}
            />
            {couponApplied ? <Image source={images.checked} /> : null}
          </View>
          {couponApplied ? (
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={handleRemoveCoupon}
            >
              <Text style={styles.removebtnText}>Remove</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={handleApplyCoupon}
            >
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          )}
        </View>
        {couponError !== "" && (
          <Text style={{ fontSize: 14, color: "red" }}>{couponError}</Text>
        )}
        {couponApplied ? (
          <>
            <Text style={styles.DiscountText}>Discount: {couponDiscount}</Text>
            <Text style={styles.CartText}>Cart Total: {orderTotal}</Text>
          </>
        ) : (
          <View />
        )}
        <View style={styles.lineStyles} />
        <Text style={[styles.totalItemsText]}>Total items: 11</Text>
        <Text style={styles.orderTotalText}>Order Total: $220.00</Text>
        <View style={styles.headerStyles}>
          <DropdownComponent
            data={currencyData}
            selectedValue={selectedCurrency}
            isFocus={isCurrencyFocus}
            setIsFocus={setCurrencyFocus}
            handleChange={handleCurrencyChange}
            placeholder={"Change Currency USD($)"}
          />
        </View>
        <View style={{ paddingBottom: responsiveHeight(8) }}>
          <MainButton title="Next"
          />
        </View>
      </View>
    );
  };

  const renderPaySubscription = () => {
    return (
      <View>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[
              styles.radioCircle,
              selectedOption === "oneTime" && styles.selectedCircle,
            ]}
            onPress={() => setSelectedOption("oneTime")}
          ></TouchableOpacity>
          <View style={styles.radioTextContainer}>
            <Text style={styles.optionText}>1 Time Payment:</Text>
            <Text style={styles.optionAmount}>Pay $108.00 Today</Text>
          </View>
        </View>

        <View style={[styles.lineStyles, { marginTop: 30 }]} />
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[
              styles.radioCircle,
              selectedOption === "subscription" &&
              styles.selectedCircle,
            ]}
            onPress={() => setSelectedOption("subscription")}
          ></TouchableOpacity>
          <View style={styles.radioTextContainer}>
            <Text style={styles.optionText}>
              12 Subscription Payments of $9.00 per month:
            </Text>
            <Text style={styles.optionAmount}>Pay $9.00 Today</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonWhiteText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() =>
              alert(
                `Pay ${selectedOption === "oneTime" ? "$108.00" : "$9.00 Today"
                }`
              )
            }
          >
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground source={imagePaths.loginTopVector}>
          <CommonHeader onBackPress={handleBackPress} showCancelBtn={true} />
        </ImageBackground>
        <View style={styles.headerStyles}>
          <CommonHeader
            cancelText="Cancel"
            title="Address"
            rightText="1/2 Checkout"
            initialCancelBtn={true}
            onBackPress={handleBackPress}
          />
        </View>
        <View style={{ flex: 1 }}>
          {renderFlatlist()}
        </View>
        <Swiper
          dot={<View style={styles.circleDot} />}
          activeDot={<View style={styles.activecircleDot} />}
          loop={false}
          scrollEnabled={true}
          onIndexChanged={onIndexChanged}
          index={index}
        >
          <ScrollView style={[styles.bottomSlideContainer]}>
            {renderCoupon()}
          </ScrollView>
          <View style={styles.bottomSlideContainer}>
            {renderPaySubscription()}
          </View>
        </Swiper>
      </KeyboardAvoidingView>
    </>
  );
};

export default Payment;
