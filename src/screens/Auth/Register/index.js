import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import imagePaths from "../../../utilities/imagePaths";
import MainButton from "../../../components/MainButton";
import { BoxPasswordStrengthDisplay } from "react-native-password-strength-meter";
import styles from "./style";
import { showErrorMessage } from "../../../utilities/helpers";
import Entypo from "react-native-vector-icons/Entypo";
import { auth } from "../../../redux/features/authReducer";
import { Colors } from "../../../theme/colors";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import { useNavigation } from "@react-navigation/native";
import CustomToggle from "../../../components/CustomToggle";
import InputField from "../../../components/CommonInput/InputField";

const { width } = Dimensions.get("window");

const Register = (props) => {
  const { registerLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [lockToggle, setLockToggle] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToNews: false,
  });
  const [errors, setErrors] = useState({});
  const levels = [
    {
      label: "Poor",
      labelColor: "#ff6900",
      activeBarColor: "#ff6900",
    },
    {
      label: "Good",
      labelColor: "#f3d331",
      activeBarColor: "#f3d331",
    },
    {
      label: "Strong",
      labelColor: "green",
      activeBarColor: "green",
    },
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegExp.test(values.email)) {
      newErrors.email = "Please provide a valid email address";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      newErrors.password = "Password is too short - should be 8 chars minimum";
    } else if (!passwordRegExp.test(values.password)) {
      newErrors.password =
        "Must contain 8 characters, one uppercase, one lowercase, one number, and one special character";
    }

    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!values.agreeToTerms) {
      newErrors.agreeToTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmission = async () => {
    if (validateForm()) {
      let data = {
        email: values.email.trim(),
        phone: "",
        password: values.password.trim(),
        confirmPassword: values.confirmPassword.trim(),
        userType: "Individual",
        termsAndConditions: values.agreeToTerms,
        newsLetter: values.agreeToNews,
        checkout: false,
      };

      dispatch(auth.registerThread(data))
        .then((responseJson) => {
          if (responseJson?.payload?.success === true) {
            navigation.navigate("FillOTP", {
              emailParam: values.email,
            });
          } else if (responseJson?.payload?.success === false) {
            showErrorMessage(responseJson?.payload?.message);
          }
        })
        .catch((error) => {
          console.error(error);
          showErrorMessage(error.message);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        source={imagePaths.loginTopVector}
        style={styles.backgroundStyle}
      >
        <CommonHeader onBackPress={handleBackPress} showCancelBtn={true} />
      </ImageBackground>
      <ScrollView style={styles.scrolViewWrapper}>
        <Text style={styles.loginText}>Registration</Text>
        <Text style={styles.loginDescText}>
          Create an account and start saving nature.
        </Text>
        <View style={styles.inputWrapper}>
          <InputField
            label="Email"
            placeholder="Email"
            value={values.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}
        </View>
        <View style={styles.inputWrapper}>
          <InputField
            label="Create a password"
            placeholder="Password"
            secureTextEntry={lockToggle}
            value={values.password}
            onChangeText={(text) => handleChange("password", text)}
            rightIcon={
              lockToggle ? (
                <Entypo
                  name="eye"
                  size={20}
                  color={Colors.grey}
                  onPress={() => setLockToggle(false)}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={20}
                  color={Colors.grey}
                  onPress={() => setLockToggle(true)}
                />
              )
            }
          />
          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}
        </View>
        <View style={styles.inputWrapper}>
          <InputField
            label="Confirm password"
            placeholder="Confirm Password"
            secureTextEntry={lockToggle}
            value={values.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
            rightIcon={
              lockToggle ? (
                <Entypo
                  name="eye"
                  size={20}
                  color={Colors.grey}
                  onPress={() => setLockToggle(false)}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={20}
                  color={Colors.grey}
                  onPress={() => setLockToggle(true)}
                />
              )
            }
          />
          {errors.confirmPassword ? (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          ) : null}
          <View style={styles.passwordStrengthRow}>
            <BoxPasswordStrengthDisplay
              password={values.password}
              meterType="box"
              scoreLimit={100}
              levels={levels}
              width={width - 55}
              boxSpacing={3}
            />
          </View>
        </View>
        <View style={styles.termsRow}>
          <View style={styles.termsLeft}>
            <CustomToggle
              value={values.agreeToTerms}
              onValueChange={() =>
                handleChange("agreeToTerms", !values.agreeToTerms)
              }
            />
          </View>
          <View style={styles.termsRight}>
            <Text style={styles.termsText}>Terms and Conditions</Text>
            <Text style={styles.termsDescText}>
              I agree with Terms & Conditions and Privacy Policy
            </Text>
          </View>
        </View>
        <View style={styles.termsRow}>
          <View style={styles.termsLeft}>
            <CustomToggle
              value={values.agreeToNews}
              onValueChange={() =>
                handleChange("agreeToNews", !values.agreeToNews)
              }
            />
          </View>
          <View style={styles.termsRight}>
            <Text style={styles.termsText}>Daily news</Text>
            <Text style={styles.termsDescText}>
              I want to receive any updates and newsletter on my email
            </Text>
          </View>
        </View>
        {errors.agreeToTerms ? (
          <Text style={[styles.error, { paddingHorizontal: 30 }]}>
            {errors.agreeToTerms}
          </Text>
        ) : null}
      </ScrollView>
      <View style={styles.loginButtonWrapper}>
        <MainButton
          title="Registration"
          onPress={handleFormSubmission}
          loader={registerLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
