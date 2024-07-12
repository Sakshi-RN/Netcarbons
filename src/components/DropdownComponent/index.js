import React from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../../screens/HomeAuth/EditProfile/style';
import { Colors } from '../../theme/colors';

const DropdownComponent = ({ data, selectedValue, isFocus, setIsFocus, handleChange, placeholder,label }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: Colors.OFFBLACK },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={selectedValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        renderRightIcon={() => (
          <View style={styles.iconStyle}>
            <Entypo
              name="triangle-down"
              size={20}
              color={Colors.OFFBLACK}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DropdownComponent;
