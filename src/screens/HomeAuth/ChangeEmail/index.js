import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import InputField from "../../../components/CommonInput/InputField";
import { Colors } from "../../../theme/colors";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  Change_Primary_Email,
  Change_Secondary_Email,
} from "../../../redux/features/changeEmailReducer";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../../utilities/helpers";


const ChangeEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showButtonRow, setShowButtonRow] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    setPrimaryEmail(profile?.data?.email || profile?.data?.draftedPrimaryEmail );
  }, [profile]);

  const handleEditButtonClick = () => {
    setShowButtonRow(true);
  };

  const handleCancelButtonClick = () => {
    setShowButtonRow(false);
  };

  const handleSecondaryButton = () => {
    setShowSecondary(true);
  };

  const handleSecondaryCancel = () => {
    setShowSecondary(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePrimarySavePress = () => {
    const data = {
      email: primaryEmail,
    };
    dispatch(Change_Primary_Email(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success) {
          showSuccessMessage("OTP sent successfully");
          navigation.navigate("VerifyOTP", {
            emailParam: primaryEmail,
            verifyType: "primaryEmail",
          });
        } else {
          showErrorMessage(responseJson?.payload?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        showErrorMessage(error.message);
      });
  };

  const handleSecondarySavePress = () => {
    const data = {
      email: secondaryEmail,
    };
    dispatch(Change_Secondary_Email(data))
      .then((responseJson) => {
        if (responseJson?.payload?.success) {
          showSuccessMessage("OTP sent successfully");
          navigation.navigate("VerifyOTP", {
            emailParam: secondaryEmail,
            verifyType: "secondaryEmail",
          });
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
    <View style={styles.container}>
      <CommonHeader onBackPress={handleBackPress} />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="tgiroti@yahoo.com"
            label="Primary Email"
            value={primaryEmail}
            onChangeText={setPrimaryEmail}
            showEditButton={true}
            onEditButtonClick={handleEditButtonClick}
          />
        </View>

        {showButtonRow && (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePrimarySavePress}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: Colors.OFFBLACK }]}
              onPress={handleCancelButtonClick}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.inputContainer}>
          <InputField
            placeholder="tgiroti@yahoo.com"
            label="Recovery Email"
            value={secondaryEmail}
            onChangeText={setSecondaryEmail}
            showEditButton={true}
            onEditButtonClick={handleSecondaryButton}
          />
          {showSecondary && (
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSecondarySavePress}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: Colors.OFFBLACK }]}
                onPress={handleSecondaryCancel}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ChangeEmail;
