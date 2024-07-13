import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import InputField from "../../../components/CommonInput/InputField";
import styles from "./style";
import {
  Change_Address,
  Set_Address_Field,
  Get_Address,
} from "../../../redux/features/changeAddressReducer";
import MainButton from "../../../components/MainButton";
import CountryComponent from "../../../components/CountryComponent";
import StateComponent from "../../../components/StateComponent";
import CityComponent from "../../../components/CityComponent";

const ChangeAddress = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const address = useSelector((state) => state.address.data);
  const updateLoading = useSelector((state) => state.address.updateLoading);
  const fetchLoading = useSelector((state) => state.address.fetchLoading);

  const [selectedCountry, setSelectedCountry] = useState(
    address?.country || ""
  );
  const [selectedState, setSelectedState] = useState(address?.state || "");
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    address?.countryCode || ""
  );
  const [selectedStateCode, setSelectedStateCode] = useState(
    address?.stateCode || ""
  );
  const [selectedCity, setSelectedCity] = useState(address.city || "");
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isStateModalVisible, setIsStateModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);

  const [countryError, setCountryError] = useState("");
  const [addressLine1Error, setAddressLine1Error] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(Get_Address());
  }, [dispatch]);

  useEffect(() => {
    if (address.country) {
      setSelectedCountry(address.country);
    }
    if (address.state) {
      setSelectedState(address.state);
    }
    if (address.countryCode) {
      setSelectedCountryCode(address.countryCode);
    }
    if (address.stateCode) {
      setSelectedStateCode(address.stateCode);
    }
    if (address.city) {
      setSelectedCity(address.city);
    }
  }, [address]);

  const toggleCountryModal = () => {
    setIsCountryModalVisible(!isCountryModalVisible);
  };

  const toggleStateModal = () => {
    setIsStateModalVisible(!isStateModalVisible);
  };

  const toggleCityModal = () => {
    setIsCityModalVisible(!isCityModalVisible);
  };

  const handleSelectCountry = (countryObject) => {
    dispatch(
      Set_Address_Field({
        field: "country",
        value: countryObject.name,
      })
    );
    dispatch(
      Set_Address_Field({
        field: "countryCode",
        value: countryObject.isoCode,
      })
    );
    setIsCountryModalVisible(false);
    setErrors({ ...errors, country: "" });
  };

  const handleSelectState = (stateObject) => {
    dispatch(
      Set_Address_Field({
        field: "state",
        value: stateObject.name,
      })
    );
    dispatch(
      Set_Address_Field({
        field: "stateCode",
        value: stateObject.isoCode,
      })
    );
    setIsStateModalVisible(false);
    setErrors({ ...errors, state: "" });
  };

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    dispatch(Set_Address_Field({ field: "city", value: cityName }));
    setIsCityModalVisible(false);
    setErrors({ ...errors, city: "" });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const validateFields = () => {
    let valid = true;
    if (!address.country) {
      setCountryError("Please select a country");
      valid = false;
    }
    if (!address.state) {
      setStateError("Please select a state");
      valid = false;
    }
    if (!address.city) {
      setCityError("Please select a city");
      valid = false;
    }
    if (!address.addressLine1.trim()) {
      setAddressLine1Error("Address Line 1 is required");
      valid = false;
    }
    if (!address.pincode.trim()) {
      setPincodeError("Pincode is required");
      valid = false;
    }
    return valid;
  };

  const handleSave = () => {
    if (!validateFields()) {
      return;
    }

    dispatch(Change_Address(address)).then((responseJson) => {
      dispatch(Get_Address());
      navigation.goBack();
    });
  };

  const handleAddressLine1Change = (text) => {
    dispatch(Set_Address_Field({ field: "addressLine1", value: text }));
    setAddressLine1Error("");
  };

  const handleAddressLine2Change = (text) => {
    dispatch(Set_Address_Field({ field: "addressLine2", value: text }));
  };

  const handlePincodeChange = (text) => {
    dispatch(Set_Address_Field({ field: "pincode", value: text }));
    setPincodeError("");
  };

  const renderCountryList = () => {
    return (
      <View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Select your Country"
            showDropdownIcon
            onDropDownPress={toggleCountryModal}
            label={"Country"}
            value={selectedCountry}
          />
          {countryError ? (
            <Text style={styles.errorText}>{countryError}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Select your State"
            showDropdownIcon
            onDropDownPress={toggleStateModal}
            label={"State"}
            value={selectedState}
          />
          {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Select your City"
            showDropdownIcon
            onDropDownPress={toggleCityModal}
            label={"City"}
            value={selectedCity}
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>
        <CountryComponent
          isVisible={isCountryModalVisible}
          toggleModal={toggleCountryModal}
          onSelectCountry={handleSelectCountry}
        />
        <StateComponent
          isVisible={isStateModalVisible}
          toggleModal={toggleStateModal}
          onSelectState={handleSelectState}
          selectedCountry={selectedCountryCode}
        />
        <CityComponent
          isVisible={isCityModalVisible}
          toggleModal={toggleCityModal}
          onSelectCity={handleSelectCity}
          selectedCountry={selectedCountryCode}
          selectedState={selectedStateCode}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader onBackPress={handleBackPress} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {renderCountryList()}
        <InputField
          placeholder="Address Line 1"
          value={address.addressLine1 || ""}
          onChangeText={handleAddressLine1Change}
        />
        {addressLine1Error && (
          <Text style={styles.errorText}>{errors.addressLine1}</Text>
        )}
        <InputField
          placeholder="Address Line 2"
          value={address.addressLine2 || ""}
          onChangeText={handleAddressLine2Change}
        />
        <InputField
          placeholder="ZIP Code / Pin code"
          value={address.pincode || ""}
          onChangeText={handlePincodeChange}
        />
        {pincodeError && <Text style={styles.errorText}>{errors.pincode}</Text>}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <MainButton
          title="Save"
          onPress={handleSave}
          disabled={updateLoading || fetchLoading}
        />
      </View>
    </View>
  );
};

export default ChangeAddress;
