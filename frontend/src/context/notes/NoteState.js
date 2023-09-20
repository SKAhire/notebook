import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwM2YxZTFkMTJiZTg1NmI2MzNiMDJjIn0sImlhdCI6MTY5NDc2NTk2NH0.JmknR3DKcPG3wa7l2U9Kb4h4QZj-C4eUulqp3clqUwc"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  //add notes
  const addNote = async (title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwM2YxZTFkMTJiZTg1NmI2MzNiMDJjIn0sImlhdCI6MTY5NDc2NTk2NH0.JmknR3DKcPG3wa7l2U9Kb4h4QZj-C4eUulqp3clqUwc"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //delete note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwM2YxZTFkMTJiZTg1NmI2MzNiMDJjIn0sImlhdCI6MTY5NDc2NTk2NH0.JmknR3DKcPG3wa7l2U9Kb4h4QZj-C4eUulqp3clqUwc"
      }
    });
    await response.json();
    const delNote = notes.filter((note) => { return note._id !== id })
    setNotes(delNote)
  }

  //editNote
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwM2YxZTFkMTJiZTg1NmI2MzNiMDJjIn0sImlhdCI6MTY5NDc2NTk2NH0.JmknR3DKcPG3wa7l2U9Kb4h4QZj-C4eUulqp3clqUwc"
      },
      body: JSON.stringify({ title, description, tag })
    });
    await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;