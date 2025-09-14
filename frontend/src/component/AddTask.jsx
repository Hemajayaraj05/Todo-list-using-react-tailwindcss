import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom"


function AddTask() {
  const navigate=useNavigate();

  const handleNavigation=()=>{
    navigate('/add-task');
  }
  return (
    <div className="flex justify-around  m-10 border-2 p-2">
      <div className="flex justify-center w-1/2 border-2 p-2">
        <Button
          className="h-10"
          variant="contained"
          size="medium"
          color="success"
          onClick={handleNavigation}

        >
          Add Task
        </Button>
      </div>
      <div className="flex  justify-center w-1/2 border-2">
        <p>Sort By : </p>
      </div>
    </div>
  );
}

export default AddTask;
