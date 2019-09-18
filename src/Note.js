import React from 'react';

const Note = props => {
    return (
        <div>
            {props.notes.map(note => (
                <div className="note" key={note.id}>
                    <h2>{note.name}</h2>
                    <p>{note.email}</p>
                    <p>{note.role}</p>
                </div>
            ))}
        </div>
    );
};






export default Note;