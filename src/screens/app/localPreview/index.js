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

export default function Index(props) {

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
        isMain
        backgroundColor={colors.appColor1}>
        <StatusBars.Dark backgroundColor={colors.appColor1} />
        <Spacer />
        <Wrapper
          marginHorizontalBase
          backgroundColor={colors.appColor1}>
          <Headers.Primary
            onBackPress={() => goBack()}
            showBackArrow
            rightIconSource={appIcons.chevron_left}
            allowText
            textColor={colors.appTextColor9}
            // iconColor={colors.iconColor1}
            title={'Local Profile'}
            titleStyle={{ fontFamily: appFonts.interSemiBold, fontSize: fontSizes.medium }}
            iconContainer={{ flexDirection: 'row' }}
            containerStyle={{ backgroundColor: colors.appColor1 }} />
        </Wrapper>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper marginHorizontalMedium>
            <Wrapper marginHorizontalZero paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4 }}>
              <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                <Wrapper >
                  <Images.SqareRound size={sizes.images.logo} style={{ borderRadius: 10, }} source={appImages.profile1} />
                </Wrapper>
                <Wrapper flex={0.97}>
                  <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor8, fontSize: fontSizes.large }}>John Doe</Text>
                    <Icons.Button isRound buttonColor={colors.buttonColor4} buttonStyle={{ borderColor: colors.buttonBorder5, borderWidth: width(0.3) }} iconColor={colors.iconColor8} buttonSize={sizes.icons.largeXLarge} customIcon={appIcons.messages} iconSize={sizes.icons.mediumSmall} />
                  </Wrapper>
                  <Wrapper alignItemsCenter flexDirectionRow>
                    <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                    <Spacer width={width(1)} />
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>4.9</Text>
                  </Wrapper>
                  <Wrapper flex={1} justifyContentCenter >
                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$165,3{' '}
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/night</Text></Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
              <Wrapper >
                <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.el facilis sint aut sunt voluptatem.</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Expertise</Text>
              <Spacer height={height(1)} />
              <Wrapper justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                <Wrapper marginVerticalTiny style={{ marginRight: width(10) }} flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.book} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Certified Tour Guide</Text>
                </Wrapper>
                {/* <Spacer width={width(15)}/> */}
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.car} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Local with Transport</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.people} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Local Enthusiast</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Additional Offering</Text>
              <Spacer height={height(1)} />
              <Wrapper flex={1} justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Experience</Text>
              <Spacer height={height(1)} />
              <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                <Icons.Custom icon={appIcons.experience} color={colors.iconColor1} size={sizes.icons.xSmall} />
                <Spacer width={width(1)} />
                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>10+ Years with Local eyes</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Unique Local Place</Text>
              <Spacer height={height(1)} />
            </Wrapper>
          </Wrapper>

        </ScrollViews.KeyboardAvoiding>
        <Wrapper background1 paddingVerticalBase paddingHorizontalBase justifyContentSpaceBetween flexDirectionRow>
          <Buttons.ColoredSmall
            // onPress={()=> navigation.navigate(routes.localPreview, {item})}
            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
            textStyle={{textAlign: 'center', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
            buttonStyle={{width:width(40), paddingHorizontal:width(3), paddingVertical:height(1.6), justifyContent: 'center', alignItems: 'center' }}
            text={'Check Availability'} />
             <Buttons.ColoredSmall
              // onPress={()=> navigation.navigate(routes.localPreview, {item})}
                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                textStyle={{textAlign: 'justify', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
                buttonStyle={{width:width(40), paddingHorizontal:width(3),  paddingVertical:height(1.6), justifyContent: 'center', alignItems: 'center' }}
                text={'Book Now'} />
        </Wrapper>

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


