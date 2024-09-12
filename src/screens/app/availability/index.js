import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, Switches, GradientText } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home(props) {

    const { navigate, goBack, dispatch } = props.navigation

    const {
        privacyPolicyEnabled,
        handleTogglePrivacyPolicy,
        DrawerActions,
    } = useHooks() || {};

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
                        marginHorizontalBase
                        alignItemsCenter
                        style={{ marginTop: responsiveHeight(4) }}>
                        <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} onPress={() => dispatch(DrawerActions.openDrawer())} />
                        <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.large }}>Availability & Rate</Text>
                        <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
                    </Wrapper>
                    <Spacer />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding>
                    <Spacer />
                    <Wrapper marginHorizontalBase>
                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Week Days</Text>
                        <Spacer isSmall />
                        <Spacer isTiny />
                        <Wrapper isBorderedWrapper marginHorizontalZero style={{ borderColor: colors.borderColor4 }}>
                            <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor23, opacity: 0.6 }}>Monday</Text>
                                <Wrapper >
                                    <Switches.Custom switchStyle={{ width: totalSize(6) ,  backgroundColor: privacyPolicyEnabled ? colors.switchColor : colors.appColor21 }} gradiantColors={privacyPolicyEnabled ? [colors.appColor2,colors.appColor2,colors.appColor3]: [colors.appColor20, colors.appColor20]} circleStyle={{ width: totalSize(2.5), height: totalSize(2.5)  }} value={privacyPolicyEnabled} onPress={handleTogglePrivacyPolicy} />
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                <LinearGradient
                                    // colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        borderRadius: 28,
                                        padding: 1,
                                        marginBottom: height(1),
                                    }}
                                >
                                    <Wrapper
                                        justifyContentCenter
                                        paddingVerticalTiny
                                        style={{ borderRadius: sizes.cardRadius, paddingHorizontal: width(4.5) }}
                                        backgroundColor={colors.appColor1}>
                                        <GradientText start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} text={'09:00 am - 11:00 Pm'} color={[colors.appTextColor2, colors.appTextColor2, colors.appTextColor30]} textStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.small }} />
                                    </Wrapper>
                                </LinearGradient>
                                <LinearGradient
                                    // colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        borderRadius: 28,
                                        padding: 1,
                                        marginBottom: height(1),

                                    }}
                                >
                                    <Wrapper
                                        justifyContentCenter
                                        paddingVerticalTiny

                                        style={{ borderRadius: sizes.cardRadius, paddingHorizontal: width(4.5) }}
                                        backgroundColor={colors.appColor1}>
                                        <GradientText start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} text={'09:00 am - 11:00 Pm'} color={[colors.appTextColor2, colors.appTextColor2, colors.appTextColor30]} textStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.small }} />
                                    </Wrapper>
                                </LinearGradient>
                            </Wrapper>
                            <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor23, opacity: 0.6 }}>Eastern Time -  Us & Canada</Text>
                            <Spacer isTiny/>
                            <Wrapper flexDirectionRow>
                                <Wrapper>
                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$13{' '}
                                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor7 }}>/hour</Text>
                                    </Text>
                                </Wrapper>
                                <Spacer horizontal />
                                <Wrapper>
                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$5{' '}
                                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor7 }}>/transport charges</Text>
                                    </Text>
                                </Wrapper>
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