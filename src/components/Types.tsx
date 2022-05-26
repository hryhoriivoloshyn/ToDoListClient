export interface ITask {
    id: number,
    name: string | null,
    description: string | null,
    isCompleted: boolean
}

export type TaskList = ITask[];

export interface ISetData{
    (taskList: TaskList) : void
}

export interface ISetError{
    (error: string) : void
}

export interface ICreateTask {
    name: string;
    description: string;
    isCompleted: boolean;
}

export interface IUpdateTask {
    id: number;
    name: string;
    description: string;
    isCompleted: boolean;
}

export interface IUpdateTaskProps{
    task: ITask
}