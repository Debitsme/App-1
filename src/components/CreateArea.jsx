import React, {useState} from "react";

function CreateArea(props) {


var [namee, setname]=useState({
  title:"",
  content:""
});

function Aloha(e){
  var {name, value}=e.target;

  setname((prevValue)=>{
return{
  ...prevValue,
  [name]:value
}
  })
};
function clickd(e){
  props.hello(namee);
  setname({
    title:"",
    content:""
  })
e.preventDefault()
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={Aloha} value={namee.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={Aloha} value={namee.content}/>
        <button onClick={clickd} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
