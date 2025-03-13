import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import TitlesList from "./components/titlelist";
import FormInputs from "./components/form";

const initalValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("")
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState(false)
  const [titles, setTitles] = useState(initalValue());
  const [edit, setEdit] = useState('')


// const edited = ()=>{
 
// }
// setEdit(edited)
  useEffect(() => {
    let s;
    if (error) {
      s = setTimeout(() => {
        setError(false);
        console.log(1);
      }, 5000);
    } else {
      setError(true);
    }
    let b;
    if (errorName) {
      b = setTimeout(() => {
        setErrorName(false);
        console.log(1);
      }, 5000);
    } else {
      setErrorName(true);
    }

    if (text && text.trim().length >= 4) {
      setError(false);
    }

    if(name && name.trim().length >= 3){
      setErrorName(false)
    }
    return () => clearTimeout(s);
  }, [error, text, name, errorName]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  });

  const deleteTitle = (id) => {
    const filteredTitle = titles.filter((t) => t.id != id);
    setTitles(filteredTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length == 0){
      setErrorName("Write your name please")
    } else if (name.trim().length < 3){
      setErrorName("Write your really name :)")
    } else if (text.trim().length == 0) {
      setError("Write Something Please :(");
    }  else if (text.trim().length < 4) {
      setError("Write more then 4 charceter!!!");}
    else {
      setTitles([
        ...titles,
        {
          title: text,
          id: Math.random(),
          name: name
        },
        
      ]);

      setText("");
      setName("")
      setError(false);
      setErrorName(false)
    }
  };

 

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col text-left">
        <h1 className="items-start text-lg">Send the message</h1>
        <FormInputs
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          error={error}
          name={name}
          setName={setName}
          errorName= {errorName}
          
        />
        <ul className="flex flex-col gap-6 mt-4">
          {!titles.length && <h2>You Don't have any Message 🧐</h2>}
          {titles.length > 0 && (
            <TitlesList titles={titles} deleteTitle={deleteTitle} />
          )}
        </ul>
      </div>
    </div>
  );
}
export default App;
