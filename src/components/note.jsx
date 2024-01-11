import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateArea from './updateArea';

const Note = ({ title, content, id, onDelete, onEdit, hidden }) => {
  // console.log(id);
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  // console.log(id);

  const handleClick = (event) => {
    event.preventDefault();
    onDelete(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
    hidden();
  };

  const titleSate = (input) => {
    setEditedTitle(input);
  };

  const contentState = (input) => {
    setEditedContent(input);
  };

  const saveEditing = () => {
    // e.preventDefault();
    onEdit(id, editedTitle, editedContent);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <UpdateArea
          titleUpdate={titleSate}
          contentUpdate={contentState}
          saveEditing={saveEditing}
          title={editedTitle}
          content={editedContent}
        />
      ) : (
        <div
          className='note note-button note-container'
          style={{ height: '92px' }}
        >
          <h1>{title}</h1>
          <p>{content}</p>
          <button
            tyle={{
              marginBottom: '20px',
              height: '150',
            }}
            onClick={handleClick}
          >
            <DeleteIcon />
          </button>
          <button
            style={{
              marginBottom: '20px',
              height: '25px',
            }}
            onClick={handleEdit}
          >
            <EditIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
