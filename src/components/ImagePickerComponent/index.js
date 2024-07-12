import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import Modal from "react-native-modal/dist/modal";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import styles from "../../screens/HomeAuth/EditProfile/style";
import images from "../../theme/Images";

const ImagePickerComponent = ({ selectedImage, setSelectedImage }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openImageModal = () => setIsModalVisible(true);
  const closeImageModal = () => setIsModalVisible(false);

  useEffect(() => {
    (async () => {
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraPermission.status !== "granted" ||
        mediaLibraryPermission.status !== "granted"
      ) {
        alert("Permission to access camera or media library is required!");
      }
    })();
  }, []);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const croppedImage = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 400, height: 400 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      const file = {
        uri: croppedImage.uri,
        type: "image/jpeg",
        name: croppedImage.uri.split("/").pop(),
      };
      setSelectedImage(file);
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const croppedImage = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 400, height: 400 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      const file = {
        uri: croppedImage.uri,
        type: "image/jpeg",
        name: croppedImage.uri.split("/").pop(),
      };

      setSelectedImage(file);
    }
  };

  const getImageSource = () => {
    if (!selectedImage) {
      return images.uploadPic;
    }

    if (typeof selectedImage === "string") {
      return { uri: selectedImage };
    }

    if (selectedImage.uri) {
      return { uri: selectedImage.uri };
    }

    return images.uploadPic;
  };

  return (
    <View>
      <TouchableOpacity onPress={openImageModal}>
        <Image
          source={getImageSource()}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <Modal
        style={styles.bottomSheet}
        isVisible={isModalVisible}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        backdropOpacity={0.1}
        onBackdropPress={closeImageModal}
      >
        <View style={styles.modalWrapper}>
            <View style={{width:'100%',flexDirection: 'row' ,alignItems : 'center' ,justifyContent: 'space-evenly'}}>
              <TouchableOpacity activeOpacity={0.2} onPress={handleTakePhoto}>
                <Image source={images.CaptureImage} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.2} onPress={handleChoosePhoto}>
                <Image source={images.selectImage} />
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImagePickerComponent;
