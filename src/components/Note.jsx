import React from "react";

function Note(props) {

function onDelelete(){
  props.skdfi(props.id)
}

  return (
 <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDelelete} >DELETE</button>
    </div>
  );
}

export default Note;
