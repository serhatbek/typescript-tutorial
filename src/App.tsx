import { useId, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import { TodosProps } from './Types/Types';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodosProps[]>([]);

  const addTodo = () => {
    console.log('first', todos);
    if (todos) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo('');
  };

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
