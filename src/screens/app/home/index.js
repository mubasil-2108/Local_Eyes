import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';

export default function Home(props) {

  const { navigate, goBack, dispatch } = props.navigation
  const {
    clickedItems,
    handlePressItem,
    data,
    search,
    setSearch,
    handleProductPressItem,
    dummyProductData,
    categories,
    isDrawerOpen,
    statusBarVisible,
    DrawerActions,
    clickedProductItems
  } = useHooks() || {};
  const capitalizeFirstLetter = (categoryName) => {
    return categoryName.toUpperCase();

  };
  console.log(data)
  return (
    <>
      <Wrapper flex={0.94} backgroundColor={colors.appColor1}>
        {/* <ScrollViews.KeyboardAvoiding> */}
        <StatusBars.Dark hidden={!statusBarVisible} backgroundColor={colors.appColor1} />
        <Wrapper
          backgroundColor={colors.appColor1}
          style={{
            // height: responsiveHeight(35),
            // borderBottomLeftRadius: totalSize(3)
          }}>
          <Wrapper>
            
          </Wrapper>
          <Wrapper flexDirectionRow
            justifyContentSpaceBetween
            marginHorizontalMedium
            alignItemsCenter
            style={{ marginTop: responsiveHeight(7) }}>
            <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} onPress={() => dispatch(DrawerActions.openDrawer())}/>
            <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
          </Wrapper>
        </Wrapper>  
        {/* </ScrollViews.KeyboardAvoiding> */}
      </Wrapper>

    </>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderRadius: 50,
    backgroundColor: colors.appBgColor2,
  },
  unSelected: {
    borderRadius: 50,
    backgroundColor: colors.transparent,
    borderWidth: responsiveWidth(0.1),
    borderColor: colors.borderColor1
  },
  selectedText: {
    color: colors.appTextColor3,
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.regular
  },
  unSelectedText: {
    color: colors.appTextColor6,
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.regular
  }
})


