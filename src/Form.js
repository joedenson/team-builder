import React, { useState } from 'react';

const Form = (props) => {
    const [note, setNote] = useState({
        name: '',
        email: '',
        role: ''
    });



    const handleChanges = event => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    const addMember = event => {
        event.preventDefault();
        props.addNewMember(note);
        setNote({ name: '', email: '', role: '' });
    };

    return (

        <form onSubmit={addMember}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' onChange={handleChanges} value={note.name} />

            <label htmlFor='email'>Email</label>
            <input id='email' type='text' name='email' onChange={handleChanges} value={note.email} />

            <label htmlFor='role'>Role</label>
            <input id='role' type='text' name='role' onChange={handleChanges} value={note.role} />

            <button type='submit'>Add Member</button>
        </form>

    );

};

export default Form;


