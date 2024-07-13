
import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import InputField from "../../../components/CommonInput/InputField";
import MainButton from "../../../components/MainButton";
import styles from "./style";
import imagePaths from "../../../utilities/imagePaths";
import CountryComponent from "../../../components/CountryComponent";
import StateComponent from "../../../components/StateComponent";
import CityComponent from "../../../components/CityComponent";
import {
  Change_Address,
  Get_Address,
  Set_Address_Field,
} from "../../../redux/features/changeAddressReducer";
import PhoneCodeComponent from "../../../components/PhoneCodeComponent";

const Address = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data.data);
  const address = useSelector((state) => state.address.data);
  const loading = useSelector((state) => state.address.updateLoading);
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
  const [selectedCity, setSelectedCity] = useState(address?.city || "");
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isStateModalVisible, setIsStateModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);

  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [addressLine1Error, setAddressLine1Error] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {
    dispatch(Get_Address());
  }, []);

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
    console.log("Country Cliked", countryObject);
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
    setCountryError("");
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
    setStateError("");
  };

  const handleSelectCity = (cityName) => {
    dispatch(Set_Address_Field({ field: "city", value: cityName }));
    setIsCityModalVisible(false);
    setCityError("");
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const validateFields = () => {
    let valid = true;
    if (!address.firstName.trim()) {
      setFirstNameError("First name is required");
      valid = false;
    }
    if (!address.lastName.trim()) {
      setLastNameError("Last name is required");
      valid = false;
    }
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

    dispatch(Change_Address(address)).then((response)=>{
      dispatch(Get_Address());
    })
    navigation.navigate("Payment");
  };

  const handleAddressLine1Change = (text) => {
    dispatch(Set_Address_Field({ field: "addressLine1", value: text }));
    setAddressLine1Error("");
  };

  const handlePhonenumberChange = (text) => {
    console.log("Phonenumber" , text)
    dispatch(Set_Address_Field({ field: "phone", value: text }));
  };

  const handleAddressLine2Change = (text) => {
    dispatch(Set_Address_Field({ field: "addressLine2", value: text }));
  };

  const handlePincodeChange = (text) => {
    dispatch(Set_Address_Field({ field: "pincode", value: text }));
    setPincodeError("");
  };

  const handleFirstNameChange = (text) => {
    dispatch(Set_Address_Field({ field: "firstName", value: text }));
    setFirstNameError("");
  };

  const handleLastNameChange = (text) => {
    dispatch(Set_Address_Field({ field: "lastName", value: text }));
    setLastNameError("");
  };

  return (
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
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <InputField
          placeholder="Email"
          editable={false}
          value={profile?.email}
        />
        <InputField
          placeholder="Enter your first name"
          value={address?.firstName}
          onChangeText={handleFirstNameChange}
        />
        {firstNameError ? (
          <Text style={styles.errorText}>{firstNameError}</Text>
        ) : null}
        <InputField
          placeholder="Enter your last name"
          value={address?.lastName}
          onChangeText={handleLastNameChange}
        />
        {lastNameError ? (
          <Text style={styles.errorText}>{lastNameError}</Text>
        ) : null}
        <View style={styles.inputContainer}>
          <PhoneCodeComponent value={address?.phone} onChanePhonenumber={handlePhonenumberChange} />
        </View>
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
          {stateError ? (
            <Text style={styles.errorText}>{stateError}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Select your City"
            showDropdownIcon
            onDropDownPress={toggleCityModal}
            label={"City"}
            value={address.city}
          />
          {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}
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
        <InputField
          placeholder="Enter your address 1"
          value={address.addressLine1}
          onChangeText={handleAddressLine1Change}
        />
        {addressLine1Error ? (
          <Text style={styles.errorText}>{addressLine1Error}</Text>
        ) : null}
        <InputField
          placeholder="Enter your address 2 (optional)"
          value={address.addressLine2}
          onChangeText={handleAddressLine2Change}
        />
        <InputField
          placeholder="Enter your ZIP/Pin code"
          value={address.pincode}
          onChangeText={handlePincodeChange}
        />
        {pincodeError ? (
          <Text style={styles.errorText}>{pincodeError}</Text>
        ) : null}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <MainButton title="Continue" onPress={handleSave} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Address;
