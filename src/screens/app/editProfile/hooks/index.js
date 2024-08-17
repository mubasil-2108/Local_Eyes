import { goBack } from "../../../../navigation/rootNavigation"
import { BackHandler } from 'react-native'
import { useEffect, useState } from "react";

export function useHooks() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!showConfirmPassword);
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
            goBack();
            return true;
    };

    return {
        goBack,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        setEmail,
        email,
        setName,
        name,
        showPassword,
        showConfirmPassword,
        setPassword,
        setConfirmPassword,
        confirmPassword,
        password,
    }
}