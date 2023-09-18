import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function AddNotes() {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [notes, setNote] = useState({title:"", description:"", tag:"default"})

    const handleChange = (e)=>{
        setNote({...notes, [e.target.name]: [e.target.value]})
    }
    
    const handleAddNote =(e) =>{
        e.preventDefault();
        addNote(notes.title, notes.description, notes.tag);
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Note Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="emailHelp" onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Note Description
                    </label>
                    <textarea name="description" id="description" cols="30" rows="10" className="form-control" onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddNote}>
                    Add Note
                </button>
            </form>
        </div>
    )
}
