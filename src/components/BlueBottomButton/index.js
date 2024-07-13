import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Modal,
    Animated,
    Dimensions,
} from 'react-native';
import ImageWrapper from '../../components/image';
import imagePaths from '../../utilities/imagePaths';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import Cart from "../../screens/HomeAuth/Cart";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const BlueBottomButton = () => {
    const navigation = useNavigation();
    const [showToggle, setShowToggle] = useState(false);
    const [carbonEmissionValue, setCarbonEmissionValue] = useState(0);
    const [isCartModalVisible, setCartModalVisible] = useState(false);
    const [cartAnimation] = useState(new Animated.Value(width));

    const handleCarbonFootPrint = () => {
        setShowToggle(false);
        navigation.navigate("CalculateCarbonFootprint");
    };

    const handleCalculate = () => {
        setShowToggle(false);
        navigation.navigate("Calculate", { carbonEmissionParam: carbonEmissionValue });
    };

    const handleMyDashboard = () => {
        setShowToggle(false);
        navigation.navigate("MyDashboard");
    };
    const toggleCartModal = () => {
        setShowToggle(false);
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
                    <View style={styles.newwrow}>
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

    const renderToggle = () => {
        return (
            <>
                {!showToggle ? (
                    <View style={styles.topBanner}>
                        <TouchableOpacity style={styles.plusIconWrapper}
                            onPress={() => setShowToggle(true)}
                        >
                            <Text style={styles.textStyles}>+</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}
                <Modal
                    transparent={true}
                    visible={showToggle}
                    onRequestClose={() => setShowToggle(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.row}>
                                <View style={styles.viewWidth}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textColor}>My Purchases</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.percentIconButton} onPress={handleMyDashboard}>
                                    <ImageWrapper
                                        imagePath={imagePaths.purchase}
                                        maxWidth={35} maxHeight={35}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.viewWidth}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textColor}>My Emission</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.percentIconButton} onPress={handleCarbonFootPrint}>
                                    <ImageWrapper
                                        imagePath={imagePaths.percentBlackIcon}
                                        maxWidth={20} maxHeight={25}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.viewWidth}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textColor}>My Reduction Target</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.percentIconButton} onPress={handleCalculate}>
                                    <ImageWrapper
                                        imagePath={imagePaths.downArrowIcon}
                                        maxWidth={24} maxHeight={25}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.viewWidth}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textColor}>My Cart</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.percentIconButton} onPress={toggleCartModal}>
                                    <ImageWrapper
                                        imagePath={imagePaths.cartBucketIcon}
                                        maxWidth={25} maxHeight={25}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.viewWidth} />
                                <TouchableOpacity style={[styles.plusIconWrapper]}
                                    onPress={() => setShowToggle(false)}
                                >
                                    <ImageWrapper
                                        imagePath={imagePaths.crossIcon}
                                        maxWidth={20} maxHeight={20}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </>
        );
    };

    return (
        <View style={styles.container}>
            {renderToggle()}
            {cartModal()}
        </View>
    );
};

export default BlueBottomButton;



