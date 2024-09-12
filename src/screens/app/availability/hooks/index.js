import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { width, height, totalSize } from 'react-native-dimension';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appFonts, appIcons, appImages, colors, fontSizes, routes, sizes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';

export function useHooks() {
    const [search, setSearch] = useState('');
    const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = useState(true);

    const handleTogglePrivacyPolicy = () => {
        setPrivacyPolicyEnabled((prev) => !prev);
      };

    const handleSelect = (option) => {
        setSelected(option);
    };

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

    return {
        goBack,
        search,
        setSearch,
        // isDrawerOpen,
        // statusBarVisible,
        DrawerActions,
        handleSelect,
        handleTogglePrivacyPolicy,
        privacyPolicyEnabled
    }
}