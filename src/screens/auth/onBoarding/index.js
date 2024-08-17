import React, {useState, useRef, Component } from 'react';
import { Wrapper, Text, Logos, Icons, Images, StatusBars, ScrollViews } from '../../../components';
import { totalSize, width, height } from 'react-native-dimension';
import { appFonts, appIcons, appImages, appStyles, appSvgs, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import { StyleSheet } from 'react-native';


function OnBoarding() {
    const slides = [
        {
          key: '1',
          title: 'Journal your story',
          text: 'The art of journaling is a great\nway to help you record the things\nyou want to remember.',
        },
        {
          key: '2',
          title: 'Add your media',
          text: 'Insert your media like photos,\nvideos, and audio to record your voice\nto text. You also have the option to\nshare and print out your journal.',
        },
        {
          key: '3',
          title: 'Lock Up Your Diary',
          text: 'Keep your daily journals, private moments, moods, plans, and goals protected.',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const scrollViewRef = useRef(null);
      const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / Dimensions.get('window').width);
        setCurrentIndex(newIndex);
      };
    return (
        <Wrapper isMain backgroundColor={colors.appColor1}>
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Wrapper animation={'fadeInUpBig'} alignItemsCenter style={{ marginTop: height(15) }}>
                <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
                    <Wrapper style={{}} >
                        <Images.Simple source={appIcons.localEyesLeft} style={{ left: sizes.doubleBaseMargin1, height: sizes.icons.xl, width: sizes.icons.xxl }} />
                    </Wrapper>
                    <Wrapper alignItemsCenter justifyContentCenter>
                        <Images.Simple source={appIcons.localEyesMiddle} size={sizes.icons.large1} />
                    </Wrapper>
                    <Wrapper >
                        <Images.Simple source={appIcons.localEyesRight} style={{ right: sizes.doubleBaseMargin, top: responsiveFontSize(7), height: sizes.icons.xl1, width: sizes.icons.xxl1 }} />
                    </Wrapper>
                </Wrapper>
                <Wrapper marginVerticalSmall>
                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor1 }}>LOCAL EYES</Text>
                </Wrapper>
            </Wrapper>

            <Wrapper>
                <ScrollViews.KeyboardAvoiding
                    ref={scrollViewRef}
                    horizontal ={true}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map((item, index) => (
                        <Wrapper key={index} style={styles.slide}>
                            <Text allowFontScaling={false} style={styles.title1}>Life Diary</Text>
                            <Wrapper style={styles.center}>
                                <Text allowFontScaling={false} style={styles.title}>{item.title}</Text>
                                <Text allowFontScaling={false} style={styles.text}>{item.text}</Text>
                            </Wrapper>
                        </Wrapper>
                    ))}
                </ScrollViews.KeyboardAvoiding>
                <Wrapper style={styles.pagination}>
                    <Wrapper style={styles.paginationDots}>
                        {slides.map((_, index) => (
                            <Wrapper
                                key={index}
                                style={[
                                    styles.dot,
                                    { backgroundColor: index === currentIndex ? colors.appColor1 : null },
                                ]}
                            />
                        ))}
                    </Wrapper>
                    </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: responsiveWidth(90),
        marginHorizontal:responsiveWidth(5),
        marginTop:responsiveHeight(2)
      },
      center:{
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(90),
        height:responsiveHeight(50)
      },
      title1: {
        fontSize: fontSizes.h1,
        color: colors.appColor1,
        marginBottom: 10,
        fontFamily: appFonts.appTextMedium
      },
      title: {
        fontSize: fontSizes.h2,
        fontFamily:appFonts.appTextBold,
        marginTop: responsiveHeight(7),
        color: colors.appColor1,
      },
      text: {
        fontSize: fontSizes.regular ,
        textAlign: 'center',
        marginTop:responsiveHeight(2),
        color: colors.appColor1,
        fontFamily: appFonts.appTextRegular,
        marginBottom:responsiveHeight(12.5)
    
      },
      pagination: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(2),
      },
      paginationDots: {
        flexDirection: 'row',
        marginTop:responsiveHeight(7)
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 30,
        marginHorizontal: 5,
        borderColor:colors.appColor1,
        borderWidth: 1
      },
})
export default OnBoarding;
