import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Country } from 'country-state-city';
import { Colors } from '../../theme/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Fonts } from '../../theme/fonts';
import { DropdownArrowIcon } from '../../assets';

const CountryComponent = ({ isVisible, toggleModal, onSelectCountry, isLoading }) => {
    const countries = Country.getAllCountries().map((country) => ({
        isoCode: country.isoCode,
        name: country.name,
        flag: country.flag,
    }));

    const handleCountryChange = (country) => {
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
                    {isLoading ? (
                        <ActivityIndicator size="large" color={Colors.GREY} />
                    ) : (
                        renderFlatlist()
                    )}
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const userCountry = Country.getCountryByCode(data.country_code);
                if (userCountry) {
                    setSelectedCountry({
                        isoCode: userCountry.isoCode,
                        name: userCountry.name,
                        flag: userCountry.flag,
                    });
                }
                setIsLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching user's location:", error);
                setIsLoading(false); 
            });
    }, []);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
    };

    return (
        <View style={styles.container}>

            <View style={styles.dropdown}>
                <TouchableOpacity onPress={toggleModal} style={styles.dropdownContent}>
                    {selectedCountry ? (
                        <View style={styles.selectedCountryContainer}>
                            <Text style={styles.flagText}>{selectedCountry.flag}</Text>
                            <Text style={styles.selectedCountryText}>{selectedCountry.name}</Text>
                        </View>
                    ) : (
                        <Text style={styles.dropdownText}></Text>
                    )}
                    <DropdownArrowIcon />
                </TouchableOpacity>
            </View>

            <CountryComponent
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                onSelectCountry={handleSelectCountry}
                isLoading={isLoading} 
            />
        </View>
    );
};

export default ParentComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(8),
        paddingHorizontal: responsiveWidth(5),
    },
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
        justifyContent: 'center',

    },
    dropdownContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5),
    },
    selectedCountryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedCountryText: {
        fontSize: 16,
        color: Colors.OFFBLACK,
        marginLeft: 10,
        fontFamily: Fonts.regular,
    },
    dropdownText: {
        fontSize: 18,
        color: Colors.DARKGREY,
    },
});
