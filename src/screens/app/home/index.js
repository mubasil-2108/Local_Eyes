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
  const [showCountdown, setShowCountdown] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10,
  });
  const { days, hours, minutes, seconds } = timeRemaining;
  // Countdown timer logic
  useEffect(() => {
    let timer;

    const updateCountdown = () => {
      setTimeRemaining(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setShowCountdown(false); // Hide countdown when finished
          return prevTime;
        }

        let newDays = days, newHours = hours, newMinutes = minutes, newSeconds = seconds;

        if (seconds > 0) {
          newSeconds--;
        } else if (minutes > 0) {
          newSeconds = 59;
          newMinutes--;
        } else if (hours > 0) {
          newMinutes = 59;
          newSeconds = 59;
          newHours--;
        } else if (days > 0) {
          newHours = 23;
          newMinutes = 59;
          newSeconds = 59;
          newDays--;
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    };

    timer = setInterval(updateCountdown, 1000);

    // Cleanup timer when component unmounts
    return () => clearInterval(timer);
  }, []);


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

  const renderStyle = () => {
    return (
      <Wrapper style={{ backgroundColor: colors.appColor9, borderRadius: sizes.cardRadius }}>

      </Wrapper>
    )
  }
  return (
    <>
      <StatusBars.Dark backgroundColor={colors.appColor1} />
      <Spacer isStatusBarHeigt />
      <Wrapper
        flex={0.915}
        backgroundColor={colors.appColor1}>
        <Wrapper
          backgroundColor={colors.appColor1}>
          <Wrapper flexDirectionRow
            justifyContentSpaceBetween
            marginHorizontalMedium
            alignItemsCenter
            style={{ marginTop: responsiveHeight(4) }}>
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
          <Spacer isSmall/>
        </Wrapper>
        <ScrollViews.KeyboardAvoiding>
          <Spacer />
          <Wrapper marginHorizontalMedium>
            <LocationLists data={imageData} />
            {!showCountdown ?
              (
                <>
                  <Spacer />
                  <Buttons.Colored
                    onPress={() => navigate(routes.tripPlan)}
                    buttonStyle={{ marginHorizontal: 0 }}
                    text={'Plan My Trip'}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                      color: colors.appTextColor5,
                      fontFamily: appFonts.appTextMedium,
                      fontSize: fontSizes.regular,
                    }} />
                  <Spacer />
                  <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.large, color: colors.appTextColor6 }}>Top- Rated Locals</Text>
                  <Spacer height={height(1)} />
                </>
              )
              :
              null
            }

          </Wrapper>
          {showCountdown ?
            <>
              <Spacer isSmall />
              <Wrapper marginHorizontalBase>
                <Wrapper alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h4_small, color: colors.appTextColor2 }}>TIME REMAINING</Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper justifyContentSpaceBetween paddingHorizontalSmall backgroundColor={colors.appColor5} paddingVerticalSmall alignItemsCenter style={{ borderRadius: sizes.cardRadius }} flexDirectionRow>
                  <Wrapper style={{ width: width(19), }} >
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper alignItemsCenter justifyContentCenter style={{
                      ...StyleSheet.absoluteFillObject,
                    }}>
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{days}</Text>
                      <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                    </Wrapper>
                  </Wrapper>
                  <Wrapper>
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                  </Wrapper>
                  <Wrapper style={{ width: width(19), }} >
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper alignItemsCenter justifyContentCenter style={{
                      ...StyleSheet.absoluteFillObject,
                    }}>
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{hours}</Text>
                      <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                    </Wrapper>
                  </Wrapper>
                  <Wrapper>
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                  </Wrapper>
                  <Wrapper style={{ width: width(19), }} >
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper alignItemsCenter justifyContentCenter style={{
                      ...StyleSheet.absoluteFillObject,
                    }}>
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{minutes}</Text>
                      <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                    </Wrapper>
                  </Wrapper>
                  <Wrapper>
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                  </Wrapper>
                  <Wrapper style={{ width: width(19), }} >
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                      <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                    </Wrapper>
                    <Wrapper alignItemsCenter justifyContentCenter style={{
                      ...StyleSheet.absoluteFillObject,
                    }}>
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{seconds}</Text>
                      <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalSmall justifyContentSpaceBetween flexDirectionRow>
                  <Wrapper alignItemsCenter style={{ width: width(19), }} >
                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Days</Text>
                  </Wrapper>
                  <Wrapper alignItemsCenter style={{ width: width(19), }} >
                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Hours</Text>
                  </Wrapper>
                  <Wrapper alignItemsCenter style={{ width: width(19), }}>
                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Mins</Text>
                  </Wrapper>
                  <Wrapper alignItemsCenter style={{ width: width(19), }} >
                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Secs</Text>
                  </Wrapper>
                </Wrapper>
                <Spacer />
                <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                  <Wrapper justifyContentSpaceBetween flexDirectionRow>
                    <Wrapper >
                      <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={appImages.profile1} />
                    </Wrapper>
                    <Spacer isSmall horizontal />
                    <Wrapper flex={1}>
                      <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                        <Wrapper marginHorizontalZero paddingVerticalTiny isBorderedWrapper backgroundColor={colors.appColor11} style={{ borderColor: colors.appColor10 }}>
                          <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>Active</Text>
                        </Wrapper>
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
                          <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                        </Wrapper>
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                  <Spacer isSmall />
                  <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                  <Spacer isSmall />
                  <Wrapper style={{ marginRight: width(20) }}>
                    <Wrapper justifyContentSpaceBetween flexDirectionRow>
                      <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                        <Icons.Custom icon={appIcons.location_2} color={colors.iconColor6} size={sizes.icons.small} />
                        <Spacer horizontal isSmall />
                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Bali, Indonesia</Text>
                      </Wrapper>
                      <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                        <Icons.Custom icon={appIcons.adults} color={colors.iconColor6} size={sizes.icons.small} />
                        <Spacer horizontal isSmall />
                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>5 guests</Text>
                      </Wrapper>
                    </Wrapper>
                    <Spacer isTiny />
                    <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                      <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
                      <Spacer horizontal isSmall />
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Feb 17-20 | 4 Days | 4 hours</Text>
                    </Wrapper>
                  </Wrapper>
                  <Spacer isSmall />
                  <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                  <Spacer isSmall />
                  <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                    <Wrapper >
                      <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                    </Wrapper>
                    <Wrapper alignItemsFlexStart>
                      <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$74.63</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Spacer isSmall/>
                <Wrapper  marginVerticalSmall>
                  <Buttons.Bordered
                    // onPress={() => handleResetPassword()}
                    buttonStyle={{ borderColor: colors.appTextColor27, marginHorizontal: 0 }}
                    text={'Cancel'}
                    iconContainer={{ left: width(34) }}
                    textStyle={{
                      color: colors.appTextColor27,
                      fontFamily: appFonts.appTextMedium,
                      fontSize: fontSizes.medium,
                    }} />
                </Wrapper>
              </Wrapper>
            </>

            :
            (
              <LocalsList data={data} />
            )
          }

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
  },
  flipCard: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  face: {
    backgroundColor: colors.appColor3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: sizes.cardRadius,
  },
  back: {
    backgroundColor: colors.appColor4,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: sizes.cardRadius,
  },
  timerText: {
    fontSize: fontSizes.h4_small,
    color: colors.appTextColor2,
    fontFamily: appFonts.appTextMedium,
  },
})


