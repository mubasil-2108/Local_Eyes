import { useState } from "react";

export function useHooks() {
    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [modalHomeVisible, setModalHomeVisible] = useState(false);

    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };
    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };

    return{
        modalLogoutVisible,
        modalLogoutVisibility,
        setModalLogoutVisible,
        modalHomeVisible,
        modalHomeVisibility,
        setModalHomeVisible
    }
}