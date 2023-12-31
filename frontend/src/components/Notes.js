import React, {useContext, useEffect, useRef, useState} from 'react'
import NotesItems from "./NotesItems";
import NoteContext from "../context/notes/NoteContext";
import AddNotes from "./AddNotes";
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(NoteContext)
    const nevigate = useNavigate()
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
    if(localStorage.getItem('token')){
        getNotes()
    }
    else{
        nevigate('/login')
    }
        
        // eslint-disable-next-line
    })
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
        <AddNotes showAlert={props.showAlert} />
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button ref={refClose} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>You Notes</h2>
                {notes.map((note) => {
                    return <NotesItems key={note._id} updateNote={updateNote} note={note} />
                })}
                <div className="container">
                    {notes.length===0 && "No note to display"}
                </div>
            </div>
        </>

    )
}
export default Notes;