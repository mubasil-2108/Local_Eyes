import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';
import { appFonts, appIcons, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, routes, tabs } from "../../services";
import { Images, Wrapper } from "../../components";
import { Icon } from "@rneui/base";
import * as App from '../../screens/app';
import Text from "../../components/text";

const BottomTabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const tabIconSize = responsiveFontSize(22);

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName={routes.home}
    >
        <HomeStack.Screen name={routes.home} component={App.Home} />
        <HomeStack.Screen name={routes.dummyScreen} component={App.DummyScreen}/>
        {/* <HomeStack.Screen name={routes.allCategory} component={App.AllCategory} /> */}
        {/* <HomeStack.Screen name={routes.subCategories} component={App.SubCategories} /> */}
        
    </HomeStack.Navigator>
);

const TabIcon = ({ color, iconName, iconType, focused, image, tabBarLabel, customStyle }) => {
    const activeColor = colors.iconColor3;  // define active color
    const inactiveColor = colors.iconColor4;  // define inactive color

    return (
        <Wrapper justifyContentCenter alignItemsCenter style={styles.iconWrapper(focused)}>
            {
                !image ?
                    <Icon
                        name={iconName}
                        type={iconType}
                        size={tabIconSize}
                        color={focused ? activeColor : inactiveColor}
                    />
                    :
                    <Images.Round
                        // { uri: image }
                        source={image}
                        size={tabIconSize}
                        style={{ tintColor: focused ? activeColor : inactiveColor, resizeMode: 'contain', opacity: focused ? 1 : 0.5, ...customStyle }}
                    />
            }
            <Text isTiny style={{ textAlign: 'center', backgroundColor: colors.transparent, color: focused ? activeColor : inactiveColor, fontFamily: appFonts.interRegular }}>{tabBarLabel}</Text>
        </Wrapper>
    );
}

export default function BottomTabNavigation() {
    return (
        <BottomTabStack.Navigator
            screenOptions={{
                headerShown: false,
                ...tabs.tabBarOptions,
                tabBarShowLabel: false,

            }}
            initialRouteName={routes.homeStackScreen}
        >
            <BottomTabStack.Screen
                name={routes.homeStackScreen}
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon
                            // iconName='home' 
                            // iconType='feather'
                            image={appIcons.home}
                            customStyle={{ borderRadius: 0 }}
                            color={color}
                            focused={focused}
                            tabBarLabel='Home'
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.products}
                component={App.Product}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon
                            // iconName='globe' 
                            // iconType='feather' 
                            image={appIcons.products}
                            customStyle={{ borderRadius: 0 }}
                            color={color}
                            focused={focused}
                            tabBarLabel='Product'
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.cart}
                component={App.Cart}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon
                            image={appIcons.cart}
                            customStyle={{ borderRadius: 0 }}
                            color={color}
                            focused={focused}
                            tabBarLabel='Cart'
                        />
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.account}
                component={App.Account}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabIcon
                            iconName='user'
                            iconType='feather'
                            color={color}
                            focused={focused}
                            tabBarLabel='Account'
                        />
                    ),
                }}
            />
        </BottomTabStack.Navigator>
    );
}

const styles = StyleSheet.create({
    iconWrapper: (focused) => ({
        borderRadius: width(3),
        backgroundColor: focused ? colors.appColor2 : colors.appColor1,
        width: responsiveWidth(18),
        height: responsiveHeight(6),
        justifyContent: 'center',
        marginTop: 0,
        alignItems: 'center',
        // paddingVertical: 5
    }),
    iconImage: {
        opacity: 0.5,
        resizeMode: 'contain'
    }
});
