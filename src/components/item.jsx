import { useState } from "react";
import Modal from "./modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />}
      <li className="bg-red-100 flex justify-between items-center py-2 px-4 rounded-md">
        <div className="">
        <p><span className="text-gray-400">Your name:</span> {t.name}</p>
        <p><span className="text-gray-400">Your message:</span> {t.title}</p>
        </div>
       <div className="flex gap-1">
       <button  className="text-red-400 border border-red-500 py-1  rounded-md active:scale-90 transition transform duration-150">Edit ✏</button>
        <button onClick={() => setShowModal(true)} className="text-red-400 border border-red-500 py-1 px-2 rounded-md active:scale-90 transition transform duration-150">
          Delete</button>
       </div>
          
      </li>
    </>
  );
}

export default Item;
