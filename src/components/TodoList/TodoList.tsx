import { todoItemsProps } from '../../Types/Types';

interface TodoListProps {
  todoItems: todoItemsProps[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoItems, deleteTodo }) => {
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {todoItems.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item.message}
            <div>
              <span onClick={() => handleDelete(item.id)} className='btn'>
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
