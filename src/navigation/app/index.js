import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes, headers, appImages, colors, responsiveHeight, sizes, appIcons, appFonts, fontSizes, responsiveWidth } from '../../services';
import BottomTab from './bottomTab'
import { width, height, totalSize } from 'react-native-dimension';
import * as App from '../../screens/app';
import { GradientText, Icons, Images, Spacer, StatusBars, Text, Wrapper } from '../../components';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../rootNavigation';
import CommonNavigation from '../common';
const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const menuItems = [
    { text: 'Home', icon: appIcons.home, route: routes.home },
    { text: 'Help Center', icon: appIcons.headphone, route: routes.helpCenter },
    { text: 'Terms & Conditions', icon: appIcons.notes, route: routes.terms },
    { text: 'Privacy Policy', icon: appIcons.securitySafe, route: routes.privacy },
    { text: 'About Us', icon: appIcons.infoCircle, route: routes.aboutUs },
];

const StackNavigation = () => {
    return (
        <AppStack.Navigator initialRouteName={routes.bottomTab} screenOptions={{headerShown:false}}>
            <AppStack.Screen name={routes.bottomTab} component={BottomTab} />
            <AppStack.Screen name={routes.helpCenter} component={App.HelpCenter} />
            <AppStack.Screen name={routes.faqs} component={App.FAQS} />
            <AppStack.Screen name={routes.contactSupport} component={App.ContactSupport} />
            <AppStack.Screen name={routes.common} component={App.GuideLines} />
            <AppStack.Screen name={routes.terms} component={App.Terms} />
            <AppStack.Screen name={routes.privacy} component={App.Privacy} />
            <AppStack.Screen name={routes.aboutUs} component={App.AboutUs} />
            <AppStack.Screen name={routes.localPreview} component={App.LocalPreview} />
            <AppStack.Screen name={routes.chatScreen} component={App.ChatScreen}/>
            <AppStack.Screen name={routes.booking} component={App.Booking} />
            <AppStack.Screen name={routes.payment} component={App.Payment} />

        </AppStack.Navigator>
    )

}

const DrawerDesign = () => {
    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <Wrapper style={{ marginTop: responsiveHeight(10) }} alignItemsCenter >
                    <Images.Simple size={sizes.images.xLSmall} source={appImages.fullLogo} style={{ resizeMode: 'contain' }} />
                </Wrapper>
                <Wrapper flex={1} style={{ marginTop: responsiveHeight(10) }}>
                    {/* <Wrapper> */}
                    {menuItems.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigate(item.route)}>
                            <Wrapper flexDirectionRow paddingVerticalBase>
                                <Wrapper flexDirectionRow alignItemsCenter marginHorizontalLarge justifyContentFlexstart>
                                    <Icons.Custom size={sizes.icons.mediumSmall} icon={item.icon} />
                                    <Wrapper marginHorizontalBase >
                                        <GradientText text={item.text} textStyle={{ color: colors.appTextColor1, fontSize: fontSizes.medium, fontFamily: appFonts.appTextRegular }} color={[colors.buttonColor2, colors.buttonColor1]} />
                                    </Wrapper>
                                    {/* <Icons.Custom icon={}/> */}
                                </Wrapper>
                            </Wrapper>
                        </TouchableOpacity>


                    ))}
                    {/* </Wrapper> */}
                </Wrapper>
                <Wrapper flex={1} justifyContentFlexend style={{ marginBottom: responsiveHeight(5) }}>
                    <Wrapper marginVerticalSmall style={{ borderWidth: 1, borderColor: colors.spacerColor1, opacity: 0.28 }} />
                    <TouchableOpacity >
                        <Wrapper flexDirectionRow justifyContentCenter marginVerticalSmall >
                            <Wrapper flexDirectionRow alignItemsCenter justifyContentFlexstart>
                                <Icons.Custom size={sizes.icons.mediumSmall} icon={appIcons.log_out} />
                                <Wrapper marginHorizontalTiny >
                                    <Text style={{ color: colors.appTextColor7, opacity: 0.4, fontSize: fontSizes.medium, fontFamily: appFonts.appTextRegular }}>Logout</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </TouchableOpacity>
                </Wrapper>
            </Wrapper>
        </>
    );
}

const AppNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerDesign {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: responsiveWidth(69),
                    borderTopRightRadius: totalSize(2),
                    borderBottomRightRadius: totalSize(2),
                    overflow: 'hidden', // Ensure content doesn't overflow the border radius
                },

                headerShown: false,
            }}
            initialRouteName={routes.bottomTab}

        >
            <Drawer.Screen name={routes.stackNavigation} component={StackNavigation} />
        </Drawer.Navigator>
    )
}

export default AppNavigation