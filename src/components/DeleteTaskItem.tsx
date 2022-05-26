import { Button } from "antd";
import DeleteData from "./DeleteData"
import {useTasks} from '../Store/Store';

interface IDeleteTaskItemProp{
    taskId: number
}

export default function DeleteTaskItem(prop: IDeleteTaskItemProp){
    const [state, actions] = useTasks()

    function onClickHandler(){
        DeleteData(prop.taskId, actions.setError).then(()=>actions.setData());
    }

    return (
        <Button onClick={() => onClickHandler()} type="primary" danger>
            Delete
        </Button>
    )
}