import { useState } from "react";

export function useHooks() {
    const [pressed, setPressed] = useState(false);

    return { 
       pressed,
       setPressed
     }
}