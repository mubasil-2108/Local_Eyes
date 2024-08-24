import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals, Pickers } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';
import LinearGradient from 'react-native-linear-gradient';


export default function Index(props) {
    const { navigate, goBack } = props.navigation
    const {  } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <Wrapper marginHorizontalSmall style={{ marginTop: width(5) }}>
                <Headers.Primary
                    onBackPress={() => goBack()}
                    showBackArrow
                    rightIconSource={appIcons.chevron_left}
                    allowText
                    textColor={colors.appTextColor9}
                    // iconColor={colors.iconColor1}
                    title={'John Doe'}
                    titleStyle={{ fontFamily: appFonts.interBold, fontSize: fontSizes.medium }}
                    iconContainer={{ flexDirection: 'row' }}
                    containerStyle={{ backgroundColor: colors.appColor1 }} />

            </Wrapper>
            {/* <Wrapper paddingVerticalBase marginHorizontalBase >
                <Buttons.Colored
                    onPress={handleNext}
                    buttonStyle={{ marginHorizontal: 0 }}
                    text={'Next'}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.interSemiBold,
                        fontSize: fontSizes.regular,
                    }} />

            </Wrapper> */}
        </Wrapper>
    );
}