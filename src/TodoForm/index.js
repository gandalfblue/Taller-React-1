import React, {useState} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { useForm } from "react-hook-form";
import { FaClipboardList, FaWindowClose, FaExclamationCircle } from "react-icons/fa";

function TodoForm() {
  //const [newTodoValue, setNewTodoValue] = React.useState('');

  const [errorMessage, setErrorMessage] = useState(false)

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const {
    handleSubmit
  } = useForm();
  
  const onChange = (event) => {
    if (event.target.value.length > 0){
      setErrorMessage(false)
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

 
  const onSubmit = (data) => {
    if (data.toDo){ 
      addTodo(data.toDo);
      setOpenModal(false);
      return;
    }
    setErrorMessage(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
       // value={newTodoValue}
        onChange={onChange}
        placeholder= "Cortar la cebolla oara el almuerzo"
        name='toDo'
      />
      <span className="errorMessage">
        { errorMessage ? "❗ No puedes enviar info vacio"  : " " }
      </span>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          <FaWindowClose/> Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          <FaClipboardList/> Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
