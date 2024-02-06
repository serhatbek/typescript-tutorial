import { TodosProps } from '../../Types/Types';

interface TodoListProps {
  todos: TodosProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => {
        return <p key={item.id}>{item.message}</p>;
      })}
    </div>
  );
};

export default TodoList;
