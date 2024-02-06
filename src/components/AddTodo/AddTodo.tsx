interface AddTodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ todo, setTodo, addTodo }) => {
  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (todo === '') return;
    if (e.key === 'Enter') {
      addTodo();
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
      <button onClick={addTodo} type='button'>
        Ekle
      </button>
    </div>
  );
};

export default AddTodo;
