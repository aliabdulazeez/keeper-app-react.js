import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    newNote.title && setNotes((prevNote) =>{
      return [...prevNote, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevNote =>{
      return prevNote.filter((note, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />

      <CreateArea 
      onAdd={addNote}
       />

      <div>
        {notes.map((item, index) =>(
            <Note 
            id={index}
             key={index} 
             title={item.title} 
             content={item.content} 
             delete={deleteNote}
             />
      
        ))}
      </div>
     

      <Footer />
    </div>
  );
}

export default App;
