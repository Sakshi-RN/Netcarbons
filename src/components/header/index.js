import React, { useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";
import imagePaths from "../../utilities/imagePaths";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { BackIcon } from "../../assets";

const Header = ({ navigation, backIcon, sidetitle, title, centerLogo, rightIcon, searchBar, cancelbtn }) => {


  return (
    <>
      <StatusBar hidden={false} />
      <View style={[styles.headerWrapper, {
        paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0
      }]}>

        <View style={styles.header}>
          <View style={styles.headerRow}>
            {backIcon ?
              <TouchableOpacity style={{ marginTop: 0 }}
                onPress={() => navigation.goBack()} >
                <BackIcon />
              </TouchableOpacity>

              :
              <>
                {cancelbtn ?
                  <View>
                    {cancelbtn}

                  </View>
                  :
                  <>
                  </>

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
            <View style={[styles.headerRow, { marginLeft: 10 }]}>
              <Text style={[styles.welcomeUser]}>
                {title}
              </Text>
            </View>
          }

          {centerLogo &&
            <View style={[styles.headerRow, { marginLeft: 10 }]}>
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
            <View style={{ width: '86%' }}>
              {searchBar}
            </View>
          }
        </View>
      </View>
    </>
  )
};

export default Header;
