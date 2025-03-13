import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import TitlesList from "./components/titlelist";
import FormInputs from "./components/form";

const initalValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState(initalValue());
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
    if (text && text.length >= 4) {
      setError(false);
    }
    return () => clearTimeout(s);
  }, [error, text]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  });

  const deleteTitle = (id) => {
    const filteredTitle = titles.filter((t) => t.id != id);
    setTitles(filteredTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length == 0) {
      setError("Wrie Something Please :(");
    } else if (text.trim().length < 4) {
      setError("Write more then 4 charceter");
    } else {
      setTitles([
        ...titles,
        {
          title: text,
          id: Math.random(),
        },
      ]);

      setText("");
      setError(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col text-left">
        <h1 className="items-start text-lg">Malumot kirting</h1>
        <FormInputs
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          error={error}
        />
        <ul className="flex flex-col gap-6 mt-4">
          {!titles.length && <h2>You Don't have any title's</h2>}
          {titles.length > 0 && (
            <TitlesList titles={titles} deleteTitle={deleteTitle} />
          )}
        </ul>
      </div>
    </div>
  );
}
export default App;
