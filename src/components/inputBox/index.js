import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import styles from './styles'
import {Colors } from '../../theme/colors'

// create a component
export const InputBox = ({
  placeholder = '',
  value,
  onChange,
  onPressOut,
  onTouchEndCapture,
  onBlur,
  onChangeText,
  style = {},
  numberOfLines,
  multiline = false,
  // multiline = true,
  inputBoxStyle = {},
  leftIcon,
  onRightIconPress,
  rightIcon,
  rightComponentText,
  secureTextEntry,
  editable,
  // editable = true,
  isDescriptionBox = false,
  keyboardType = 'default',
  textAlignVertical,
  ...rest
}) => {
  
  return (
    <View
      style={[
        styles.inputContainer,
        style,
        isDescriptionBox ? styles.descriptionBox : undefined,
        opacity = value == "" ? 0.7 : 0,
      ]}
    >
      {leftIcon && (
        <TouchableOpacity
          activeOpacity={value == "" ? 1 : 0}
          style={[
            styles.leftIcon,
            isDescriptionBox
              ? { height: 120, justifyContent: 'flex-start', paddingTop: 1 }
              : undefined,
          ]}
        >
          {leftIcon}
        </TouchableOpacity>
      )}
    
      <TextInput
        onBlur={onPressOut}
        editable={editable}
        style={[
          styles.inputBox,
          inputBoxStyle,
          isDescriptionBox ? { height: 120, paddingTop: 12 } : undefined,
        ]}
        value={value}
        onChange={onChange}
        onSubmitEditing={onPressOut}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.GREY}
        color={Colors.GREY}
        autoCorrect={false}
        keyboardType={keyboardType} 
        textAlignVertical={textAlignVertical}
        onTouchEndCapture={onTouchEndCapture}
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          activeOpacity={value == "" ? 1 : 0}
          style={[
            styles.rightIcon,
            isDescriptionBox ? { height: 120 } : undefined,
          ]}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
      {rightComponentText && (
        <TouchableOpacity
          onPress={onRightIconPress}
          activeOpacity={1}
          style={[styles.rightIcon, styles.rightText]}
        >
          <Text>{rightComponentText}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
