import React, { useState } from "react";
import { View, Text, Image,ScrollView } from "react-native";
import images from "../../theme/Images";
import styles from "./style";

const ProjectsCard = ({}) => {

    return (
      <View style={styles.orderContainer}>
        
        <View >
          <Text style={styles.orderItemText}>Piedra Wind Farm</Text>
          <ScrollView>
          <Text style={styles.orderDetails}>While this code may be useful, you can improve it by saying why it works, how it works, when it should be used, and what its limitations are.
            Please edit your answer to include explanation </Text>
            </ScrollView>
        </View>
        <Image source={images.orderImg} style={styles.image} />
      </View>

    );
  };

export default ProjectsCard;
