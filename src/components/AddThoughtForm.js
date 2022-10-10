import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = ({ target }) => {
    setText(target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    if (text) {
      const data = {
        id: generateId(),
        text,
        expiresAt: getNewExpirationTime()
      }
      props.addThought(data);
      setText('');
    }
  };

  return (
    <form
      className='AddThoughtForm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
