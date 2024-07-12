import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import ImageWrapper from "../../../components/image";
import imagePaths from "../../../utilities/imagePaths";
import MainButton from "../../../components/MainButton";
import styles from "./style";
import {
  ProductCommentsGreyIcon,
  ProductCommentsHighlightIcon,
  ProductGlobeGreyIcon,
  ProductGlobeHighlightIcon,
  ProductHomeGreyIcon,
  ProductHomeHighlightIcon,
  ProductMapGreyIcon,
  ProductMapHighlightIcon,
} from "../../../assets";
import ProductSlider from "../../../components/productSlider";
import Stars from "react-native-stars";
import { product } from "../../../redux/features/getetProductReducer";
import { cart } from "../../../redux/features/cartReducer";
import { showErrorMessage } from "../../../utilities/helpers";
import MapComponent from "../../../components/MapComponent";
import SecondaryButton from "../../../components/SecondaryButton";
import {
  addItemToCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../../../redux/features/getCartReducer";

const ProductDetail = ({ route, navigation }) => {
  const { productId } = route?.params;
  const { productDetailsLoading, productDetailsData } = useSelector(
    (state) => state.product
  );
  const { expressCheckoutLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [tabFirst, setTabFirst] = useState(true);
  const [tabSecond, setTabSecond] = useState(false);
  const [tabThird, setTabThird] = useState(false);
  const [tabFourth, setTabFourth] = useState(false);
  const [qty, setQty] = useState(0);
  const products = useSelector((state) => state.Cart.products) || [];
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const isInCart = products.some(
      (product) => product.product._id === productId
    );
    setIsAddedToCart(isInCart);
  }, [products, productId]);

  let banners = productDetailsData?.image?.map((item, index) => {
    let data = {
      id: index,
      image: item,
    };
    return data;
  });

  useEffect(() => {
    if (productId != undefined) {
      let data = {
        productId: productId,
      };
      getSingleProductDetails(data);
    }
  }, [productId != undefined]);

  const getSingleProductDetails = (data) => {
    dispatch(product.getProductDetailsThread(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success == true) {
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };

  const buyNow = (product_id) => {
    let data = {
      getStripeCoupon: false,
      products: [
        {
          product: `${product_id}`,
          quantity: 1,
        },
      ],
    };

    dispatch(cart.calculateExpressCheckoutThread(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success == true) {
          // console.log("cart express response=====", responseJson)
          navigation.navigate("Address");
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };
  const handleaddToCart = () => {
    dispatch(
      addItemToCart({
        product: productId,
        quantity: 1,
        cartItemId: productId,
      })
    ).then(() => {
      setIsAddedToCart(true);
      setQty(1);
    });
  };

  const handleIncreaseItemQuantity = () => {
    setQty(qty + 1);
    dispatch(
      updateCartItemQuantity({
        product: productId,
        quantity: qty + 1,
        cartItemId: productId,
      })
    );
  };

  const handleDecreaseItemQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
      dispatch(
        updateCartItemQuantity({
          product: productId,
          quantity: qty - 1,
          cartItemId: productId,
        })
      );
    } else {
      setIsAddedToCart(false);
      dispatch(removeFromCart(productId));
      setQty(0);
    }
  };

  const handleLogin = () => {
    navigation.navigate("LetStart");
  };

  const addToCart = () => {
    return (
      <View style={styles.qunatityRow}>
        {isAddedToCart ? (
          <View style={styles.qtyRow}>
            <TouchableOpacity onPress={handleDecreaseItemQuantity}>
              <Text style={styles.minusTextStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.minusTextStyle}>{qty}</Text>
            <TouchableOpacity onPress={handleIncreaseItemQuantity}>
              <Text style={styles.minusTextStyle}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <SecondaryButton title="ADD TO CART" onPress={handleaddToCart} />
        )}
        <MainButton
          title="BUY NOW"
          activeOpacity={0.4}
          onPress={() => buyNow(productId)}
          disabled={qty >= 1 ? false : true}
          loader={expressCheckoutLoading}
        />
        {/* <View style={{paddingHorizontal:10}}>
        <MainButton title="LOGIN TO BUY" onPress={handleLogin} />
        </View> */}
      </View>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          {productDetailsLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={"large"} color="#7BA986" />
            </View>
          ) : (
            <>
              <ScrollView style={styles.scrolViewWrapper}>
                <View style={styles.loginContainer}>
                  {productDetailsData?.image && (
                    <ProductSlider
                      dataItem={banners}
                      navigation={navigation}
                      productId={productId}
                      productDetailsData={productDetailsData}
                    />
                  )}

                  <View style={styles.productContainer}>
                    <Text style={styles.productTitle}>
                      {productDetailsData?.name}
                    </Text>
                    <View style={styles.priceWrapper}>
                      <View style={styles.priceLeft}>
                        {productDetailsData?.priceList && (
                          <View style={styles.priceRow}>
                            <Text style={styles.usdText}>
                              {productDetailsData?.priceList[0].currency}
                            </Text>
                            <Text style={styles.cuttingText}>
                              {productDetailsData?.priceList[0].currencySymbol}
                              {productDetailsData?.priceList[0].oldPrice}
                            </Text>
                            <Text style={styles.usdText}>
                              {productDetailsData?.priceList[0].currencySymbol}
                              {productDetailsData?.priceList[0].price}
                            </Text>
                          </View>
                        )}
                      </View>
                      <View style={styles.ratingRight}>
                        <View>
                          {productDetailsData?.avgRating != 0 ? (
                            <Stars
                              display={productDetailsData?.avgRating}
                              spacing={8}
                              count={5}
                              starSize={15}
                              fullStar={imagePaths.largeFilledStarIcon}
                              emptyStar={imagePaths.largeUnFilledStarIcon}
                            />
                          ) : (
                            <Stars
                              display={0}
                              spacing={8}
                              count={5}
                              starSize={15}
                              fullStar={imagePaths.largeFilledStarIcon}
                              emptyStar={imagePaths.largeUnFilledStarIcon}
                            />
                          )}
                        </View>
                      </View>
                    </View>

                    <View style={styles.tabWrapperRow}>
                      <View style={styles.tabLeft}>
                        <TouchableOpacity
                          style={styles.tabButton}
                          onPress={() => {
                            setTabFirst(true);
                            setTabSecond(false);
                            setTabThird(false);
                            setTabFourth(false);
                          }}
                        >
                          {tabFirst ? (
                            <ProductHomeHighlightIcon />
                          ) : (
                            <ProductHomeGreyIcon />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.tabButton}
                          onPress={() => {
                            setTabFirst(false);
                            setTabSecond(true);
                            setTabThird(false);
                            setTabFourth(false);
                          }}
                        >
                          {tabSecond ? (
                            <ProductGlobeHighlightIcon />
                          ) : (
                            <ProductGlobeGreyIcon />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.tabButton}
                          onPress={() => {
                            setTabFirst(false);
                            setTabSecond(false);
                            setTabThird(true);
                            setTabFourth(false);
                          }}
                        >
                          {tabThird ? (
                            <ProductCommentsHighlightIcon />
                          ) : (
                            <ProductCommentsGreyIcon />
                          )}
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.tabButton}
                          onPress={() => {
                            setTabFirst(false);
                            setTabSecond(false);
                            setTabThird(false);
                            setTabFourth(true);
                          }}
                        >
                          {tabFourth ? (
                            <ProductMapHighlightIcon />
                          ) : (
                            <ProductMapGreyIcon />
                          )}
                        </TouchableOpacity>
                      </View>
                      <View style={styles.tabContentRight}>
                        {tabFirst && (
                          <View style={styles.tabFirstContent}>
                            <Text style={styles.descHeaderText}>
                              Description
                            </Text>
                            <Text style={styles.descText}>
                              {productDetailsData?.shortDescription}
                            </Text>

                            <Text style={styles.descHeaderText}>
                              LEARN MORE
                            </Text>
                            <View style={styles.LearnRow}>
                              {productDetailsData?.details?.sdgs &&
                                productDetailsData?.details?.sdgs?.length > 0 &&
                                productDetailsData?.details?.sdgs?.map(
                                  (item) => {
                                    return (
                                      <View style={styles.learnLeft}>
                                        <ImageWrapper
                                          imagePath={{
                                            uri: `${item?.sdg?.image}`,
                                          }}
                                          maxWidth={56}
                                          maxHeight={56}
                                          resizeMode={"contain"}
                                        />
                                      </View>
                                    );
                                  }
                                )}
                            </View>
                          </View>
                        )}

                        {tabSecond && (
                          <View style={styles.tabFirstContent}>
                            {productDetailsData?.details?.sdgs &&
                              productDetailsData?.details?.sdgs?.length > 0 &&
                              productDetailsData?.details?.sdgs?.map((item) => {
                                return (
                                  <View style={styles.secondTabRow}>
                                    <View style={styles.secondTabLeft}>
                                      <ImageWrapper
                                        imagePath={{
                                          uri: `${item?.sdg?.image}`,
                                        }}
                                        maxWidth={56}
                                        maxHeight={56}
                                        resizeMode={"contain"}
                                      />
                                    </View>
                                    <View style={styles.secondTabRight}>
                                      <Text style={styles.secondTabText}>
                                        {item?.sdg?.description}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              })}
                          </View>
                        )}

                        {tabThird && (
                          <View style={styles.tabFirstContent}>
                            {productDetailsData?.avgRating != 0 ? (
                              <View style={styles.reviewContainer}>
                                <View style={styles.reviewLeft}>
                                  <ImageWrapper
                                    imagePath={imagePaths.avatarIcon}
                                    maxWidth={40}
                                    maxHeight={40}
                                    resizeMode={"contain"}
                                  />
                                </View>

                                <View style={styles.reviewRight}>
                                  <Stars
                                    display={productDetailsData?.avgRating}
                                    spacing={8}
                                    count={5}
                                    starSize={15}
                                    fullStar={imagePaths.largeFilledStarIcon}
                                    emptyStar={imagePaths.largeUnFilledStarIcon}
                                  />
                                  <View style={styles.ReviewNameRow}>
                                    <Text style={styles.reviewNameText}>
                                      Kate Smith
                                    </Text>
                                    <Text style={styles.dateText}>
                                      Apr 5, 2022
                                    </Text>
                                  </View>

                                  <View>
                                    <Text style={styles.descText}>
                                      Lorem ipsun dolor sit ament consectur
                                      ament elite
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            ) : (
                              <View style={styles.noReviewsRow}>
                                <Text style={styles.descText}>No Reviews</Text>
                              </View>
                            )}
                          </View>
                        )}

                        {tabFourth && (
                          <View style={styles.tabFirstContent}>
                            <MapComponent />
                          </View>
                        )}
                      </View>
                    </View>

                    {tabSecond && (
                      <>
                        <View style={styles.standardRow}>
                          <Text style={styles.standardText}>Standards:</Text>
                          {productDetailsData?.details?.standards && (
                            <ImageWrapper
                              imagePath={{
                                uri: `${productDetailsData?.details?.standards[0]?.logo}`,
                              }}
                              maxWidth={166}
                              maxHeight={91}
                              resizeMode={"contain"}
                            />
                          )}
                        </View>

                        <View style={styles.downloadFileWrapper}>
                          <View style={styles.downloadLeft}>
                            <View style={styles.examplePdfRow}>
                              <View>
                                <ImageWrapper
                                  imagePath={imagePaths.downloadIcon}
                                  maxWidth={28}
                                  maxHeight={38}
                                  resizeMode={"contain"}
                                />
                              </View>

                              <View style={{ marginLeft: 10 }}>
                                <Text style={styles.fileNameText}>
                                  Example.pdf
                                </Text>
                                <Text style={styles.totalMbText}>23.67 Mb</Text>
                              </View>
                            </View>
                          </View>

                          <View style={styles.downloadRight}>
                            <MainButton title="Download" />
                          </View>
                        </View>
                      </>
                    )}
                  </View>
                </View>
              </ScrollView>
              {addToCart()}
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProductDetail;
