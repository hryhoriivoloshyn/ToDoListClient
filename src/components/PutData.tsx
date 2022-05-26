import axios from "axios";
import { ITask, ISetError, TaskList } from './Types';
import {useTasks} from '../Store/Store';

export default function PutData(values: ITask, setStateError: ISetError){
    return axios
        .put<ITask>(`https://localhost:44331/api/Tasks/${values.id}`,
        {
            id: values.id,
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