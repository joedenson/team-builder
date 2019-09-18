import React, { useState } from "react";
import Form from './Form';
import Note from './Note';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  const addNewMember = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role
    };
    setNotes([...notes, newNote]);
  };


  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember} />
      <Note notes={notes} />
    </div>
  );
}

export default App;
