import axios from "axios";
import { ICreateTask, ISetError, TaskList } from './Types';


export default function PostData(values: ICreateTask, setStateError: ISetError){
    return axios
        .post<ICreateTask>("https://localhost:44331/api/Tasks",
        {
            name: values.name,
            description: values.description,
            isCompleted: values.isCompleted    
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .catch(ex => {
            const error = 
            ex.response.status === 404 ? "Resource Not Found" : "An unexpected error has occured";
            setStateError(error);
        })
}