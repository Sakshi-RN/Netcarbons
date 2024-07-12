
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ImageWrapper from "../../../components/image";
import imagePaths from "../../../utilities/imagePaths";
import MainButton from "../../../components/MainButton";
import Header from "../../../components/header";
import { auth } from "../../../redux/features/authReducer";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../utilities/helpers";
import styles from "./style";

const FillOTP = ({ route, navigation }) => {
  const { emailParam } = route?.params;
  const { registerOtpVerifyLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(300);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [inputError, setInputError] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setResendDisabled(false);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }
    if (newOtp.join("").length === 6) {
      handleFormSubmission(newOtp.join(""));
    }
  };

  const handleFormSubmission = async (enteredOtp) => {
    if (enteredOtp.length !== 6) {
      setInputError(true);
      return;
    }
    setInputError(false);

    let data = {
      email: emailParam?.trim(),
      otp: enteredOtp,
    };

    dispatch(auth.registerOtpVerifyThread(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success) {
          showSuccessMessage("User registered successfully");
          navigation.navigate("Login");
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };

  const resendOTP = async () => {
    let data = {
      email: emailParam?.trim(),
      checkout: true,
    };

    dispatch(auth.resendOTPForRegisterationThread(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success) {
          showSuccessMessage(responseJson?.payload?.message);
          setSeconds(300);
          setResendDisabled(true);
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <ScrollView style={styles.scrolViewWrapper}>
            <View style={styles.topBanner}>
              <ImageWrapper
                imagePath={imagePaths.loginTopVector}
                maxWidth={"100%"}
                maxHeight={89}
              />
              <View style={styles.headerRowAdjust}>
                <Header
                  navigation={navigation}
                  centerLogo={true}
                  rightIcon={
                    <TouchableOpacity
                      style={{ paddingRight: 0 }}
                      onPress={() => navigation.navigate("LetStart")}
                    >
                      <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                  }
                  backIcon={true}
                />
              </View>
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.usernameText}>
                Hello Username, Welcome to Netcarbons!
              </Text>
              {emailParam && (
                <View style={styles.rowWrap}>
                  <Text style={styles.contentLightText}>
                    Help us secure your account by verifying that{" "}
                  </Text>
                  <Text style={styles.contentDarkText}>{emailParam} </Text>
                  <Text style={styles.contentLightText}>is your email.</Text>
                </View>
              )}
              <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={styles.contentLightText}>
                  Please enter the six-digit code we have sent you in an email,
                  to verify and activate your account
                </Text>
              </View>
              <View style={styles.otpWrapper}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 32,
                  }}
                >
                  {otp.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={inputRefs.current[index]}
                      style={{
                        borderWidth: 2,
                        borderColor: inputError ? "#D90429" : "black",
                        borderRadius: 8,
                        padding: 10,
                        marginHorizontal: 5,
                        textAlign: "center",
                        width: 44,
                        fontSize: 20,
                      }}
                      onChangeText={(value) => handleOtpChange(index, value)}
                      value={digit}
                      maxLength={1}
                      keyboardType="numeric"
                    />
                  ))}
                </View>
                {inputError && (
                  <Text style={styles.error}>
                    OTP must be exactly 6 characters
                  </Text>
                )}
              </View>
              <View style={styles.requestNewCodeWrapper}>
                <View style={styles.requestNewWrap}>
                  <Text style={styles.contentLightText}>
                    You can request new code in:
                  </Text>
                  <Text style={styles.timerText}>
                    {`${minutes}:${remainingSeconds < 10 ? "0" : ""
                      }${remainingSeconds}`}
                  </Text>
                </View>
              </View>
              <MainButton
                title="Verify"
                onPress={() => handleFormSubmission(otp.join(""))}
                loader={registerOtpVerifyLoading}
              />
            </View>
           
            <View
              style={[
                styles.requestNewCodeWrapper,
                { marginTop: 20, marginBottom: 10 },
              ]}
            >
              <View style={styles.requestNewWrap}>
                <Text style={styles.contentLightText}>Didn’t get a code?</Text>
                <TouchableOpacity 
                  onPress={resendOTP} 
                  disabled={resendDisabled}
                >
                  <Text style={[styles.resendText, resendDisabled && { color: 'gray' }]}> Click to Resend</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.pandaBottomRow}>
              <ImageWrapper
                imagePath={imagePaths.otpPandaVector}
                maxWidth={240}
                maxHeight={187}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default FillOTP;
