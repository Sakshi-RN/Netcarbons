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
  Image,
} from "react-native";
import MainButton from "../../../components/MainButton";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";

import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../utilities/helpers";
import styles from "./style";
import {
  Resend_OTP_Email_Verification,
  Verify_Primary_Email_OTP,
  Verify_Secondary_Email_OTP,
} from "../../../redux/features/otpVerifyReducer";
import images from "../../../theme/Images";

const VerifyOTP = ({ route, navigation }) => {
  const { emailParam, verifyType } = route?.params;
  const { registerOtpVerifyLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(300);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [inputError, setInputError] = useState(false);

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
  };

  const handleFormSubmission = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      setInputError(true);
      return;
    }
    setInputError(false);

    let data = {
      otp: enteredOtp,
    };

    if (verifyType === "primaryEmail") {
      dispatch(Verify_Primary_Email_OTP(data))
        .then((responseJson) => {
          if (responseJson?.payload?.success) {
            showSuccessMessage("Primary Email updated successfully");
             navigation.goBack();
          } else {
            showErrorMessage(responseJson?.payload?.message);
          }
        })
        .catch((error) => {
          console.error(error);
          showErrorMessage(error.message);
        });
    } else if (verifyType === "secondaryEmail") {
      dispatch(Verify_Secondary_Email_OTP(data))
        .then((responseJson) => {
          if (responseJson?.payload?.success) {
            showSuccessMessage("Recovery Email updated successfully");
             navigation.goBack();
          } else {
            showErrorMessage(responseJson?.payload?.message);
          }
        })
        .catch((error) => {
          console.error(error);
          showErrorMessage(error.message);
        });
    }
  };

  const resendOTP = async () => {
    let data = {
      email: emailParam?.trim(),
    };

    dispatch(Resend_OTP_Email_Verification(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success) {
          showSuccessMessage(responseJson?.payload?.message);
          setSeconds(300);
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <CommonHeader onBackPress={handleBackPress} />
      <ScrollView style={styles.scrolViewWrapper}>
        <Image source={images.verifyOtp} />

        <Text style={styles.usernameText}>Please check your email</Text>
        {emailParam && (
          <>
            <Text style={styles.contentLightText}>We have sent a code to </Text>
            <Text style={styles.contentDarkText}>{emailParam} </Text>
          </>
        )}

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
            <Text style={styles.errortext}>OTP must be exactly 6 characters</Text>
          )}
        </View>

        <View style={styles.requestNewCodeWrapper}>
          <Text style={styles.contentLightText}>
            You can request new code in:
          </Text>
          <Text style={styles.timerText}>
            {`${minutes}:${
              remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}`}
          </Text>
        </View>

        <View style={styles.verifyButtonWrapper}>
          <MainButton
            title="Verify"
            onPress={handleFormSubmission}
            loader={registerOtpVerifyLoading}
          />
        </View>
        <View style={styles.requestNewWrap}>
          <Text style={[styles.contentLightText, { marginTop: 0 }]}>
            Didn’t get a code?
          </Text>
          <TouchableOpacity onPress={() => resendOTP()}>
            <Text style={styles.resendText}> Click to Resend</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTP;
