import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ImageWrapper from "../../../components/image";
import imagePaths from "../../../utilities/imagePaths";
import { InputBox } from "../../../components/inputBox";
import MainButton from "../../../components/MainButton";
import Header from "../../../components/header";
import { auth } from "../../../redux/features/authReducer";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../utilities/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


const Login = (props) => {
  const { loginLoading } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const formikRef = useRef();
  const dispatch = useDispatch();
  const [lockToggle, setLockToggle] = useState(true);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleRegister = () => {
    navigation.navigate('Register')
  }

  const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please provide valid email address")
      .nullable("Please provide valid email address")
      .matches(emailRegExp, "Email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });


  const handleFormSubmission = async (values) => {
    if (values?.email != "" && values?.password != "") {
      let data = {
        userId: values?.email.trim(),
        password: values?.password.trim(),
        strategy: "password",
      };

      dispatch(auth.loginThread(data))
        .then((responseJson) => {
          console.log("Login Response:", responseJson);
          if (responseJson?.payload?.success == true) {
            let data = {
              value: 0,
            };
            dispatch(auth.resetRegType(data));
            AsyncStorage.setItem("loginUser", JSON.stringify(data.value));
            AsyncStorage.setItem(
              "loginData",
              JSON.stringify(responseJson?.payload.user)
            );
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          } else if (responseJson?.payload?.success == false) {
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
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => handleFormSubmission(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              setFieldTouched,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.scrolViewWrapper}>
                <View style={styles.topBanner}>
                  <ImageWrapper
                    imagePath={imagePaths.loginTopVector}
                    maxWidth={"100%"}
                    maxHeight={Platform.OS == "ios" ? 89 : 80}
                  />
                  <View style={styles.headerRowAdjust}>
                    <Header
                      navigation={props.navigation}
                      centerLogo={true}
                      rightIcon={
                        <TouchableOpacity
                          style={{ paddingRight: 0 }}
                        // onPress={()=> logoutUser()}
                        >
                          <Text style={{ opacity: 0 }}>Logt</Text>
                        </TouchableOpacity>
                      }
                      backIcon={true}
                    />
                  </View>
                </View>

                <ScrollView >
                  <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                    <Text style={styles.loginDescText}>
                      Log in with your email and password
                    </Text>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.labelText}>Email</Text>
                      <InputBox
                        style={styles.input}
                        leftIcon={false}
                        rightIcon={false}
                        keyboardType={"email-address"}
                        autoCapitalize="none"
                        placeholder="example@gmail.com"
                        value={values.email}
                        onBlur={handleBlur("email")}
                        onChangeText={handleChange("email")}
                      />
                      {errors.email && touched.email ? (
                        <Text style={styles.error}>{errors.email}</Text>
                      ) : null}
                    </View>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.labelText}>Password</Text>
                      <InputBox
                        style={styles.input}
                        leftIcon={false}
                        rightIcon={
                          <>
                            {lockToggle ? (
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
                            )}
                          </>
                        }
                        keyboardType={"default"}
                        autoCapitalize="none"
                        placeholder="Type password"
                        value={values.password}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        secureTextEntry={lockToggle ? true : false}
                      />
                      {errors.password && touched.password ? (
                        <Text style={styles.error}>{errors.password}</Text>
                      ) : null}
                    </View>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.labelText}>Forgot Password ?</Text>
                    </View>

                    <View style={styles.haveAnAccountWrapper}>
                      <Text style={styles.accountText}>Not have an account?</Text>
                      <TouchableOpacity onPress={handleRegister}
          
                   >
                        <Text
                          style={styles.registrationText} >
                          Registration
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <ImageBackground
                    source={imagePaths.loginBottomVector}
                    style={styles.imagebcakgroundStyle}
                  >
                    <View style={styles.bottomLoginVector}>
                      <MainButton
                        title="Log in"
                        onPress={handleSubmit}
                        loader={loginLoading}
                      />
                    </View>
                  </ImageBackground>

                </ScrollView>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
