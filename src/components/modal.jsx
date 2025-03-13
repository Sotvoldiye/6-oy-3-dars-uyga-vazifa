import "../index.css"

const Modal = ({t, setShowModal, deleteTitle})=>{
    return (
        <div className="modal">
            <p>Do you want to delete, {t.title}</p>
           <div className="modal_button ">
           <button className="border border-amber-50 rounded-md py-1 px-3 mr-2 mt-29 ml-67" onClick={()=> deleteTitle(t.id)}>Ha</button>
           <button onClick={()=>setShowModal(false)} className="border border-amber-50 rounded-md py-1 px-3">Yo'q</button>
           </div>
        </div>
    )
}

export default Modal