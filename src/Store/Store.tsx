import { createStore, createHook, createContainer } from 'react-sweet-state';
import GetData from '../components/GetData';
import {TaskList} from '../components/Types'
import axios from 'axios';

const defaultTasks : TaskList = [];

const Store = createStore({
    initialState: {
        TaskList: defaultTasks,
        Error: ""
    },
    
    actions: {
        setData: 
            () =>
            ({setState, getState}) => {
                axios
                    .get<TaskList>("https://localhost:44331/api/Tasks",
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    .then(response => {
                        setState({ TaskList: response.data});
                    })
                    .catch(ex => {
                        const error = 
                        ex.response.status === 404 ? "Resource Not Found" : "An unexpected error has occured";
                        const currentTasks = getState().TaskList;
                        setState({ TaskList: currentTasks, Error: error});
                    });
            },
        setError:
            (error: any) =>
            ({setState, getState}) => {
                const currentTasks = getState().TaskList;
                setState({ TaskList: currentTasks, Error: error});
            }
    }
}) 
 
export const useTasks = createHook(Store)

export default Store

