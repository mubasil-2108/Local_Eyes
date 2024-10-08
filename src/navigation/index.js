import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';
import AppNavigation from './app';
import { routes } from '../services';
import { Splash } from '../screens/auth';
import { navigationRef } from './rootNavigation';
import CommonNavigation from './common';


const MainStack = createNativeStackNavigator();

export default function Navigation() {
    // const [userType, setUserType] = useState(null);
    const [loading, setLoading] = useState(true)
    // const fetchUserType = async () => {
    //     try {
    //         const storedUserType = await AsyncStorage.getItem('userType');
    //         console.log('Fetched user type:', storedUserType); // Add this line
    //         setUserType(storedUserType);
    //     } catch (error) {
    //         console.error('Error fetching user type:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUserType(); // Fetch userType when Splash Screen mounts
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2700);
    })

    if (loading)
        return <Splash />
    else
        return (
            <NavigationContainer
                ref={navigationRef}
            >
                <MainStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName={routes.auth}
                >
                    <MainStack.Screen
                        name={routes.auth}
                        component={AuthNavigation}

                    />
                   <MainStack.Screen 
                   name={routes.app}
                   component={AppNavigation}
                   />
                        {/* {(props) => <AppNavigation {...props} user={userType} />} */}
                    {/* </MainStack.Screen> */}
                    <MainStack.Screen
                        name={routes.common}
                        component={CommonNavigation}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        );
}

