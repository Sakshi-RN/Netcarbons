import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { State } from 'country-state-city';
import { Colors } from '../../theme/colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Fonts } from "../../theme/fonts";

const StateComponent = ({ isVisible, toggleModal, onSelectState, selectedCountry }) => {
  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {states.length === 0 ? (
            <Text style={styles.noDataText}>No states found</Text>
          ) : (
            <FlatList
              data={states}
              keyExtractor={(item) => item.isoCode}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.countryItem}
                  onPress={() => {
                    onSelectState && onSelectState({ isoCode: item.isoCode, name: item.name });
                    toggleModal();
                  }}>
                  <Text style={styles.stateNameText}>{item.name}</Text>
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

export default StateComponent;

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
  stateNameText: {
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
