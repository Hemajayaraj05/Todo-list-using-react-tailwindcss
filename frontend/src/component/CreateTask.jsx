import TextField from "@mui/material/TextField";
import { Button, MenuItem, Select, InputLabel } from "@mui/material";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("average");
  const [status, setStatus] = useState("yet-to-complete");
  const handleSubmit = () => {
    const task = {
      title,
      Description,
      date,
      time,
      priority,
      status,
    };

    onAddTask(task);

    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setPriority("average");
    setStatus("yet-to-complete");
  };

  const handleNavigatetoListing=()=>{
         navigate('/dashboard');
  }
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
       <h1 className="font-bold">Create a Task</h1>
    <div className="flex flex-col gap-2 border p-10">
     
      <TextField
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        type="text"
        placeholder="Task Discription"
        value={Description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <TextField
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <TextField
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />

      <InputLabel>Priority</InputLabel>
      <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <MenuItem value="most">Most</MenuItem>
        <MenuItem value="average">Average</MenuItem>
        <MenuItem value="least">Least</MenuItem>
      </Select>

      <InputLabel>Status</InputLabel>
      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="yet-to-complete">Yet to Complete</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
      </Select>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#072543ff",
          "&:hover": { backgroundColor: "#020406ff" },
        }}
        onClick={handleSubmit}
      >
        Save Task
      </Button>

       <Button
        variant="contained"
        sx={{
          backgroundColor: "#072543ff",
          "&:hover": { backgroundColor: "#020406ff" },
        }}
        onClick={handleNavigatetoListing}
      >
      Move to Listing Screen
      </Button>
    </div>
    </div>
  );
}
export default CreateTask;
