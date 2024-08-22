import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

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
    imageData,
    statusBarVisible,
    DrawerActions,
    clickedProductItems
  } = useHooks() || {};
  
  return (
    <>
      <Wrapper
        flex={0.915}
        backgroundColor={colors.appColor1}>
        <StatusBars.Dark hidden={!statusBarVisible} backgroundColor={colors.appColor1} />
        <Spacer />
        <Wrapper
          backgroundColor={colors.appColor1}>
          <Wrapper flexDirectionRow
            justifyContentSpaceBetween
            marginHorizontalMedium
            alignItemsCenter
            style={{ marginTop: responsiveHeight(7) }}>
            <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} onPress={() => dispatch(DrawerActions.openDrawer())} />
            <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.large }}>Home</Text>
            <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
          </Wrapper>
          <Spacer />
          <TextInputs.SearchBar
            value={search}
            onChangeText={(text) => setSearch(text)}
            customIconRight={appIcons.equalizer}
            iconColorRight={colors.iconColor6}
            iconSizeRight={sizes.icons.mediumSmall}
            iconStyleRight={{ right: width(4) }}
            iconStyleLeft={{ marginLeft: width(1) }}
            keyboardType={'default'}
            inputContainerStyle={{
              borderColor:
                colors.inputTextBorder,
              borderRadius: totalSize(2.5),
              backgroundColor: colors.inputfieldColor2,
            }}
            inputStyle={{
              fontSize: fontSizes.regular,
              fontFamily: appFonts.appTextRegular,
              color: colors.appTextColor1
            }}
            placeholder={'Search City, Town'}
            placeholderTextColor={colors.placeHolderColor2}
          />
        </Wrapper>
        <ScrollViews.KeyboardAvoiding>
          <Spacer/>
          <Wrapper marginHorizontalMedium>
          <LocationLists data={imageData} />
            <Spacer />
            <Buttons.Colored
              // onPress={() => handleResetPassword()}
              buttonStyle={{ marginHorizontal: 0 }}
              text={'Plan My Trip'}
              gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
              textStyle={{
                color: colors.appTextColor5,
                fontFamily: appFonts.interSemiBold,
                fontSize: fontSizes.regular,
              }} />
            <Spacer />
            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.large, color: colors.appTextColor6 }}>Top- Rated Locals</Text>
            <Spacer height={height(1)} />
          </Wrapper>
          <LocalsList data={data}/> 

        </ScrollViews.KeyboardAvoiding>
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


