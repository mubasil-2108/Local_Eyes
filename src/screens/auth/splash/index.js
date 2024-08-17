import React, { Component } from 'react';
import { Wrapper, Text, Logos, Icons, Images } from '../../../components';
import { totalSize, width, height } from 'react-native-dimension';
import { appFonts, appIcons, appImages, appStyles, appSvgs, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import { color } from '@rneui/base';


function Splash() {
  return (
    <Wrapper isMain isCenter backgroundColor={colors.appColor1}>
      <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
        <Wrapper animation={'fadeInLeftBig'} style={{}} >
          <Images.Simple  source={appIcons.localEyesLeft} style={{ left: sizes.doubleBaseMargin1, height: sizes.icons.xl1, width: sizes.icons.xxl,resizeMode:'contain' }} />
        </Wrapper>
        <Wrapper alignItemsCenter justifyContentCenter>
          <Images.Simple style={{resizeMode:'contain'}} source={appIcons.localEyesMiddle} size={sizes.icons.large1} />
        </Wrapper>
        <Wrapper animation={'fadeInRightBig'} >
          <Images.Simple source={appIcons.localEyesRight} style={{ right: sizes.doubleBaseMargin, top: responsiveFontSize(5), height: sizes.icons.xl1, width: sizes.icons.xxl1, resizeMode:'contain' }} />
        </Wrapper>
      </Wrapper>
      <Wrapper animation={'fadeInUpBig'} marginVerticalSmall>
        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor1 }}>LOCAL EYES</Text>
      </Wrapper>
    </Wrapper>
  );
}

export default Splash;
