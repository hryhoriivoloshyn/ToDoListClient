import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd'
import {useTasks} from '../Store/Store'
import PostData from './PostData';
import { ICreateTask } from './Types';


export default function AddTaskItem(){
    const [state, actions] = useTasks()

    const onFinish = (values : ICreateTask)=>{
        PostData(values, actions.setError).then(()=>actions.setData());
    }

    return (
      <div className="AddTaskForm">
  <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter name of the task',
              },
              {
                max: 50,
                message: "Name of the task should be less than 50 characters",
              }
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                max: 200,
                message: "Task description should be less than 200 characters",
              }
            ]}
          >
            <Input.TextArea />
          </Form.Item>
    
          <Form.Item
            name="isCompleted"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Task completed</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
      );
}