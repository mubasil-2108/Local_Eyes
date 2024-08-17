import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appImages, routes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export function useHooks() {

    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const [clickedProductItems, setClickedProductsItems] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const predefinedOrder = ['Cardiologie', 'Oncologie', 'Vasculaire', 'Hernie', 'Reanimation', 'Orl'];
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };
    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };

    const handlePressItem = (item) => {
        setSelectedCategory(item.name);
        setClickedItems(prevClickedItems => {
            const updatedItems = {};
            if (item.name === 'ALL') {
                updatedItems[item.name] = true;
                navigate(routes.dummyScreen);
            } else {
                updatedItems[item.name] = true;
            }
            return updatedItems;
        });
    };

    const handleProductPressItem = (item, index) => {
        // Check if the item is already clicked
        // if (!clickedItems[item.id]) {
        // Toggle the clicked state of the notification item
        setClickedProductsItems(prevClickedItems => ({
            // ...prevClickedItems,
            [item.id]: true // Set to true to indicate it's clicked
        }));
        // }
    };

    return {
        modalHomeVisible,
        modalHomeVisibility,
        data,
        goBack,
        modalLogoutVisibility,
        modalLogoutVisible,
        handlePressItem,
        clickedItems,
        search,
        setSearch,
        handleProductPressItem,
        clickedProductItems,
        categories,
        selectedCategory,
        isDrawerOpen,
        statusBarVisible,
        DrawerActions
    }
}