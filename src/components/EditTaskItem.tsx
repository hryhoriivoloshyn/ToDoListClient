import React from 'react';
import { Button, Modal, Form, Input, Checkbox} from 'antd';
import { ITask, IUpdateTaskProps } from './Types';
import PutData from './PutData';
import {useTasks} from '../Store/Store';

const TaskEditForm = ({ visible, onCreate, onCancel, task } : any) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Edit your task"
      okText="Edit"
      cancelText="Cancel"
      onCancel={() =>{
        form.resetFields();
        onCancel();
      } }
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="id"
          label="Id"
          initialValue={task.id}
          hidden={true}
          >
          <Input />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          initialValue={task.name}
          rules={[
            {
              required: true,
              message: 'Please input name of the task!',
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
          name="description"
          label="Description"
          initialValue={task.description}
          rules={[
            {
              max: 200,
              message: "Task description should be less than 200 characters",
            }
          ]}
        >
          <Input type="textarea" />
        </Form.Item>

        <Form.Item
            name="isCompleted"
            valuePropName="checked"
            initialValue={task.isCompleted}
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Task completed</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};



export const EditTaskButton = (props : IUpdateTaskProps) => {
  const [state, actions] = useTasks()

  const [visible, setVisible] = React.useState(false);

  const onCreate = (values : ITask) => {
    PutData(values, actions.setError).then(()=>actions.setData());
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit
      </Button>
      <TaskEditForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        task={props.task}
      />
    </div>
  );
};




