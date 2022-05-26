import { Card, Space }from 'antd';
import { ITask, TaskList } from './Types';
import {EditTaskButton} from './EditTaskItem'
import DeleteTaskItem from './DeleteTaskItem';
import ChangeTaskState from './ChangeTaskState';

interface ITaskItemProp{
    task: ITask
}

export default function TaskItem(prop : ITaskItemProp){
    return (
        <Card className="TaskItem" type="inner" title={prop.task.name}>
            <Space size="small" direction="vertical">
                <p>{prop.task.description}</p>
                <ChangeTaskState task={prop.task} />
                <EditTaskButton task={prop.task} />
                <DeleteTaskItem taskId={prop.task.id} />
            </Space>
                
        </Card>

    );
}