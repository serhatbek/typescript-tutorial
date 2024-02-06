import { TodosProps } from '../../Types/Types';

interface TodoListProps {
  todos: TodosProps[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              marginTop: '20px',
              height: '25px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item.message}
            <div>
              <span onClick={() => deleteTodo(item.id)} className='btn'>
                Delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
