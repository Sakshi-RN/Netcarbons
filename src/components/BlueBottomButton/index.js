import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Modal
} from 'react-native';
import ImageWrapper from '../../components/image';
import imagePaths from '../../utilities/imagePaths';
import styles from './style';
import { useNavigation } from "@react-navigation/native";

const BlueBottomButton = (props) => {
    const navigation = useNavigation();
    const [showToggle, setShowToggle] = useState(false);

    const handleCarbonFootPrint = () => {
        setShowToggle(false);
        navigation.navigate("CalculateCarbonFootprint");
    };

    const handleCalculate = () => {
        setShowToggle(false);
        navigation.navigate("CalculateCarbonFootprint");
        // navigation.navigate("Calculate");
    };

    const handleMyDashboard = () => {
        setShowToggle(false);
        navigation.navigate("MyDashboard");
    };

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
                                <TouchableOpacity style={styles.percentIconButton}>
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
        </View>
    );
};

export default BlueBottomButton;


