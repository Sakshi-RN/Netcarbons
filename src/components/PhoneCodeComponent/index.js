import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { Country } from "country-state-city";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../../theme/colors";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Fonts } from "../../theme/fonts";

const PhoneCodeComponent = ({ onSelectPhoneCode, onChanePhonenumber ,value }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const defaultCountry = Country.getAllCountries().find(
      (country) => country.isoCode === "IN"
    );
    setSelectedCountry({
      isoCode: defaultCountry.isoCode,
      phonecode: defaultCountry.phonecode,
      name: defaultCountry.name,
      flag: defaultCountry.flag,
      phoneCodeWithFlag: `+${defaultCountry.phonecode} ${defaultCountry.flag}`,
    });
  }, []);

  const countries = Country.getAllCountries().map((country) => ({
    isoCode: country.isoCode,
    phonecode: country.phonecode,
    name: country.name,
    flag: country.flag,
    phoneCodeWithFlag: `+${country.phonecode} ${country.flag}`,
  }));

  const togglePhoneCodesModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelectPhoneCode = (country) => {
    setSelectedCountry(country);
    onSelectPhoneCode && onSelectPhoneCode(country.phonecode);
    togglePhoneCodesModal();
  };

  const renderModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.isoCode}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectPhoneCode(item)}
                  style={styles.countryItem}
                >
                  <Text style={styles.countryflagText}>{item.flag}</Text>
                  <Text style={styles.countrynameText}>{item.name}</Text>
                  <Text style={styles.countryText}>{item.phonecode}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={togglePhoneCodesModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View>
      {renderModal()}
      <Text style={styles.label}>Contact No.</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={togglePhoneCodesModal}>
          <Entypo name="triangle-down" size={20} color={Colors.OFFBLACK} />
        </TouchableOpacity>
        {selectedCountry && (
          <Text style={styles.selectedPhoneCode}>
            {selectedCountry.phoneCodeWithFlag}
          </Text>
        )}
        <TextInput
          style={styles.phoneNumberInput}
          placeholderTextColor={Colors.OFFBLACK}
          keyboardType="number-pad"
          value={value}
          onChangeText={onChanePhonenumber}
        />
      </View>
    </View>
  );
};

export default PhoneCodeComponent;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: responsiveFontSize(2),
    color: Colors.OFFBLACK,
    fontFamily: Fonts.regular,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    height: responsiveHeight(8),
    marginVertical: 10,
    borderColor: Colors.lightgrey,
    borderWidth: 1.3,
  },
  input: {
    marginHorizontal: responsiveWidth(1),
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: Colors.OFFBLACK,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 17,
    fontFamily: Fonts.regular,
    color: Colors.OFFBLACK,
    paddingLeft: responsiveWidth(2),
  },
  selectedPhoneCode: {
    fontSize: 17,
    fontFamily: Fonts.regular,
    color: Colors.OFFBLACK,
    paddingLeft: responsiveWidth(2),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: responsiveHeight(5),
  },
  modalContainer: {
    width: "80%",
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
    flex: 1,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
  countryText: {
    fontSize: 13,
    color: Colors.OFFBLACK,
    fontWeight: "bold",
    width: responsiveWidth(20),
  },
  countryflagText: {
    width: responsiveWidth(10),
    fontSize: 18,
  },
  countrynameText: {
    fontSize: 16,
    color: Colors.OFFBLACK,
    fontWeight: "bold",
    width: responsiveWidth(43),
  },
  closeText: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    color: Colors.OFFBLACK,
  },
  errorText: {
    color: "red",
    fontSize: responsiveFontSize(2),
    marginTop: 5,
  },
});