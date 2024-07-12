import React, {useState, useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View, Text, Dimensions, StyleSheet, Image, Platform, Alert} from "react-native";
import ImageWrapper from "../components/image";
import { TabNavigation } from "./tabsNavigation";
import { 
  createDrawerNavigator , 
  DrawerContentScrollView, 
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Colors } from "../theme/colors";
import imagePaths from "../utilities/imagePaths";
import { Fonts } from "../theme/fonts";
import { 
  LogoIcon, 
  RefreshIcon, 
  PlusIcon,
  DiscoverBlackIcon,
  LearnBlackIcon,
  WalletBlackIcon,
  ChatBlackIcon,
  DiscoverHighlightIcon,
  LearnHighlightIcon,
  WalletHighlightIcon,
  ChatHighlightIcon,
  LogoutIcon
} from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { confirmAlert } from "../utilities/helpers";
import Saved from "../screens/HomeAuth/Saved";
import Profile from "../screens/HomeAuth/Profile";
import Upcoming from "../screens/HomeAuth/Upcoming";
import Brands from "../screens/HomeAuth/Brands";
import Hearts from "../screens/HomeAuth/Hearts";
import Chocolates from "../screens/HomeAuth/Chocolates";
import Chat from "../screens/HomeAuth/Chat";
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerNavigation = (props) => {
  const navigation = useNavigation();
  const [profileIconShow, setProfileIconShow] = useState(true);
  const [firstToggle, setFirstToggle] = useState(true);
  const [secondToggle, setSecondToggle] = useState(false);
  const [thirdToggle, setThirdToggle] = useState(false);
  const [fourthToggle, setFourthToggle] = useState(false);

  const logoutUser = async()=>{
    let alertData = {
      title:"Logout",
      message : 'Are you sure you want to logout?',
      ok : 'Yes',
      cancel : 'No',
      callBack : async () => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
          if (Platform.OS === 'android') {
            await AsyncStorage.removeItem("loginData");
            await AsyncStorage.removeItem("loginUser");
            await AsyncStorage.clear();
          }else if (Platform.OS === 'ios') {
            await AsyncStorage.multiRemove(asyncStorageKeys);
          }
        }
        navigation.navigate("Welcome")
      }
    }
    confirmAlert(alertData)
  }
  return(
      <Drawer.Navigator 
        initialRouteName="Home"
        // headerShown screenOptions={{ headerShown: false }}
        drawerContent={(props) => 
          <DrawerContentScrollView {...props}>
            <View style={styles.sideMenuHeader}>
                <View style={styles.headerRow}>
                  <View style={styles.logoWrapper}>
                    <LogoIcon/>
                  </View>

                  <View style={styles.profileWrapper}>
                  
                    <TouchableOpacity
                      style={styles.profileImageWrapper}
                      onPress={()=> {
                        props.navigation.closeDrawer();
                        navigation.navigate("Profile")
                      }}
                    >
                      
                      <ImageWrapper
                        imagePath={imagePaths.profileIcon}
                        maxWidth={45} maxHeight={45}
                      />
                    </TouchableOpacity>
                    
                    <View style={{marginLeft:10}}>
                      <Text style={styles.profileNameText}>King</Text>
                      <Text style={styles.copyText}>Copy NetworkSync</Text>
                    </View>
                  </View>

                  <View></View>
                  <View></View>

                  <View style={styles.resfreshWrapper}>
                    <TouchableOpacity style={styles.refreshButton}>
                      <RefreshIcon/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                      <PlusIcon/>
                    </TouchableOpacity>
                  
                  </View>
                  
                </View>

                <View style={styles.menuListWrapper}>
                    <View style={styles.menuIconsLeft}>
                      <View style={{flexDirection:'column', marginTop:5}}>
                        <TouchableOpacity style={[styles.iconWrapper, {
                          shadowColor: firstToggle && "#000000",
                          shadowOffset: {
                          width: firstToggle &&  0,
                          height: firstToggle &&  3,
                          },
                          shadowOpacity: firstToggle &&  0.17,
                          shadowRadius: firstToggle && 3.05,
                          elevation:firstToggle ? 5 : 0
                        }]}
                          onPress={()=> {
                            setFirstToggle(true)
                            setSecondToggle(false)
                            setThirdToggle(false)
                            setFourthToggle(false)
                          }}
                        >
                          {firstToggle ? <DiscoverHighlightIcon/> : <DiscoverBlackIcon/>}
                        </TouchableOpacity>
                        
                        {/* <TouchableOpacity style={[styles.iconWrapper, {
                          shadowColor: secondToggle && "#000000",
                          shadowOffset: {
                          width: secondToggle &&  0,
                          height: secondToggle &&  3,
                          },
                          shadowOpacity: secondToggle &&  0.17,
                          shadowRadius: secondToggle && 3.05,
                          elevation:secondToggle ? 5 : 0
                        }]}
                          onPress={()=> {
                            setFirstToggle(false)
                            setSecondToggle(true)
                            setThirdToggle(false)
                            setFourthToggle(false)
                          }}
                        >
                          {secondToggle ?  <LearnHighlightIcon/>: <LearnBlackIcon/> }
                        </TouchableOpacity> */}
                      
                      <TouchableOpacity style={[styles.iconWrapper, {
                          shadowColor: thirdToggle && "#000000",
                          shadowOffset: {
                          width: thirdToggle &&  0,
                          height: thirdToggle &&  3,
                          },
                          shadowOpacity: thirdToggle &&  0.17,
                          shadowRadius: thirdToggle && 3.05,
                          elevation:thirdToggle ? 5 : 0
                      }]}
                          onPress={()=> {
                            setFirstToggle(false)
                            setSecondToggle(false)
                            setThirdToggle(true)
                            setFourthToggle(false)
                          }}
                      >
                          {thirdToggle ? <WalletHighlightIcon/> : <WalletBlackIcon/> }
                      </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.iconWrapper, {
                            shadowColor: fourthToggle && "#000000",
                            shadowOffset: {
                            width: fourthToggle &&  0,
                            height: fourthToggle &&  3,
                            },
                            shadowOpacity: fourthToggle &&  0.17,
                            shadowRadius: fourthToggle && 3.05,
                            elevation:fourthToggle ? 5 : 0
                        }]}
                          onPress={()=> {
                            setFirstToggle(false)
                            setSecondToggle(false)
                            setThirdToggle(false)
                            setFourthToggle(true)
                          }}
                        >
                          {fourthToggle ? <ChatHighlightIcon/> :<ChatBlackIcon/> } 
                        </TouchableOpacity>

                        
                      </View>
                      <TouchableOpacity style={[styles.iconWrapper, {
                        marginTop:Platform.OS == "ios" ?
                          Dimensions.get('window').height - 420
                          :
                          Dimensions.get('window').height - 365
                        }]}
                          onPress={()=> logoutUser()}
                          // onPress={()=> {props.navigation.navigate("Welcome")}}
                        >
                          <LogoutIcon/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuLabelRight}>
                        <View style={styles.discoverMenu}>

                          {firstToggle &&
                            <>
                              <TouchableOpacity>
                                <Text style={styles.discoverText}>Discover</Text>
                              </TouchableOpacity>
                              
                              <DrawerItemList {...props}  activeBackgroundColor={Colors.GREY} />
                              {/* <TouchableOpacity style={styles.labelButton}
                              onPress={()=>props.navigation.navigate("Home")}
                              >
                                <Text style={styles.labelText}>Dates</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.labelButton}
                                onPress={()=>props.navigation.navigate("Upcoming")}
                              >
                                <Text style={styles.labelText}>Upcoming</Text>
                              </TouchableOpacity> */}

                              {/* <TouchableOpacity style={styles.labelButton}
                                onPress={()=>props.navigation.navigate("Brands")}
                              >
                                <Text style={styles.labelText}>Brands</Text>
                              </TouchableOpacity> */}
                            </>
                          }  

                          {/* {secondToggle &&
                            <>
                              <TouchableOpacity>
                                <Text style={styles.discoverText}>Learn</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Feed</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Library</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Bookmarks</Text>
                              </TouchableOpacity>
                            </>
                          }      */}

                          {thirdToggle &&
                            <>
                              <TouchableOpacity>
                                <Text style={styles.discoverText}>Wallet</Text>
                              </TouchableOpacity>

                              {/* <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Buy Hearts</Text>
                              </TouchableOpacity> */}

                              <DrawerItemList {...props}  activeBackgroundColor={Colors.GREY} />


                              {/* <TouchableOpacity style={styles.labelButton}
                                onPress={()=>props.navigation.navigate("Hearts")}
                              >
                                <Text style={styles.labelText}>Transactions (Hearts)</Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={styles.labelButton}
                                onPress={()=>props.navigation.navigate("Chocolates")}
                              >
                                <Text style={styles.labelText}>Points (Chocolates)</Text>
                              </TouchableOpacity> */}
                            </>
                          }   

                          {fourthToggle &&
                            <>
                              <TouchableOpacity>
                                <Text style={styles.discoverText}>Chat</Text>
                              </TouchableOpacity>

                              <DrawerItemList {...props}  activeBackgroundColor={Colors.GREY} />

                              {/* <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>DM’s</Text>
                              </TouchableOpacity> */}

                              {/* <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Support</Text>
                              </TouchableOpacity> */}

                              {/* <TouchableOpacity style={styles.labelButton}>
                                <Text style={styles.labelText}>Bot</Text>
                              </TouchableOpacity> */}
                            </>
                          } 
                        </View>
                    </View>
                </View>
            </View>
            {/* <DrawerItemList {...props}  activeBackgroundColor={Colors.GREY} /> */}
          </DrawerContentScrollView>
      }
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor:Colors.WHITE,
            width: 320,
            // paddingHorizontal:10,
            // height:Dimensions.get('window').height
          },
          drawerActiveBackgroundColor:Colors.WHITE, 
          drawerInactiveBackgroundColor:"transparent",
          drawerItemStyle:{
            width:400,
            marginLeft:-10,  
            margin:0,
          },
          drawerLabelStyle:{
            // width:360,
            color:Colors.BLACK,
            fontFamily:Fonts.semiBold,
            fontSize:18,
            lineHeight:24.38,
            letterSpacing:-0.3,
            fontWeight:'400'
            // marginLeft:-10
          }
        }}
      >

        {firstToggle && !secondToggle && !thirdToggle  && !fourthToggle &&
          <Drawer.Screen name="Discover" 
            component={TabNavigation} 
            options={{
              title: 'Dates',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }

        {firstToggle && !secondToggle && !thirdToggle  && !fourthToggle &&
          <Drawer.Screen name="Upcoming" 
            component={Upcoming}
            options={{
              title: 'Upcoming',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }

        {/* {firstToggle && !secondToggle && !thirdToggle  && !fourthToggle &&
          <Drawer.Screen name="Brands" 
            component={Brands}
            options={{
              title: 'Brands',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        } */}

        {!firstToggle && !secondToggle && !fourthToggle &&
          <Drawer.Screen name="Hearts" 
            component={Hearts}
            options={{
              title: 'Transactions (Hearts)',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }

        {!firstToggle && !secondToggle && !fourthToggle &&
          <Drawer.Screen name="Chocolates" 
            component={Chocolates}
            options={{
              title: 'Points (Chocolates)',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }
        
        {!firstToggle && !secondToggle && !thirdToggle &&
          <Drawer.Screen name="DM's" 
            component={Chat}
            options={{
              title: `DM's`,
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }

        {!firstToggle && !secondToggle && !thirdToggle &&
          <Drawer.Screen name="Support" 
            component={Chat}
            options={{
              title: 'Support',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                color:Colors.black,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }   

        {profileIconShow &&
          <Drawer.Screen name="Profile" 
            component={Profile}
            options={{
              title: 'Profile',
              drawerLabelStyle: {
                color: 'transparent',
                fontSize:18,
                lineHeight:24.38,
                fontFamily:Fonts.regular,
                fontWeight:'100'
              }
            }}
          />
        }

        <Drawer.Screen name="Saved" 
          component={Saved}
          options={{
            title: 'Saved',
            drawerLabelStyle: {
              color: 'transparent',
            }
          }}
        />


      </Drawer.Navigator>
  )
};

const styles = StyleSheet.create({
  sideMenuHeader:{
    flexDirection:'column',
    paddingHorizontal:15
  },
  headerRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // height:50,
    // paddingVertical:10,
    borderBottomColor:Colors.LIGHTGREYOFF,
    borderBottomWidth:1
  },
  profileWrapper:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    borderLeftColor:Colors.LIGHTGREYOFF,
    borderLeftWidth:1,
    paddingLeft:10,
    paddingVertical:10
  },
  profileImageWrapper:{
    width:45,
    height:45
  },
  resfreshWrapper:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  refreshButton:{
    marginRight:10
  },
  profileNameText:{
    fontSize:20,
    lineHeight:26.82,
    color:Colors.black,
    fontFamily:Fonts.medium
  },
  copyText:{
    fontSize:11,
    lineHeight:13.41,
    color:Colors.DARKGREY,
    fontFamily:Fonts.medium
  },
  menuListWrapper:{
    flexDirection:'row',
    width:'100%',
    // backgroundColor:'red'
  },
  menuIconsLeft:{
    width:'19.6%',
    borderRightColor:Colors.LIGHTGREYOFF,
    borderRightWidth:1,
    height:Dimensions.get('window').height -100,
    // backgroundColor:'red',
    position:'relative'
  },
  menuLabelRight:{
    width:'80%'
  },
  iconWrapper:{
    marginVertical:10,
    // justifyContent:'center',
    alignItems:'center',
    height:50,
    width:50,
    backgroundColor:'#fff',
    justifyContent:'center',
    borderRadius:10,
    
  },
  discoverMenu:{
    flexDirection:'column',
    paddingHorizontal:20
  },
  discoverText:{
    fontSize:35,
    lineHeight:75,
    color:Colors.black,
    fontFamily:Fonts.regular
  },
  labelText:{
    fontSize:18,
    lineHeight:24.38,
    color:Colors.black,
    fontFamily:Fonts.regular
  },
  labelButton:{
    marginVertical:15
  },
  drawerItem: {
    backgroundColor:Colors.white,
    marginLeft:-10,  
  },
  drawerLabel: {
    color:Colors.BLACK,
    fontFamily:Fonts.semiBold,
    fontSize:18,
    lineHeight:24.38,
    letterSpacing:-0.3,
    fontWeight:'400'
  },
});

