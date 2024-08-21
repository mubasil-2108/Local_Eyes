import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons } from '../../../components';
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
    statusBarVisible,
    DrawerActions,
    clickedProductItems
  } = useHooks() || {};
  const capitalizeFirstLetter = (categoryName) => {
    return categoryName.toUpperCase();

  };
  console.log(data)
  const imageData = [
    { id: '1', source: appIcons.nearBy, text: 'Nearby', isNearby: true },
    { id: '2', source: appImages.Location1, text: 'Prague' },
    { id: '3', source: appImages.Location2, text: 'Brno' },
    { id: '4', source: appImages.Location3, text: 'Pilsen' },
    { id: '5', source: appImages.Location4, text: 'Ostrava' },

    // Add more items here
  ];
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
              iconContainer={{ left: width(34) }}
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
          <Wrapper marginVerticalSmall marginHorizontalSmall paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4, flexWrap: 'wrap' }}>
            <Wrapper justifyContentSpaceBetween flexDirectionRow>
              <Wrapper >
                <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoWidth }} source={appImages.profile1} />
              </Wrapper>
              <Wrapper style={{ width: responsiveWidth(51) }}>
                <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                  <Buttons.ColoredSmall
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5, fontSize: fontSizes.small }}
                    buttonStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: width(1), paddingHorizontal: width(1.5) }}
                    text={'View Profile'} />
                </Wrapper>
                <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                </Wrapper>
                <Wrapper flex={1} justifyContentCenter >
                  <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                    <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                </Wrapper>

                <Wrapper justifyContentFlexend>
                  <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                    <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

            </Wrapper>
            {/* <Spacer/> */}
            <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
            <Wrapper  flexDirectionRow style={{ flexWrap: 'wrap' }}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Certified Tour Guide</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local with Transport</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >10+ Year Local</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local Enthusiast</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
            </Wrapper>
          </Wrapper>
          <Wrapper marginVerticalSmall marginHorizontalSmall paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4, flexWrap: 'wrap' }}>
            <Wrapper justifyContentSpaceBetween flexDirectionRow>
              <Wrapper >
                <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoWidth }} source={appImages.profile1} />
              </Wrapper>
              <Wrapper style={{ width: responsiveWidth(51) }}>
                <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                  <Buttons.ColoredSmall
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5, fontSize: fontSizes.small }}
                    buttonStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: width(1), paddingHorizontal: width(1.5) }}
                    text={'View Profile'} />
                </Wrapper>
                <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                </Wrapper>
                <Wrapper flex={1} justifyContentCenter >
                  <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                    <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                </Wrapper>

                <Wrapper justifyContentFlexend>
                  <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                    <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

            </Wrapper>
            {/* <Spacer/> */}
            <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
            <Wrapper  flexDirectionRow style={{ flexWrap: 'wrap' }}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Certified Tour Guide</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local with Transport</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >10+ Year Local</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local Enthusiast</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
            </Wrapper>
          </Wrapper>
          <Wrapper marginVerticalSmall marginHorizontalSmall paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4, flexWrap: 'wrap' }}>
            <Wrapper justifyContentSpaceBetween flexDirectionRow>
              <Wrapper >
                <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoWidth }} source={appImages.profile1} />
              </Wrapper>
              <Wrapper style={{ width: responsiveWidth(51) }}>
                <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                  <Buttons.ColoredSmall
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5, fontSize: fontSizes.small }}
                    buttonStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: width(1), paddingHorizontal: width(1.5) }}
                    text={'View Profile'} />
                </Wrapper>
                <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                </Wrapper>
                <Wrapper flex={1} justifyContentCenter >
                  <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                    <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                </Wrapper>

                <Wrapper justifyContentFlexend>
                  <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                    <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>

            </Wrapper>
            {/* <Spacer/> */}
            <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
            <Wrapper  flexDirectionRow style={{ flexWrap: 'wrap' }}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Certified Tour Guide</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(3),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local with Transport</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >10+ Year Local</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                style={{
                  padding: 0.5, // Border width
                  borderRadius: 30,
                  margin: width(0.1),
                  marginEnd:width(1),
                  marginBottom: height(0.5)
                }}
              >
                <LinearGradient
                  colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 28,
                    padding: 1,
                  }}
                >
                  <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regularSmall }} >Local Enthusiast</Text>
                  </Wrapper>
                </LinearGradient>
              </LinearGradient>
            </Wrapper>
          </Wrapper>
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


