import axios from 'axios';
import React from 'react'
import { Card, Space, Row, Col }from 'antd';
import TaskItem from './TaskItem';
import { ITask, TaskList } from './Types';
import GetData from './GetData';
import {useTasks} from '../Store/Store';

const defaultTasks : TaskList = [];

export default function ToDoList(){
    const [state, actions] = useTasks()

    React.useEffect(() => {
        actions.setData();
    }, []);

    return (
            <Row>
                <Col className="gutter-row" span={8} offset={2}>
                        <Card className="TaskList" title="Planned tasks">
                            <Space className="scrollable-container" direction="vertical" size="middle" style={{ display: 'flex' }}>
                                    {state.TaskList.map((task : ITask) => (
                                        !task.isCompleted && <TaskItem key={task.id} task={task}></TaskItem>
                                    ))}
                            </Space>
                        </Card>
                </Col>
                <Col className="gutter-row" span={8} offset={2}>
                    <Card className="TaskList" title="Finished tasks">
                        <Space className="scrollable-container" direction="vertical" size="middle" style={{ display: 'flex' }}>
                            {state.TaskList.map((task : ITask) => (
                                task.isCompleted && <TaskItem key={task.id} task={task}></TaskItem>
                            ))}
                        </Space>
                    </Card>
                </Col>
            </Row>
    );
}