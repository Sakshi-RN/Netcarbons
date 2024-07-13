import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, TextInput } from 'react-native';
import { Country } from 'country-state-city';
import { Colors } from '../../theme/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryCodes, fetchGeolocationByIP, setSelectedCountry } from '../../redux/features/countryCodeReducer';
import { Fonts } from '../../theme/fonts';
import { DropdownArrowIcon } from '../../assets';


const CountryComponent = ({ isVisible, toggleModal, onSelectCountry }) => {
    const dispatch = useDispatch();
    const { countryCodes, loading, error, selectedCountry, countryName } = useSelector(state => state.country);

    useEffect(() => {
        dispatch(fetchCountryCodes());
        dispatch(fetchGeolocationByIP());
    }, [dispatch]);

    useEffect(() => {
        if (countryName) {
            dispatch(setSelectedCountry(countryName));
        }
    }, [countryName, dispatch]);

    const countries = Country.getAllCountries().map((country) => ({
        isoCode: country.isoCode,
        name: country.name,
        flag: country.flag,
    }));

    const handleCountryChange = (country) => {
        dispatch(setSelectedCountry(country.name));
        onSelectCountry(country);
        toggleModal();
    };

    const renderFlatlist = () => (
        <FlatList
            data={countries}
            keyExtractor={(item) => item.isoCode}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCountryChange(item)}>
                    <View style={styles.countryItem}>
                        <Text style={styles.flagText}>{item.flag}</Text>
                        <Text style={styles.countryNameText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );

    const renderModal = () => (
        <Modal transparent={true} visible={isVisible}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    {renderFlatlist()}
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    return (
        <>
            {renderModal()}
        </>
    );
};

const ParentComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
    };

    return (
        <View>
            <View style={styles.dropdown}>
                {selectedCountry ? (
                    <View style={styles.selectedCountryContainer}>
                        <Text style={styles.flagText}>{selectedCountry.flag}</Text>
                        <Text style={styles.selectedCountryText}>{selectedCountry.name}</Text>
                    </View>
                ) : (
                    <Text style={styles.dropdownText}>Select Country</Text>
                )}
                <TouchableOpacity onPress={toggleModal}>
                    <DropdownArrowIcon />
                </TouchableOpacity>
            </View>

            <CountryComponent
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                onSelectCountry={handleSelectCountry}
            />
        </View>
    );
};

export default ParentComponent;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveHeight(3),
    },
    modalContainer: {
        width: '90%',
        backgroundColor: Colors.WHITE,
        maxHeight: '95%',
        justifyContent: 'center',
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightgrey,
    },
    flagText: {
        fontSize: 18,

    },
    countryNameText: {
        fontSize: 16,
        color: Colors.OFFBLACK,
        fontWeight: 'bold',
        width: responsiveWidth(43),
    },
    closeText: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        color: Colors.OFFBLACK,
    },
    dropdown: {
        height: responsiveHeight(6),
        borderColor: Colors.lightgrey,
        borderWidth: 1.5,
        color: Colors.OFFBLACK,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(7),
        paddingHorizontal: responsiveWidth(5)
    },
    selectedCountryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedCountryText: {
        fontSize: 16,
        color: Colors.OFFBLACK,
        marginLeft: 10,
        fontFamily: Fonts.regular
    },
    dropdownText: {
        fontSize: 18,
        color: Colors.DARKGREY,
    },
    textInput: {
        height: 50,
        borderColor: Colors.grey,
        borderWidth: 1.3,
        paddingHorizontal: 8,
        marginBottom: responsiveHeight(2),
        color: Colors.OFFBLACK,
        width: '100%',
    },
});
