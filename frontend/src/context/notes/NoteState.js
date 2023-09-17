import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (probs) => {
    const notesInitial =
    [
        {
          "_id": "6504375f16f8975a36298007",
          "userId": "6503f1e1d12be856b633b02c",
          "title": "testing",
          "description": "test",
          "tag": "test",
          "date": "2023-09-15T10:52:15.601Z",
          "__v": 0
        },
        {
          "_id": "65044f7788c33f2e44df048a",
          "userId": "6503f1e1d12be856b633b02c",
          "title": "demo title",
          "description": "demo description",
          "tag": "personal",
          "date": "2023-09-15T12:35:03.451Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {probs.children}
        </NoteContext.Provider>
    )
}

export default NoteState;