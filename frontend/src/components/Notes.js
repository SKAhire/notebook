import React, { useContext } from "react";
import NotesItems from "./NotesItems";
import NoteContext from "../context/notes/NoteContext";

const Notes = ()=>{
    const context = useContext(NoteContext)
    const {notes, setNotes} = context;
    return(
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((notes)=>{
                return <NotesItems notes = {notes} />
            })}
        </div>
    )
}
export default Notes;