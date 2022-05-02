import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { useForm } from "react-hook-form";
import { FaClipboardList } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

function TodoForm() {
  //const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  
  /* const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }; */
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    addTodo(data);
    setOpenModal(false);
    event.target.reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
       // value={newTodoValue}
       // onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
        name='toDo'
        {...register("toDo", {
          required: {
            value: true,
            message: "Nombre obligatorio",
          },
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.username?.message}
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
