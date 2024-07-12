import React, {useEffect} from "react";
import {
	View,
	Text,
	TouchableOpacity,
  Platform} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from "./homeStack";
import { CalculateStack } from "./calculateStack";
import { SearchStack } from "./searchStack";
import { ProfileStack } from "./myProfileStack";
import { Colors } from "../theme/colors";
import imagePaths from "../utilities/imagePaths";
import ImageWrapper from "../components/image";
import { 
    ProductHighlightIcon,
    ProductGreyIcon,
    SearchHighlightIcon,
    SearchGreyIcon,
    ProfileHighlightIcon,
    ProfileGreyIcon
} from "../assets";

import { Fonts } from "../theme/fonts";

let routeNameParam = null;

const Tab = createBottomTabNavigator();
const renderIcon = (routeName, isFocused) => {
    switch (routeName) {
        case 'HOME':
            return isFocused ? 
                    <ProductHighlightIcon/>
                : 
                    <ProductGreyIcon/>
        case 'VENUES':
            return isFocused ? 
                    <ImageWrapper
                      imagePath={imagePaths.percentBlackIcon}
                      maxWidth={16} maxHeight={20}
                    />
                : 
                    <ImageWrapper
                      imagePath={imagePaths.percentGreyIcon}
                      maxWidth={16} maxHeight={20}
                    />
        case 'SAVED':
            return isFocused ? 
                    <SearchHighlightIcon/>
                : 
                    <SearchGreyIcon/>
      
        case 'PREMIUM':
            return isFocused ? 
                    <ProfileHighlightIcon/>
                : 
                    <ProfileGreyIcon/>
    }
}
const MyTabBar= ({ state, descriptors, navigation })=> {


    return (
      <View
        style={{
          display:routeNameParam === null ? 'flex': 'none',
          flexDirection: 'row',
          height: routeNameParam === null ? 80 :0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:Colors.WHITE,
          paddingVertical:routeNameParam === null ? 15 :100,
          paddingTop:Platform.OS ? routeNameParam === null ? 18 :0 :0,
          paddingBottom:Platform.OS ? routeNameParam === null ? 18: 0 :0,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity:  0.17,
          shadowRadius: 3.05,
          elevation: 8, 
          position:'relative', left:0, right:0, bottom:0, top:0,
          marginBottom:Platform.OS == "ios" ?  0 :0
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
             
            }
          }

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{
                flex:routeNameParam === null ? 1: 0,
                alignItems: 'center',
              }}>
              {renderIcon(route.name, isFocused)}
              <Text
                style={{
                  color: isFocused ? Colors.OFFBLACK : Colors.SECONDARY,
                  fontFamily:isFocused ?  Fonts.medium :Fonts.regular,
                  fontSize:12,
                  lineHeight:17,
                  paddingTop: 3,
                  fontWeight:isFocused ?  "500" :"100",
                  marginTop:5
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
}

export const TabNavigation = (props) => {

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      const resetToFirstTab = () => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'HOME' }],
        });
      };
  
      resetToFirstTab();
    });
    return unsubscribe;
  },[props.navigation])
  
    return(
        <Tab.Navigator
        initialRouteName="HOME"
        screenOptions={{ 
          headerShown: false,
          
        }}
        options={{ tabBarHideOnKeyboard: true }}
        tabBar={props => <MyTabBar {...props} />}
        >
        <Tab.Screen
          name="HOME"
          options={{
            tabBarLabel: 'All Products',
          }}
          component={HomeStack}
        />
        <Tab.Screen
          name="VENUES"
          options={{
            tabBarLabel: 'Calculate',
          }}
          component={CalculateStack}
        />
        <Tab.Screen
          name="SAVED"
          options={{
            tabBarLabel: 'Search',
            tabBarBadge: 100,
          }}
          component={SearchStack}
        />

        <Tab.Screen
          name="PREMIUM"
          options={{
            tabBarLabel: 'Account'
          }}
          component={ProfileStack}
        /> 
      </Tab.Navigator>
    )
};

