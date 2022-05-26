import axios from "axios";
import { ISetData, ISetError, TaskList } from './Types';


export default function DeleteData(taskId: number, setStateError: ISetError ){
    return axios
        .delete<TaskList>(`https://localhost:44331/api/Tasks/${taskId}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .catch(ex => {
            const error = 
            ex.response.status === 404 ? "Resource Not Found" : "An unexpected error has occured";
            setStateError(error);
        });
}