import './App.css';
import AddTodo from './components/AddTodo';
import TodoActionButtons from './components/TodoActionButtons';
import ViewTodo from './components/ViewTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ViewTodo />
      <TodoActionButtons />
    </div>
  );
}

export default App;
