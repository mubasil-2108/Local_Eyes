import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes, TimePicker } from '../../../components';
import { useHooks } from './hooks'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        modalVisible,
        setModalVisible,
        customDayNames,
        selectedDate,
        toggleCheckbox,
        isChecked,
        onDatePress,
        selected,
        handleRadioButtonPress,

    } = useHooks() || {};


    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <StatusBars.Dark backgroundColor={colors.appColor1} />
                <Spacer />
                <Wrapper
                    marginHorizontalTiny
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Select Your Preferences'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Wrapper flex={1} backgroundColor={colors.appColor1} marginHorizontalBase>
                        <Wrapper>
                            <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Local Expertise Selection</Text>
                        </Wrapper>
                        <Wrapper alignItemsCenter paddingVerticalBase flexDirectionRow>
                            <Wrapper style={{ marginTop: height(2) }}>
                                <Icons.Button onPress={() => handleRadioButtonPress(1)} iconName={selected.includes(1)  ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                            </Wrapper>
                            <Spacer horizontal isSmall />
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Certified Tour Guide</Text>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor20 }}>Professional Tour Guide with Certification and License</Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Wrapper alignItemsCenter paddingVerticalSmall flexDirectionRow>
                            <Wrapper style={{ marginTop: height(2) }}>
                                <Icons.Button onPress={() => handleRadioButtonPress(2)} iconName={selected.includes(2) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                            </Wrapper>
                            <Spacer horizontal isSmall />
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>10+ Local Years</Text>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor20 }}>Highly Experienced Local with over 10 years of Residency</Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Wrapper alignItemsCenter paddingVerticalBase flexDirectionRow>
                            <Wrapper style={{ marginTop: height(2) }}>
                                <Icons.Button onPress={() => handleRadioButtonPress(3)} iconName={selected.includes(3) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                            </Wrapper>
                            <Spacer horizontal isSmall />
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Local Enthusiast</Text>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor20 }}>Locals with a Focus on Unique & Personal Experiences</Text>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>
        </>
    );
}

const styles = StyleSheet.create({
    selectedText: {
        right: width(8),
        color: colors.appTextColor18,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
    unSelectedText: {
        color: colors.appTextColor19,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
})

