import { useState } from "react";
import { appImages } from "../../../../services";

export function useHooks() {
    const [selected, setSelected] = useState([]); // Store only a single selected ID

    const handleRadioButtonPress = (id) => {
        if (selected.includes(id)) {
            // If the item is already selected, remove it from the selection
            setSelected(selected.filter(selectedId => selectedId !== id));
        } else {
            // Otherwise, add the item to the selection
            setSelected([...selected, id]);
        }
    };
    return {
        selected,
        handleRadioButtonPress
    }
}