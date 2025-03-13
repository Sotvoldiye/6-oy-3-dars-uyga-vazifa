 import Modal from "./modal";
import Item from "./item";
function TitlesList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((t) => {
      return <Item key={t.id} t={t} deleteTitle={deleteTitle}/>
      })}
    </>
  );
}

export default TitlesList;
