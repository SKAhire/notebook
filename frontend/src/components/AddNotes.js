import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNotes = () =>{
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""})

    const handleChange = (e)=>{
        setNote({...note, [e.target.name]: [e.target.value]})
    }
    
    const handleAddNote =(e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
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
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={note.title} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Note Description
                    </label>
                    <textarea name="description" id="description" cols="30" rows="10" className="form-control"
                    onChange={handleChange}
                    value={note.description} ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange} value={note.tag} />
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleAddNote}>
                    Add Note
                </button>
            </form>
        </div>
    )
}
export default AddNotes