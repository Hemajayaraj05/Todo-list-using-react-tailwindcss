import Button from '@mui/material/Button';
import ListTask from './ListTask';
function AddTask(){
    return (
        <>
        <div className='flex justify-around m-20 border-2 p-2'>
             <div>
           <Button variant="contained" size="medium" color="success">Add Task</Button>
        </div>
        <div>
            <p>Sort By : </p>
        </div>
        
        </div>
        <ListTask/>
        </>
       
    )
}

export default AddTask;