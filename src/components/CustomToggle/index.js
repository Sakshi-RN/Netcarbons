import React from 'react';
import { TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { colors } from 'react-native-swiper-flatlist/src/themes';

const CustomToggle = ({ value, onValueChange }) => {
  const translateX = new Animated.Value(value ? 20 : 0);

  const toggleSwitch = () => {
    const toValue = value ? 0 : 20;
    Animated.timing(translateX, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onValueChange(!value);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch} style={[styles.container, value ? styles.containerOn : styles.containerOff]}>
      <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 21,
    borderRadius: 20,
    padding: 2,
    justifyContent: 'center',
  },
  containerOn: {
    backgroundColor:Colors.OFFBLACK,
  },
  containerOff: {
    backgroundColor:Colors.lightgrey,
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 20,
    backgroundColor:Colors.WHITE,
  },
});

export default CustomToggle;
