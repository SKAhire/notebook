import React, {useContext} from 'react'
import NoteContext from "../context/notes/NoteContext"

const NotesItems = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3 shadow-sm p-3 mb-3 bg-body-tertiary rounded" style={{minHeight: "150px"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title} </h5>
                        <span>
                            <abbr title="edit"><i className="fa-regular fa-pen-to-square m-2 cardIcon" onClick={()=>{updateNote(note)}}></i></abbr>
                            <abbr title="delete"><i className="fa-regular fa-trash-can m-2 cardIcon" onClick={()=>{deleteNote(note._id)}}></i></abbr>
                        </span>
                    </div>
                    <p className="card-text">
                        {note.description}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default NotesItems