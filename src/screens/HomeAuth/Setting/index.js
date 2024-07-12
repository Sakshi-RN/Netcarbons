import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import styles from "./style";

const Setting = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  const handleChangeAddress = () => {
    navigation.navigate("ChangeAddress");
  };

  const handleChangeEmail = () => {
    navigation.navigate({ name: "ChangeEmail" });
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="Settings"
        onBackPress={handleBackPress}
        showCancelBtn={true}
      />
      <TouchableOpacity onPress={handleChangePassword}>
        <Text style={styles.text}>Change password</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={handleChangeAddress}>
        <Text style={styles.text}>Change address</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={handleChangeEmail}>
        <Text style={styles.text}>Change Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
