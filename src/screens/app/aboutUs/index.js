import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Images, Buttons } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';

export default function AboutUs(props) {

    const { navigate, goBack, reset, dispatch } = props.navigation
    const {
        statusBarVisible,
        DrawerActions,
        expanded,
        handleExpand,
        faqsData,
        guideLines
    } = useHooks() || {};

    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <ScrollViews.KeyboardAvoiding>
                    <StatusBars.Dark hidden={!statusBarVisible} backgroundColor={colors.appBgColor1} />
                    <Wrapper style={{ marginTop: width(5) }}>
                        <Wrapper marginHorizontalBase>
                            <Headers.Primary
                                onBackPress={() => goBack()}
                                showBackArrow
                                allowText
                                textColor={colors.appTextColor9}
                                iconColor={colors.iconColor1}
                                title={'Guidelines'}
                                titleStyle={{ fontFamily: appFonts.interSemiBold, fontSize: fontSizes.medium }}
                                iconContainer={{ flexDirection: 'row' }}
                                containerStyle={{ backgroundColor: colors.appColor1 }} />
                            <Wrapper marginHorizontalTiny>
                                <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.baloo2_Bold, color: colors.appTextColor1 }}>Local Eyes Local Eyes</Text>
                            </Wrapper>
                            <Wrapper marginVerticalSmall marginHorizontalTiny>
                            <Text style={{ fontSize: fontSizes.mediumSmall, fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5 }}>{guideLines}</Text>
                                
                            </Wrapper>
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