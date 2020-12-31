import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [placeHolder, setPlaceHolder] = useState('Title')
  function handleChange(e){
    const {name, value} = e.target;

    setNote(prevNote =>{
      return { 
        ...prevNote,
        [name] : value
      }
    })
  }
 
  function handleClick(event){

    note.title === '' ? setPlaceHolder('Enter Title !') : props.onAdd(note);

    event.preventDefault();
    
    setNote({
      title: '',
      content: ''
    })

  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder={placeHolder} value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
