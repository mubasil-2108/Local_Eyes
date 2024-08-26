import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList } from '../../../components';
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
        modalVisible,
        setModalVisible,
        handlePressItem,
        data,
        search,
        pressed,
        setPressed,
        images,
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
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <StatusBars.Dark backgroundColor={colors.appColor1} />
                <Spacer />
                <Wrapper
                    marginHorizontalBase
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        title={'Payment Method'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
                    <Wrapper marginHorizontalBase alignItemsCenter>
                        <Images.Simple style={{resizeMode:'contain', height:'100%', width:'100%', bottom:height(25)}} source={appImages.paymentCard}>
                            <Spacer />
                            <Wrapper marginVerticalLarge marginHorizontalLarge>
                                <Wrapper>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h5, color: colors.appTextColor5 }}>3822  8293  8292  2356</Text>
                                </Wrapper>
                                <Spacer />
                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper flex={4}>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor15 }}>Card holder name</Text>
                                    </Wrapper>
                                    <Wrapper alignItemsFlexStart flex={1}>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor15 }}>Expiry Date</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isTiny />
                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper flex={4}>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor5 }}>Alexser verguson</Text>
                                    </Wrapper>
                                    <Wrapper alignItemsFlexStart flex={1}>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor5 }}>03/30</Text>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Images.Simple>

                    </Wrapper>

                </ScrollViews.KeyboardAvoiding>


            </Wrapper>
            <Wrapper
                // alignItemsCenter
                backgroundColor={colors.appColor1}
                paddingVerticalBase
                // justifyContentSpaceBetween
                style={{
                    shadowColor: colors.shadowColor1,
                    shadowOffset: { width: 0, height: -5.93 },
                    shadowOpacity: 0.12,
                    shadowRadius: 30,
                    elevation: 50,
                }}>
                <Buttons.Colored
                    //   onPress={() => 
                    //     // Signin(email, password)
                    //     navigate(routes.app)
                    //   }
                    text={'Confirm Booking'}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.appTextBold,
                        fontSize: fontSizes.regular,
                    }} />
            </Wrapper>

            <Modals.PopupPrimary toggle={() => setModalVisible(!modalVisible)} calender topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }} title={'Availability'} visible={modalVisible} />
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


