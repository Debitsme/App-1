import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [stop, setstop] = useState([]);
  function lopd(notes) {
    setstop((prevValue) => {
      return [...prevValue, notes];
    });  }
  function Delete(id){
setstop(prevNotes=>{
  return prevNotes.filter((neww, index) => {
    return index !== id;
  });
})}
  return (
    <div>
      <Header />
      <CreateArea hello={lopd} />
      
      {stop.map((neww, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={neww.title} content={neww.content}
            skdfi={Delete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
