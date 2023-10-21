import { useState } from "react";
import Modal from "./common/Modal";
import { editNote } from "../services";

const EditNoteModal = (props) => {
  const [form, setForm] = useState({
    title: props.note.title,
    description: props.note.description,
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
      const id = props.note._id;
      await editNote(id, form);
      props.onEdit();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <h3>Edit Note</h3>

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleInputOnChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          value={form.description}
          onChange={handleInputOnChange}
        />
      </div>
      <div>
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={props.onClose}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default EditNoteModal;
