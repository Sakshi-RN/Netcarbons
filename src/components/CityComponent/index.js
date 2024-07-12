import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { City } from "country-state-city";
import { Colors } from '../../theme/colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Fonts } from "../../theme/fonts";

const CityComponent = ({
  isVisible,
  toggleModal,
  onSelectCity,
  selectedCountry,
  selectedState,
}) => {
  const cities = selectedCountry && selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {cities.length === 0 ? (
            <Text style={styles.noDataText}>No cities found</Text>
          ) : (
            <FlatList
              data={cities}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    onSelectCity && onSelectCity(item.name);
                    toggleModal();
                  }}
                >
                  <Text style={styles.cityNameText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          )}
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CityComponent;

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
  cityNameText: {
    fontSize: 16,
    color: Colors.OFFBLACK,
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: Colors.OFFBLACK,
  },
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    color: Colors.DARKRED,
    fontFamily: Fonts.medium
  },
});
