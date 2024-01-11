import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = ({ onAdd, onSave }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  // useEffect(() => {
  //   const savedNote = JSON.parse(localStorage.getItem('tempNote'));
  //   if (savedNote) setNote(savedNote);
  // }, []);

  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    // localStorage.setItem('tempNote', JSON.stringify(note));
  };

  const submitNote = (event) => {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const expand = () => setExpanded(true);

  return (
    <div className='note input-container'>
      <form className='create-note'>
        {isExpanded && (
          <div>
            <input
              style={{
                border: '0px white',
                outline: 'none',
                // paddingBottom: '0.3em',
                // borderBlock: '1px solid black',
                // marginBottom: '0.5em',
              }}
              name='title'
              placeholder='Title'
              value={note.title}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <textarea
            style={{
              border: 'none',
              outline: 'none',
              height: '16px',
              resize: 'none',
              // paddingTop: '0.3em',
              // borderBlock: '1px solid black',
              marginTop: '0.1em',
            }}
            onClick={expand}
            name='content'
            placeholder='Take a note...'
            value={note.content}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
          }}
        >
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote} className='zoom'>
              <AddBoxIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
