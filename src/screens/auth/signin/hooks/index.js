import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { Signin } from '../../../../services/utilities/firebaseUtil/firebaseAuth';
export function useHooks() {

    // const handleLogin = (email, password) => {
    //     navigate(routes.app)
    // }
    

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const modalVisibility = () => {
        setModalVisible(!modalVisible);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    // const handleBackButtonPress = () => {
    //     if (modalVisible) {
    //         modalVisibility(); // Close the modal if it's visible
    //         return true; // Tell React Native that the back press is handled
    //     }
    //     return false; // Let React Native handle the back press
    // };

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         handleBackButtonPress
    //     );

    //     // Clean up the event listener when the component unmounts
    //     return () => backHandler.remove();
    // }, [modalVisible]);

    return {
        // handleLogin,
        toggleCheckbox,
        togglePasswordVisibility,
        setEmail,
        email,
        showPassword,
        setPassword,
        password,
        isChecked,
        modalVisible,
        modalVisibility,
        Signin
    }
}