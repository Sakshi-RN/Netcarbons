import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import images from "../../../theme/Images";
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import { confirmAlert } from "../../../utilities/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/features/profileReducer";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../../../theme/colors";
import BlueBottomButton from '../../../components/BlueBottomButton';
import MainButton from '../../../components/MainButton'


const MyProfile = () => {
  const navigation = useNavigation();
  const profile = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const logoutUser = async () => {
    let alertData = {
      title: "Logout",
      message: "Are you sure you want to logout?",
      ok: "Yes",
      cancel: "No",
      callBack: async () => {
        try {
          const asyncStorageKeys = await AsyncStorage.getAllKeys();
          if (asyncStorageKeys.length > 0) {
            if (Platform.OS === "android") {
              await AsyncStorage.removeItem("loginData");
              await AsyncStorage.removeItem("loginUser");
              await AsyncStorage.clear();
            } else if (Platform.OS === "ios") {
              await AsyncStorage.multiRemove(asyncStorageKeys);
            }
          }
          navigation.navigate("Start");
        } catch (error) {
          console.error("Error clearing AsyncStorage:", error);
        }
      },
    };
    confirmAlert(alertData);
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [navigation]);

  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    navigation.navigate("LetStart");
  };

  const renderMenu = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("MyDashboard")}
        >
          <Image source={images.globe} />
          <Text style={styles.menuItemText}>My Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("MyOrders")}
        >
          <Image source={images.Shoppingcart} />
          <Text style={styles.menuItemText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Entypo name="user" size={20} color={Colors.OFFBLACK} />
          <Text style={styles.menuItemText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image source={images.settingIcon} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("TermsConditions")}
        >
          <Image source={images.useragrement} />
          <Text style={styles.menuItemText}>User Agreement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => logoutUser()}>
          <Image source={images.Logout} />
          <Text style={styles.menuItemText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderProfileHeader = () => {
    return (
      <View>
        <Text style={styles.headerText}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Image
            source={
              profile.data && profile.data?.profileImage
                ? { uri: profile.data?.profileImage }
                : images.uploadPic
            }
            style={styles.profileImage}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {profile.data?.firstName || profile.data?.lastName
                ? profile.data?.firstName + " " + profile.data?.lastName
                : "Add Your Name"}
            </Text>
            <Text style={styles.profileEmail}>
              {profile.data ? profile.data.email : "jhoonsmith@gmail.com"}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const loginToSee = () => {
    return (
      <View style={styles.emptyProfileContainer}>
        <MainButton
          title="LOG IN" 
          onPress={handleLogin}/>
        <Text style={styles.loginText}>Login to see profile</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <CommonHeader
        onBackPress={handleBackPress}
      />
      {/* {loginToSee()} */}
      <ScrollView>
        {renderProfileHeader()}
        {renderMenu()}
      </ScrollView>
      <BlueBottomButton />
    </View>
  );
};

export default MyProfile;



