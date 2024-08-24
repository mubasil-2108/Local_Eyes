import { useState } from "react";
import { appImages } from "../../../../services";

export function useHooks() {
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const images = [
      { id: '1', source: appImages.place1 },
      { id: '2', source: appImages.place2 },
      { id: '3', source: appImages.place3 },
      { id: '4', source: appImages.place4 },
    ];

    return { 
       pressed,
       setPressed,
       images,
       setModalVisible,
       modalVisible
     }
}