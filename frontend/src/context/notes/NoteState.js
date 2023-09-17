import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (probs) => {
    const state1 = {
        "name": "guru",
        "class": "13"
    }
    const [state, setState] = useState(state1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Raga",
                "class": "10b"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {probs.children}
        </NoteContext.Provider>
    )
}

export default NoteState;