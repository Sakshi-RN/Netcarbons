import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import images from '../../../theme/Images';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import { Colors } from '../../../theme/colors';

const OrderDetails = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const OrderItemInfoCard = () => {
    return (
      <View style={styles.certificateContainer}>
        <View style={styles.imageWrapper}>
          <Image source={images.orderImg} style={styles.image} />
        </View>
        <View>
        <Text style={styles.descriptionTitle}>Certificate:</Text>
        <Text style={styles.descriptionTitle}>1234 5678 9876</Text>
        <Text style={styles.descriptionTitle}>2022-08-29</Text>
        <Text style={styles.descriptionTitle}>Carbon offset quantity: 2 </Text>
        <Text style={styles.descriptionTitle}>Project XYZ</Text>
        <Text style={styles.description}>
              The purpose of the project activity is to set up a 119.8 MW Natural
              Gas based Combined Cycle Power Plant (CCPP) and export these natural
              gases and all the stuff.
            </Text>
            </View>
      </View>
    );
  };

  const OrderDetails = () => {

    return (
      <View>
        <View style={[styles.flexRowJB, styles.mv05]}>
          <View style={styles.flexRowJB}>
            <Text style={styles.infoTitles}>Order #: </Text>
            <Text style={styles.infoValues}>10000001234</Text>
          </View>
          <View style={styles.flexRowJB}>
            <Image source={images.pdf} />
            <Text style={styles.download}>Download</Text>
          </View>
        </View>
        <View style={[styles.flexRowJB, styles.mv05]}>
          <View style={styles.flexRow}>
            <Text style={styles.infoTitles}>Date: </Text>
            <Text style={styles.infoValues}>2022-12-25</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.infoTitles}>Time:</Text>
            <Text style={styles.infoValues}>15:45 EST (UTC-5)</Text>
          </View>
        </View>
      </View>

    );
  };
  const renderPurchaseOrder = () => {
    return (
      <View style={styles.purchaseOrderContainer}>
          <View style={styles.purchaseOrderDetails}>
        <View style={styles.row}>
          <Text style={styles.labelText}>Order Total:</Text>
          <Text style={styles.valueText}>$15.00</Text>
        </View>
        <View style={styles.line}/>
        <Text style={styles.detailText}>Label name: Value</Text>
          <Text style={styles.detailText}>Order #: 1234 5678 9012</Text>
          <Text style={styles.detailText}>Email ID: ameya.pai@gmail.com</Text>
          <Text style={styles.detailText}>Label name: Value</Text>
          </View>
          <Text style={styles.labelText}>Subscription Term </Text>
          <Text style={styles.detailText}>Label name: Value</Text>
          <Text style={styles.detailText}>Order #: 1234 5678 9012</Text>
          <Text style={styles.detailText}>Email ID: ameya.pai@gmail.com</Text>
          
      
      </View>
    )
  }

  const renderButtons =()=>{
    return(
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.manageButton}>
      <Entypo name="cog" size={20} color={Colors.OFFBLACK}style={styles.buttonIcon} />
      <Text style={[styles.buttonText,{color:Colors.OFFBLACK}]}>Manage Subscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
      <Entypo name="cross" size={20} color={Colors.WHITE}style={styles.buttonIcon} />
      <Text style={styles.buttonText}>Cancel Subscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reviewButton}>
        <Entypo name="pencil" size={20} color={Colors.WHITE}style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Write a Product Review</Text>
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <CommonHeader
        title="Order Details"
        onBackPress={handleBackPress}
        showCancelBtn={true}
      />
      <ScrollView style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
        {OrderDetails()}
        {OrderItemInfoCard()}
        {renderPurchaseOrder()}
        {renderButtons()}
      </ScrollView>
 
    </View>
  );
};
export default OrderDetails;
