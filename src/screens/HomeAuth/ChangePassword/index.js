import React, {useRef, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions } from 'react-native';
import { BoxPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import InputField from '../../../components/CommonInput/InputField';
import MainButton from '../../../components/MainButton';
import { InputBox } from '../../../components/inputBox';
import Entypo from 'react-native-vector-icons/Entypo';
import {user} from '../../../redux/features/userReducer'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Colors } from '../../../theme/colors';
import styles from './style';
import { showSuccessMessage, showErrorMessage } from '../../../utilities/helpers';
const { width } = Dimensions.get("window");

const ChangePassword = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const formikRef = useRef();
    const [lockFirstToggle, setFirstLockToggle] = useState(true)
    const [lockSecondToggle, setSecondToggle] = useState(true)
    const [lockThirdToggle, setThirdToggle] = useState(true)
    const levels =  [
        {
        label: 'Weak',
        labelColor: '#ff6900',
        activeBarColor: '#ff6900',
        },
        {
            label: 'Average',
            labelColor: '#f3d331',
            activeBarColor: '#f3d331',
        },
        {
            label: 'Strong',
            labelColor: '#14eb6e',
            activeBarColor: '#14eb6e',
        },
        {
            label: 'Very strong',
            labelColor: '#0af56d',
            activeBarColor: '#0af56d',
        }
    ]

    const handleBackPress = () => {
        navigation.goBack();
    };

    const initialValues = {
        oldPassword:"",
        newPassword: "",
        confirmPassword:""
    };

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .required('Password is required') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        newPassword: Yup.string()
            .required('New password is required')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    const handleFormSubmission = async(values)=>{
     
        if(values?.oldPassword != "" && values?.newPassword !="" && values?.confirmPassword){
            let data={
                "currentPassword":values?.oldPassword.trim(),
                "newPassword": values?.newPassword.trim(),
                "confirmPassword":values?.confirmPassword.trim()
            }
            dispatch(user.changePasswordThread(data))
            .then((responseJson) => {
                // console.log("responsedata=====", responseJson?.payload)
                if(responseJson?.payload?.success == true){
                    showSuccessMessage(responseJson?.payload?.message)
                    navigation.navigate("Setting")
                }else {
                    showErrorMessage(responseJson?.payload?.message)
                }
            })
            .catch((error) => {
                console.error(error);
                showErrorMessage(error.message)
            });
        }
    }
    return (
        <View style={styles.container}>
            <CommonHeader onBackPress={handleBackPress} />
                <Formik
                    innerRef={formikRef}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values => handleFormSubmission(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, values, errors, touched }) => (
                        <>
                    
                            <View style={styles.content}>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Create a Password</Text>
                                    <InputBox
                                        style={styles.input}
                                        leftIcon={false}
                                        rightIcon={
                                            <>
                                            {lockFirstToggle ?
                                                <Entypo name="eye" size={20} color={Colors.grey} onPress={()=> setFirstLockToggle(false)}/>
                                            :
                                                <Entypo name="eye-with-line" size={20} color={Colors.grey} onPress={()=> setFirstLockToggle(true)}/>
                                            }
                                            </>
                                        }
                                        keyboardType={'default'}
                                        autoCapitalize="none"
                                        placeholder="must be 8 character"
                                        value={values.oldPassword}
                                        onBlur={handleBlur('oldPassword')}
                                        onChangeText={handleChange('oldPassword')}
                                        secureTextEntry={lockFirstToggle? true : false}
                                    />
                                    {errors.oldPassword && touched.oldPassword ? (
                                        <Text style={styles.error}>{errors.oldPassword}</Text>
                                    ) : null}
                                </View>

                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>New Password</Text>
                                    <InputBox
                                        style={styles.input}
                                        leftIcon={false}
                                        rightIcon={
                                            <>
                                            {lockSecondToggle ?
                                                <Entypo name="eye" size={20} color={Colors.grey} onPress={()=> setSecondToggle(false)}/>
                                            :
                                                <Entypo name="eye-with-line" size={20} color={Colors.grey} onPress={()=> setSecondToggle(true)}/>
                                            }
                                            </>
                                        }
                                        keyboardType={'default'}
                                        autoCapitalize="none"
                                        placeholder="must be 8 character"
                                        value={values.newPassword}
                                        onBlur={handleBlur('newPassword')}
                                        onChangeText={handleChange('newPassword')}
                                        secureTextEntry={lockSecondToggle? true : false}
                                    />
                                    <View style={styles.passwordStrengthRow}>
                                        <BoxPasswordStrengthDisplay
                                            password={values.newPassword}
                                            meterType="box"
                                            scoreLimit={100}
                                            levels={levels}
                                            width={width - 50}
                                            boxSpacing={2}
                                        />
                                    </View>
                                    {errors.newPassword && touched.newPassword ? (
                                        <Text style={styles.error}>{errors.newPassword}</Text>
                                    ) : null}
                                </View>

                                <View style={styles.inputWrapper}>
                                    <Text style={styles.labelText}>Confirm New Password</Text>
                                    <InputBox
                                        style={styles.input}
                                        leftIcon={false}
                                        rightIcon={
                                            <>
                                            {lockThirdToggle ?
                                                <Entypo name="eye" size={20} color={Colors.grey} onPress={()=> setThirdToggle(false)}/>
                                            :
                                                <Entypo name="eye-with-line" size={20} color={Colors.grey} onPress={()=> setThirdToggle(true)}/>
                                            }
                                            </>
                                        }
                                        keyboardType={'default'}
                                        autoCapitalize="none"
                                        placeholder="must be 8 character"
                                        value={values.confirmPassword}
                                        onBlur={handleBlur('confirmPassword')}
                                        onChangeText={handleChange('confirmPassword')}
                                        secureTextEntry={lockThirdToggle? true : false}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <Text style={styles.error}>{errors.confirmPassword}</Text>
                                    ) : null}
                                </View>
                            </View>

                            <View style={styles.buttonContainer}>
                                <MainButton
                                    title="Change Password"
                                    loader={user.changePasswordLoading}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
        </View>
    );
};

export default ChangePassword;
