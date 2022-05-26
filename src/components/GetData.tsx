import axios from "axios";
import { ISetData, ISetError, TaskList } from './Types';


export default function GetData(setStateData: ISetData, setStateError: ISetError){
    return axios
        .get<TaskList>("https://localhost:44331/api/Tasks",
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            setStateData(response.data);
        })
        .catch(ex => {
            const error = 
            ex.response.status === 404 ? "Resource Not Found" : "An unexpected error has occured";
            setStateError(error);
        });
}