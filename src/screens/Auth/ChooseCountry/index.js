import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';

import MainButton from '../../../components/MainButton'; 
import ImageWrapper from '../../../components/image'; 
import { DropdownArrowIcon } from '../../../assets'; 
import { fetchCountryCodes, fetchGeolocationByIP, setSelectedCountry } from '../../../redux/features/countryCodeReducer';
import imagePaths from '../../../utilities/imagePaths'; 
import styles from './style'; 
import { Colors } from '../../../theme/colors'; 

const ChooseCountry = ({ navigation }) => {
    const dispatch = useDispatch();
    const { countryCodes, loading, error, selectedCountry, countryName } = useSelector(state => state.country);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        dispatch(fetchCountryCodes());
        dispatch(fetchGeolocationByIP());
    }, [dispatch]);

    useEffect(() => {
        if (countryName) {
            dispatch(setSelectedCountry(countryName));
        }
    }, [countryName, dispatch]);

    const data = countryCodes.map(code => ({
        label: code.name,
        value: code.name 
    }));

    const handleCountryChange = (item) => {
        dispatch(setSelectedCountry(item.value));
        setIsFocus(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <View style={styles.centerWelcomeWrapper}>
                    <ImageWrapper
                        imagePath={imagePaths.chooseCountry} 
                        maxWidth={"100%"}
                        maxHeight={Platform.OS === 'ios' ? 500 : 390}
                    />
                    <ImageWrapper
                        imagePath={imagePaths.logoNew} 
                        maxWidth={135}
                        maxHeight={24}
                    />
                </View>

                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>
                        Choose your country
                    </Text>
                    <Text style={styles.subTitleText}>
                        First step before using Netcarbons
                    </Text>
                </View>

                <View style={styles.countryDropdownWrapper}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : error ? (
                        <Text>Error loading countries: {error}</Text>
                    ) : (
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: Colors.OFFBLACK }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={selectedCountry}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={handleCountryChange}
                            renderRightIcon={() => (
                                <View style={styles.iconStyle}>
                                    <DropdownArrowIcon />
                                </View>
                            )}
                        />
                    )}
                </View>

                <View style={styles.btnWrapper}>
                    <MainButton
                        title="Continue"
                        onPress={() => navigation.navigate("OnboardingFirst")} 
                    />
                </View>
            </View>
        </View>
    );
}

export default ChooseCountry;
