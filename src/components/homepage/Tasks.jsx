
import { useQuery, useQueryClient} from "@tanstack/react-query";
import {db} from '../../firebaseConfig/firebase';
import { getDocs, collection, addDoc } from "firebase/firestore";
import { useState } from "react";


const Tasks = () => {   
    const [newTask, setNewTask] = useState({
        taskName: '',
        isCompleted: false,
    });

    const queryClient = useQueryClient();


    const taskCollectionRef = collection(db, "tasks")

    const getTaskList = async () => {
        try{
            
            const data = await getDocs(taskCollectionRef)
            const filteredData = data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));

            return filteredData;
        }
        catch(error){
            console.error(error.message);
        }
    }

    const {data} = useQuery({
        queryKey: ['tasks'],
        queryFn: getTaskList,
    })

    const handleAddTask = async (e) => {
        e.preventDefault();
        try{
            await addDoc(taskCollectionRef, newTask);
            queryClient.invalidateQueries({queryKey: ['tasks']});
        }

        catch(error){
            console.error(error.message)
        }

    }

    const handleChange = (e) =>{
        setNewTask({...newTask, taskName: e.target.value});
    }


   
  return (
    <>  
        
        <form onSubmit={handleAddTask} method="POST">
            <label htmlFor="taskname">Task Name</label>
            <input 
            type="text" 
            className="border border-blue-400 p-1"
            value={newTask.taskName}
            onChange={handleChange}
            />

            <button type="submit"
            className="bg-blue-500 p-2 rounded mx-2"
            >Add Task</button>
        </form>

        <div className="text-center">Tasks</div>

        <ul>
           {data?.map(task => (
                <li
                key={task.id}
                className= {task.isCompleted === true ? 'text-green-800' : ''}
                >{task.taskName}</li>       

           ))}
        </ul>
    </> 
    
  )
}

export default Tasks