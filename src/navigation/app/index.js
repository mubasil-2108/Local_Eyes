import React, { Component, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes, headers, appImages, colors, responsiveHeight, sizes, appIcons, appFonts, fontSizes, responsiveWidth } from '../../services';
import { BottomLocaleTabNavigation, BottomTabNavigation } from './bottomTab'
import { width, height, totalSize } from 'react-native-dimension';
import * as App from '../../screens/app';
import { GradientText, Icons, Images, Spacer, StatusBars, Text, Wrapper } from '../../components';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        <AppStack.Navigator initialRouteName={routes.bottomTab} screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={routes.bottomTab} component={BottomTabNavigation} />
            <AppStack.Screen name={routes.helpCenter} component={App.HelpCenter} />
            <AppStack.Screen name={routes.faqs} component={App.FAQS} />
            <AppStack.Screen name={routes.contactSupport} component={App.ContactSupport} />
            <AppStack.Screen name={routes.common} component={App.GuideLines} />
            <AppStack.Screen name={routes.terms} component={App.Terms} />
            <AppStack.Screen name={routes.privacy} component={App.Privacy} />
            <AppStack.Screen name={routes.aboutUs} component={App.AboutUs} />
            <AppStack.Screen name={routes.localPreview} component={App.LocalPreview} />
            <AppStack.Screen name={routes.chatScreen} component={App.ChatScreen} />
            <AppStack.Screen name={routes.booking} component={App.Booking} />
            <AppStack.Screen name={routes.payment} component={App.Payment} />
            <AppStack.Screen name={routes.cardManagement} component={App.CardManagement} />
            <AppStack.Screen name={routes.tripPlan} component={App.TripPlan} />
            <AppStack.Screen name={routes.schedule} component={App.Schedule} />
            <AppStack.Screen name={routes.preference} component={App.Preference} />
            <AppStack.Screen name={routes.matchingResult} component={App.MatchingResult} />
            <AppStack.Screen name={routes.filters} component={App.Filters} />
            <AppStack.Screen name={routes.sort} component={App.Sort} />
            <AppStack.Screen name={routes.editProfile} component={App.EditProfile} />
            <AppStack.Screen name={routes.changePassword} component={App.ChangePassword} />

        </AppStack.Navigator>
    )

}

const StackLocaleNavigation = () => {
    return (
        <AppStack.Navigator initialRouteName={routes.bottomLocaleTab} screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={routes.bottomLocaleTab} component={BottomLocaleTabNavigation} />
            <AppStack.Screen name={routes.withDraw} component={App.WithDraw} />
            <AppStack.Screen name={routes.weekDays} component={App.WeekDays} />
            <AppStack.Screen name={routes.chatScreen} component={App.ChatScreen} />
            <AppStack.Screen name={routes.customizeOffer} component={App.CustomizeOffer} />
            <AppStack.Screen name={routes.helpCenter} component={App.HelpCenter} />
            <AppStack.Screen name={routes.faqs} component={App.FAQS} />
            <AppStack.Screen name={routes.contactSupport} component={App.ContactSupport} />
            <AppStack.Screen name={routes.common} component={App.GuideLines} />
            <AppStack.Screen name={routes.terms} component={App.Terms} />
            <AppStack.Screen name={routes.privacy} component={App.Privacy} />
            <AppStack.Screen name={routes.aboutUs} component={App.AboutUs} />
            <AppStack.Screen name={routes.changePassword} component={App.ChangePassword} />
            <AppStack.Screen name={routes.travelerProfile} component={App.TravelerProfile} />

        </AppStack.Navigator>
    )

}

const DrawerDesign = () => {
    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <Wrapper alignItemsCenter >
                    <Images.Simple size={sizes.images.xL} source={appImages.fullLogo} style={{ resizeMode: 'contain' }} />
                </Wrapper>
                <Wrapper flex={1} >
                    {/* <Wrapper> */}
                    {menuItems.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigate(item.route)}>
                            <Wrapper flexDirectionRow paddingVerticalBase>
                                <Wrapper flexDirectionRow alignItemsCenter marginHorizontalLarge justifyContentFlexstart>
                                    <Icons.Custom size={sizes.icons.mediumSmall} color={colors.iconColor11} icon={item.icon} />
                                    <Wrapper marginHorizontalBase >
                                        <GradientText text={item.text} textStyle={{ color: colors.appTextColor1, fontSize: fontSizes.medium, fontFamily: appFonts.appTextMedium }} color={[colors.appTextColor1, colors.appTextColor1]} />
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
                                    <Text style={{ color: colors.appTextColor24, opacity: 0.4, fontSize: fontSizes.medium, fontFamily: appFonts.interMedium }}>Logout</Text>
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
    // console.log('Fetching', user);
    const [userType, setUserType] = useState(routes.stackNavigation);
    const [stack, setStack] = useState(() => StackNavigation);

    const fetchUserType = async () => {
        try {
            const storedUserType = await AsyncStorage.getItem('userType');
            console.log('Fetched user type:', storedUserType); // Add this line
            if (storedUserType === 'locale') {
                setUserType(routes.stackLocaleNavigation);
                setStack(() => StackLocaleNavigation);
            }
            else {
                setUserType(routes.stackNavigation);
                setStack(() => StackNavigation);
            }
        } catch (error) {
            console.error('Error fetching user type:', error);
        }
    };

    useEffect(() => {
        fetchUserType(); // Fetch userType when Splash Screen mounts
    }, []);

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerDesign {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: responsiveWidth(69),
                    marginTop: sizes.statusBarHeight,
                    borderTopRightRadius: totalSize(2),
                    borderBottomRightRadius: totalSize(2),
                    overflow: 'hidden', // Ensure content doesn't overflow the border radius
                },

                headerShown: false,
            }}
        // initialRouteName={routes.stackNavigation}

        >

            <Drawer.Screen name={userType} component={stack} />
        </Drawer.Navigator>
    )
}

export default AppNavigation