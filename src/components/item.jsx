import { useState } from "react";
import Modal from "./modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />}
      <li className="bg-red-100 flex justify-between items-center py-2 px-4 rounded-md">
        <p>{t.title}</p>
        <button onClick={() => setShowModal(true)} className="text-red-400 border border-red-500 py-2 px-4 rounded-md active:scale-90 transition transform duration-150">Delete</button>
      </li>
    </>
  );
}

export default Item;
