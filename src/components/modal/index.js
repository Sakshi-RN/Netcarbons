import React from "react";
import {View, Text, Modal, Pressable} from "react-native";
import styles from './style'

const ModalCard = ({modalVisible, setModalVisible, content}) => {
  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
        <View style={styles.centeredView}>
            {content}
        </View>
    </Modal>
  </View>
  );
};

export default ModalCard;
