import TextField from "@mui/material/TextField";
import { useState } from "react";

function CreateTask() {


    const [title,setTitle]=useState("");
    const [Description,setDescription]=useState(""); 

  return (
    <div className="flex flex-col gap-2">

     
      <TextField
       type="text"
       placeholder="Task Title" 
       value={title}
       onChange={(e)=>{setTitle(e.target.value)}}
       />
      <TextField type="text"
       placeholder="Task Discription" 
       value={Description}
       onChange={(e)=>{setDescription(e.target.value)}}
       />
    </div>
  );
}
export default CreateTask;
