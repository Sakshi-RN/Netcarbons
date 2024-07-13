import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../../theme/colors';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import images from '../../theme/Images'
import { Fonts } from '../../theme/fonts';

const InputField = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    maxLength,
    editable,
    multiline,
    numberOfLines,
    onBlur,
    onFocus,
    label,
    showEditButton,
    onEditButtonClick,
    showDropdownIcon,
    showCalendarIcon,
    onCalendarIconPress,
    errorMessage,
    onDropDownPress,
    showFlag,
    imagePath,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  const [isEditable, setIsEditable] = useState(editable);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };
  
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
      {showFlag && imagePath && <Image source={{ uri: imagePath }} style={styles.flagImage} />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.grey}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {secureTextEntry && (
          <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
            <Entypo
              name={isPasswordVisible ? 'eye' : 'eye-with-line'}
              size={20}
              color={Colors.OFFBLACK}
            />
          </TouchableOpacity>
        )}
        {showEditButton && (
          <TouchableOpacity
            style={styles.editIconContainer}
            onPress={onEditButtonClick}
          >
            <Image source={images.editButton} />
          </TouchableOpacity>
        )}
        {showDropdownIcon && (
          <TouchableOpacity style={styles.iconContainer} onPress={onDropDownPress}>
            <Entypo name="triangle-down" size={20} color={Colors.OFFBLACK} />
          </TouchableOpacity>
        )}
        {showCalendarIcon && (
          <TouchableOpacity style={styles.iconContainer} onPress={onCalendarIconPress}>
            <Entypo name="calendar" size={15} color={Colors.OFFBLACK} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: responsiveFontSize(2),
    color: Colors.OFFBLACK,
    fontFamily:Fonts.medium
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: responsiveHeight(8),
    marginVertical: 10,
    borderColor: Colors.lightgrey,
    borderWidth: 1.3,
  },
  input: {
    flex: 1,
  },
  flagImage: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  editIconContainer: {
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    fontSize: responsiveFontSize(1.5),
    marginTop: 5,
  },
});

export default InputField;
