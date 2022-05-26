import AddTaskItem from './components/AddTaskItem';
import ErrorDisplay from './components/ErrorDisplay';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ErrorDisplay />
      <AddTaskItem/>
      <ToDoList/>
    </div>
  );
}

export default App;
