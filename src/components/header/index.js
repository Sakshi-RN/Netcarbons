import React, {useState, useEffect} from "react";
import {View, Text, Image, StatusBar, TouchableOpacity, Platform, Dimensions, ActivityIndicator} from "react-native";
import styles from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import ImageWrapper from "../image";
import { Colors } from "../../theme/colors";
import imagePaths from "../../utilities/imagePaths";
import {user} from "../../redux/features/userReducer";
import StatusBarHeight, {getStatusBarHeight} from 'react-native-status-bar-height';
import Config from "../../config";
import { BackIcon, InfiniteIcon } from "../../assets";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({navigation, backIcon, sidetitle, title, centerLogo, rightIcon, searchBar, cancelbtn, drawerIcon, routeParam}) => {
  // const navigation = useNavigation();
  const [profileUrl, setProfileUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
    <StatusBar hidden={false} />
    <View style={[styles.headerWrapper, {
      paddingTop:Platform.OS === "ios" ? getStatusBarHeight() :0
    }]}>
     
      <View style={[styles.header,{
        // borderBottomColor:backIcon? Colors.BLACK : "transparent",
        // borderBottomWidth:1
      }]}>
          <View style={styles.headerRow}>
              {backIcon ?
                <TouchableOpacity style={{marginTop:0}}
                  onPress={() => navigation.goBack()} >
                 <BackIcon/>
                </TouchableOpacity>
                
              :
                <>
                {cancelbtn ?
                <View>
                  {cancelbtn}
                  {/* <Entypo name="menu" size={30} color={Colors.BLACK} 
                    onPress={()=> navigation.toggleDrawer()}
                  /> */}
                </View>
                
                // <Ionicons 
                //   name="menu-outline" 
                //   size={20} 
                //   color={Colors.black} 
                //   // onPress={()=> setLockToggle(false)}
                // />
                  // <ImageWrapper
                  //   imagePath={imagePaths.logo}
                  //   maxWidth={70} maxHeight={42}
                  // />
                : 
                  <>
                    {/* <TouchableOpacity style={styles.profileLoaderWrapper}
                     onPress={() => navigation.toggleDrawer()}
                    >
                    </TouchableOpacity> */}
                  </>
                  // <TouchableOpacity onPress={() => navigation.toggleDrawer()}
                  //   style={{marginBottom:drawerIcon? 4 :0}}
                  // >
                  //   <DrawerIcon/>
                  // </TouchableOpacity>
                }
                </>
              }

              {sidetitle &&
                <View>
                  {sidetitle}
                </View>
              }
            </View>

            {title &&
              <View style={[styles.headerRow, {marginLeft:10}]}>
                <Text style={[styles.welcomeUser]}>
                  {title}
                </Text>
              </View>
            }

            {centerLogo &&
              <View style={[styles.headerRow, {marginLeft:10}]}>
                {centerLogo}
                <Image
                  style={styles.appLogo}
                  source={imagePaths.logoNew}
                />
              </View>
            }
            
            {rightIcon &&
              <View style={styles.headerRight}>
                {rightIcon}
              </View>
            }

            {searchBar &&
              <View style={{width:'86%'}}>
                {searchBar}
              </View>
            }
      </View>
    </View>
    </>
  )
};

export default Header;
