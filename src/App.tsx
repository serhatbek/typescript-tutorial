import { useState } from 'react';
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

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};

export default App;
