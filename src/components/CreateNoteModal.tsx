import { useState } from "react";
import Modal from "./Modal";
import { createNote } from "../services";

const CreateNoteModal = (props) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  function handleInputOnChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleAccept() {
    try {
      await createNote(form);
      props.onCreate();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <h3>Create Note</h3>

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputOnChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          onChange={handleInputOnChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={props.onClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default CreateNoteModal;
