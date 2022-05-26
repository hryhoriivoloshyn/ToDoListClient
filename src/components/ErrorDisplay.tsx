import { Alert }from 'antd';
import { useTasks } from '../Store/Store';

export default function ErrorDisplay(){
    const [state, actions] = useTasks()

    return (
        <div>
            {
            state.Error &&
            <Alert
                message="Error"
                description={state.Error.toString()}
                type="error"
                showIcon
            />
            }
        </div>
        
    )
}