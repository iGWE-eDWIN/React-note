import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddBoxIcon from '@mui/icons-material/AddBox';

const UpdateArea = ({
  saveEditing,
  titleUpdate,
  contentUpdate,
  title,
  content,
}) => {
  const [formStyle, setFormStyle] = useState(true);
  const customstyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    marginBottom: '20px',
    position: 'relative',
    // border: '1px solid black',
    marginRight: '50%',
  };

  const handleClick = () => {
    saveEditing();
    setFormStyle(false);
  };

  return (
    <div className='note' style={formStyle && customstyle}>
      <form className='create-note'>
        <input
          style={{ border: '0px white', outline: 'none' }}
          type='text'
          value={title}
          onChange={(e) => titleUpdate(e.target.value)}
          placeholder='Update title'
        />
        <textarea
          style={{
            border: 'none',
            outline: 'none',
            height: '20px',
            resize: 'none',
          }}
          placeholder='Update note...'
          value={content}
          onChange={(e) => contentUpdate(e.target.value)}
        />
        <Fab
          onClick={handleClick}
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
          }}
        >
          <AddBoxIcon />
        </Fab>
      </form>
    </div>
  );
};

export default UpdateArea;
