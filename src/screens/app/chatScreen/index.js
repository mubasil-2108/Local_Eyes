import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals, Pickers, Chats } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';
import LinearGradient from 'react-native-linear-gradient';
import { GiftedChat } from 'react-native-gifted-chat';


export default function Index(props) {
    const { navigate, goBack } = props.navigation
    const { } = useHooks()

    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <Wrapper marginHorizontalSmall style={{ marginTop: width(5) }}>
                <Spacer isSmall />
                <Headers.Primary
                    onBackPress={() => goBack()}
                    showBackArrow
                    rightIconSource={appIcons.chevron_left}
                    allowText
                    profilePic={appImages.profile1}
                    textColor={colors.appTextColor9}
                    // iconColor={colors.iconColor1}
                    title={'John Doe'}
                    titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                    iconContainer={{ flexDirection: 'row' }}
                    containerStyle={{ backgroundColor: colors.appColor1 }} />

            </Wrapper>
            <Chats.Chat />
        </Wrapper>
    );
}