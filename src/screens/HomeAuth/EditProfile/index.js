import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import InputField from "../../../components/CommonInput/InputField";
import styles from "./style";
import {
  fetchProfile,
  updateProfile,
} from "../../../redux/features/profileReducer/index";
import { fetchCountryCodes } from "../../../redux/features/countryCodeReducer";
import ImagePickerComponent from "../../../components/ImagePickerComponent/index";
import CalendarPickerComponent from "../../../components/CalendarPickerComponent";
import DropdownComponent from "../../../components/DropdownComponent";
import MainButton from "../../../components/MainButton";
import CountryComponent from "../../../components/CountryComponent";

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const loading = useSelector((state) => state.profile.updateLoading);

  const [isCurrencyFocus, setCurrencyFocus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isCalendarModalVisible, setIsCalendarModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const { countryCodes, countryName } = useSelector((state) => state.country);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleSelectCountry = (country) => {
    setSelectedCountryCode(country.isoCode);
    setSelectedCountry(country.name);
    setIsCountryModalVisible(false);
  };

  useEffect(() => {
    if (countryName) {
      setSelectedCountry(countryName);
    }
  }, [countryName]);

  const currencyData = countryCodes.map((code) => ({
    label: code.currency,
    value: code.currency,
  }));

  useEffect(() => {
    if (profile && profile.data) {
      setFirstName(profile.data.firstName || "");
      setLastName(profile.data.lastName || "");
      setEmail(profile.data.email || "");
      setSelectedDate(new Date(profile.data.dob) || "");
      setSelectedImage(profile.data.profileImage || "");
      setSelectedCurrency(profile.checkoutDefaultCurrency || "");
      setSelectedCountry(
        profile.data.phone ? profile.data.phone.countryCode : ""
      );
    }
  }, [profile]);

  useEffect(() => {
    dispatch(fetchCountryCodes());
  }, [dispatch]);

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return "";
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const toggleCountryModal = () => {
    setIsCountryModalVisible(!isCountryModalVisible);
  };

  const handleCurrencyChange = (item) => {
    setSelectedCurrency(item.value);
    setCurrencyFocus(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const openCalendarModal = () => setIsCalendarModalVisible(true);
  const closeCalendarModal = () => setIsCalendarModalVisible(false);

  const validateFields = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    return isValid;
  };

  const handleSave = () => {
    if (validateFields()) {
      const profileData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        checkoutDefaultCurrency: selectedCurrency,
        countryCode: selectedCountry,
        dob: formatDate(selectedDate),
      };

      const formData = new FormData();
      Object.keys(profileData).forEach((key) => {
        formData.append(key, profileData[key]);
      });

      if (selectedImage) {
        formData.append("profileImage", {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.name,
        });
      }

      dispatch(updateProfile(formData)).then((responseJson) => {
        console.log("Login Response:", responseJson);
        if (responseJson?.payload?.success == true) {
          dispatch(fetchProfile());
        } else if (responseJson?.payload?.success == false) {
          showErrorMessage(responseJson?.payload?.message);
        }
      });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader onBackPress={handleBackPress} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImagePickerComponent
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <View style={styles.inputParent}>
          <View style={styles.inputContainer}>
            <InputField
              placeholder="First Name"
              label="First name"
              value={firstName}
              onChangeText={setFirstName}
            />
            {firstNameError ? (
              <Text style={styles.errorText}>{firstNameError}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeholder="Last Name"
              label="Last name"
              value={lastName}
              onChangeText={setLastName}
            />
            {lastNameError ? (
              <Text style={styles.errorText}>{lastNameError}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeholder="jhoonsmith@gmail.com"
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeholder="Select your Country"
              showDropdownIcon
              onDropDownPress={toggleCountryModal}
              label="Country"
              value={selectedCountry}
            />
          </View>
          <CountryComponent
            isVisible={isCountryModalVisible}
            toggleModal={toggleCountryModal}
            onSelectCountry={handleSelectCountry}
          />
          <DropdownComponent
            data={currencyData}
            selectedValue={selectedCurrency}
            isFocus={isCurrencyFocus}
            setIsFocus={setCurrencyFocus}
            handleChange={handleCurrencyChange}
            placeholder={profile?.temporaryCheckoutCurrency || "..."}
            label="Default Currency"
          />
          <View style={styles.inputContainer}>
            <InputField
              label="Birthday"
              placeholder="1992-09-23"
              showCalendarIcon={true}
              value={selectedDate ? formatDate(new Date(selectedDate)) : ""}
              onCalendarIconPress={openCalendarModal}
            />
          </View>
          <CalendarPickerComponent
            isCalendarModalVisible={isCalendarModalVisible}
            closeCalendarModal={closeCalendarModal}
            onDateChange={(date) => setSelectedDate(date)}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <MainButton title="Save" onPress={handleSave} disabled={loading} />
      </View>
    </View>
  );
};

export default EditProfile;
