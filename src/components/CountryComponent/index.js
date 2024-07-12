import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { Country } from "country-state-city";
import { Colors } from '../../theme/colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CountryComponent = ({ isVisible, toggleModal, onSelectCountry }) => {
  const countries = Country.getAllCountries().map((country) => ({
    isoCode: country.isoCode,
    name: country.name,
    flag: country.flag,
  }));

  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.isoCode}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelectCountry({ isoCode: item.isoCode, name: item.name })}>
                <View style={styles.countryItem}>
                  <Text style={styles.flagText}>{item.flag}</Text>
                  <Text style={styles.countryNameText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CountryComponent;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveHeight(3),
  },
  modalContainer: {
    width: '80%',
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
    maxHeight: '90%',
    justifyContent: 'center',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  },
  flagText: {
    fontSize: 18,
    color: "black",
  },
  countryNameText: {
    fontSize: 16,
    color: Colors.OFFBLACK,
    fontWeight: 'bold',
    width: responsiveWidth(43),
  },
  closeText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: Colors.OFFBLACK,
  },
});
