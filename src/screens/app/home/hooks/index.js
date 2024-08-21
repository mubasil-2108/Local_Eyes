import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appImages, routes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export function useHooks() {
    const [search, setSearch] = useState('');
    const [statusBarVisible, setStatusBarVisible] = useState(true);
    const isDrawerOpen = useDrawerStatus(); // Get the drawer status

    useEffect(() => {
      // Show the status bar initially and then update based on drawer status
      StatusBar.setHidden(!statusBarVisible);
    }, [statusBarVisible]);
  
    useEffect(() => {
      // Update status bar visibility based on drawer state
      if (isDrawerOpen === 'open') {
        setStatusBarVisible(false);
      } else {
        setStatusBarVisible(true);
      }
    }, [isDrawerOpen]);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);

    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    // const data =['mmmml','kkko']

    return {
        // data,
        goBack,
        search,
        setSearch,
        isDrawerOpen,
        statusBarVisible,
        DrawerActions
    }
}