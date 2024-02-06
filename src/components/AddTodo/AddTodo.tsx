interface AddTodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ todo, setTodo }) => {
  const handleClick = () => {
    console.log(todo);
    setTodo('');
  };

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      console.log(todo);
      setTodo('');
    }
  };
  return (
    <div>
      <input
        value={todo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type='text'
        placeholder='Görev Ekleyiniz.'
      />
      <button onClick={handleClick} type='button'>
        Ekle
      </button>
    </div>
  );
};

export default AddTodo;
