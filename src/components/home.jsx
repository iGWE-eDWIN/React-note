import React, { useState, useEffect } from 'react';
import CreateArea from './createArea';
import Note from './note';
import { postJSON, patchJSON, deleteJSON, getJSON } from './API';

const Home = ({ data }) => {
  // console.log(data);
  // const { username } = data;

  const [notes, setNotes] = useState([]);
  const [isHiding, setHiding] = useState(true);

  const token = localStorage.getItem('authToken');
  // const token = sessionStorage.getItem('authToken');

  // Getting saved notes from the database
  useEffect(() => {
    const note = async () => {
      const data = await getJSON(
        'https://edwin-note-api-d581200c51fb.herokuapp.com/notes',
        token
      );
      // console.log(data);
      if (data) setNotes(data);
    };
    note();
  }, []);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('Notes'));
  //   if (data) setNotes(data);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('Notes', JSON.stringify(notes));
  // }, [notes]);

  const addNote = async (newNote) => {
    const noteJSON = await postJSON(
      'https://edwin-note-api-d581200c51fb.herokuapp.com/notes',
      newNote,
      token
    );
    console.log(noteJSON);
    setNotes((prevNotes) => {
      return [...prevNotes, noteJSON];
    });
  };

  // console.log(notes);

  const editNote = async (id, title, content) => {
    const details = {
      title,
      content,
    };

    const updateJSON = await patchJSON(
      `https://edwin-note-api-d581200c51fb.herokuapp.com/notes/${id}`,
      details,
      token
    );
    console.log(updateJSON);
    // const { title, content } = updateJSON;
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id
          ? { ...note, title: updateJSON.title, content: updateJSON.content }
          : note
      )
    );
    setHiding(true);
  };

  const deleteNote = async (id) => {
    const delJSON = await deleteJSON(
      `https://edwin-note-api-d581200c51fb.herokuapp.com/notes/${id}`,
      token
    );
    console.log(delJSON);
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
  };

  const hidden = () => {
    setHiding(false);
  };

  return (
    <div className='container'>
      <div className='container app-container'>
        {isHiding && <CreateArea onAdd={addNote} />}
        {notes.map((note, index) => (
          <Note
            key={index}
            // id={parseInt(note._id)}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            onEdit={editNote}
            hidden={hidden}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
