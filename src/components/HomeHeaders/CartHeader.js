import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import CommonHeader from "./CommonHeader";
import { HeartIcon, ShoppingCartIcon } from "../../assets";
import styles from "../../screens/HomeAuth/Home/style";
import { Colors } from "../../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import Wishlist from "../../screens/HomeAuth/Wishlist";
import Cart from "../../screens/HomeAuth/Cart";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const CartHeader = ({ navigation }) => {
  const [showToggle, setShowToggle] = useState(false);
  const cartItems = useSelector((state) => state.Cart.products)?.length;
  const wishlistItems = useSelector((state) => state.wishlist.products)?.length;
  const [isWishlistModalVisible, setWishlistModalVisible] = useState(false);
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const [wishlistAnimation] = useState(new Animated.Value(-width));
  const [cartAnimation] = useState(new Animated.Value(width));
  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleWishlistModal = () => {
    if (isWishlistModalVisible) {
      Animated.timing(wishlistAnimation, {
        toValue: -width,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setWishlistModalVisible(false);
      });
    } else {
      setWishlistModalVisible(true);
      Animated.timing(wishlistAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleCartModal = () => {
    if (isCartModalVisible) {
      Animated.timing(cartAnimation, {
        toValue: width,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCartModalVisible(false);
      });
    } else {
      setCartModalVisible(true);
      Animated.timing(cartAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  const wishlistModal = () => (
    <Modal
      visible={isWishlistModalVisible}
      transparent={true}
      onRequestClose={toggleWishlistModal}
    >
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateX: wishlistAnimation }] },
          ]}
        >
          <View style={styles.row}>
            <Text style={styles.headerText}>Wishlist</Text>
            <TouchableOpacity onPress={toggleWishlistModal}>
              <Entypo name="cross" size={35} color={Colors.OFFBLACK} />
            </TouchableOpacity>
          </View>
          <Wishlist toggleWishlistModal={toggleWishlistModal} />
        </Animated.View>
      </View>
    </Modal>
  );

  const cartModal = () => (
    <Modal
      visible={isCartModalVisible}
      transparent={true}
      onRequestClose={toggleCartModal}
    >
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateX: cartAnimation }] },
          ]}
        >
          <View style={styles.row}>
            <Text style={styles.headerText}>Cart</Text>
            <TouchableOpacity onPress={toggleCartModal}>
              <Entypo name="cross" size={35} color={Colors.OFFBLACK} />
            </TouchableOpacity>
          </View>
          <Cart toggleCartModal={toggleCartModal} />
        </Animated.View>
      </View>
    </Modal>
  );

  return (
    <>
      <View style={styles.backgroundStyle}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.wishlistButton}
        >
          <Entypo name="chevron-left" size={25} color={Colors.BLACK} />
        </TouchableOpacity>
        <CommonHeader />
        <View style={styles.shoppingCartRow}>
          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={toggleWishlistModal}
          >
            <HeartIcon />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{wishlistItems}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.CartButton} onPress={toggleCartModal}>
            <ShoppingCartIcon />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{cartItems}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {wishlistModal()}
      {cartModal()}
    </>
  );
};

export default CartHeader;
