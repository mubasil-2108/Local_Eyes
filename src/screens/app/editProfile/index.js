import React, { Component } from 'react';
import { Wrapper, Text, Headers, ScrollViews, StatusBars, Images, TextInputs, Buttons } from '../../../components';
import { totalSize, width, height } from 'react-native-dimension';
import { useHooks } from './hooks'
import { appFonts, appIcons, appImages, colors, fontSizes, routes, sizes } from '../../../services';

export default function Index(props) {
  const { navigate, goBack } = props.navigation



  const { email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, name, setName, confirmPassword, setConfirmPassword, toggleConfirmPasswordVisibility, showConfirmPassword } = useHooks()

  return (
    <Wrapper isMain >
      <ScrollViews.KeyboardAvoiding>
        <StatusBars.Dark />
        <Headers.Primary showBackArrow iconContainer={{ flexDirection: 'row' }} title={'Edit Profile'} tintColor={'black'} containerStyle={{ marginTop: height(5), height: height(10), backgroundColor: 'white' }} />
        <Wrapper isCenter paddingVerticalLarge>
          <Images.Profile source={appImages.uploadPhoto} imageStyle={{ height: sizes.images.xL, width: sizes.images.xL }} />
        </Wrapper>
        <Wrapper marginVerticalSmall paddingHorizontalSmall>
          <TextInputs.Colored title={'Full Name'}
            value={name}
            onChangeText={(text) => setName(text)}
            keyboardType={'email-address'}
            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
            containerStyle={{ marginTop: height(2) }}
            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
            placeholder={'Type your name here...'}
            placeholderTextColor={colors.placeHolderColor}
            titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />
          <TextInputs.Colored title={'Email Address'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType={'email-address'}
            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
            containerStyle={{ marginTop: height(2) }}
            customIconLeft={appIcons.mail}
            iconSizeLeft={sizes.icons.mediumTiny}
            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
            iconColorLeft={colors.iconColor}
            iconStyleLeft={{ marginLeft: width(0.7) }}
            placeholder={'example@email.com'}
            placeholderTextColor={colors.placeHolderColor}
            titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />

          <TextInputs.Colored title={'Password'}
            value={password}
            onChangeText={(text) => setPassword(text)}
            keyboardType={'default'}
            secureTextEntry={!showPassword}
            onPressIconRight={togglePasswordVisibility}
            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
            containerStyle={{ marginTop: height(2) }}
            customIconLeft={appIcons.lock}
            iconSizeLeft={sizes.icons.mediumTiny}
            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
            iconColorLeft={colors.iconColor}
            iconStyleLeft={{ marginLeft: width(0.7) }}
            placeholder={'Minimum 8 charachers'}
            placeholderTextColor={colors.placeHolderColor}
            customIconRight={appIcons.eye} iconSizeRight={sizes.icons.mediumTiny}
            iconStyleRight={{ marginRight: width(4) }} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />

          <TextInputs.Colored title={'Confirm Password'}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            keyboardType={'default'}
            secureTextEntry={!showConfirmPassword}
            onPressIconRight={toggleConfirmPasswordVisibility}
            inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }}
            containerStyle={{ marginTop: height(2) }}
            customIconLeft={appIcons.lock}
            iconSizeLeft={sizes.icons.mediumTiny}
            inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
            iconColorLeft={colors.iconColor}
            iconStyleLeft={{ marginLeft: width(0.7) }}
            placeholder={'Minimum 8 charachers'}
            placeholderTextColor={colors.placeHolderColor}
            customIconRight={appIcons.eye} iconSizeRight={sizes.icons.mediumTiny}
            iconStyleRight={{ marginRight: width(4) }} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />
        </Wrapper>
        <Wrapper isCenter marginVerticalMedium>
          <Wrapper marginVerticalSmall flexDirectionRow alignItemsCenter justifyContentCenter >
            <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Cancel'} iconName={'google'} iconType={'material-community'} textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
            <Buttons.Colored buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), borderColor: colors.buttonBorder1 }} text={'Update'} iconName={'facebook'} iconType={'material-community'} textStyle={{ color: colors.appTextColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

