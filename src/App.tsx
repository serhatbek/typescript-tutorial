import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
    </>
  );
};

export default App;
