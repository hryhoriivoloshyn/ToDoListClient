import { Checkbox } from "antd"
import PutData from "./PutData"
import { IUpdateTaskProps } from "./Types"
import { useTasks } from "../Store/Store"

export default function ChangeTaskState(prop: IUpdateTaskProps){
    const [state, actions] = useTasks()

    function onChangeHandler(e: any){
        prop.task.isCompleted=e.target.checked;
        PutData(prop.task, actions.setError).then(()=>actions.setData());
        
    }

    return(
        <Checkbox onChange={onChangeHandler} defaultChecked={prop.task.isCompleted}>
            Task completed
        </Checkbox>
    )
}