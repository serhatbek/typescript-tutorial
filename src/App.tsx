import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import { todoItemsProps } from './Types/Types';
import TodoList from './components/TodoList/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoItems, setTodoItems] = useState<todoItemsProps[]>([]);

  const addTodo = () => {
    if (todo === '') return;
    if (todoItems)
      setTodoItems([...todoItems, { message: todo, id: todoItems.length + 1 }]);
    setTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} todoItems={todoItems} />
    </>
  );
};

export default App;
