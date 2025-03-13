function FormInputs({ setText, handleSubmit, text, error, name, setName, errorName }) {
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col w-md">
        <div className="flex flex-col w-md">
        <input
          type="text"
          onChange={(e) => {
            const inputText = e.target.value;
            setName(inputText);
          }}
          value={name}
          placeholder="Write your name"
          className="border outline-none focus:border-red-500 border-red-400 py-1 px-4 rounded-md"
        />
        {errorName && <p className="text-red-700 mt-0 pt-0">{errorName}</p>}

        </div>
        <div className="flex flex-col w-md">
        <input
          type="text"
          onChange={(e) => {
            const inputText = e.target.value;
            setText(inputText);
          }}
          value={text}
          placeholder="Send the message"
          className="border outline-none focus:border-red-500 border-red-400 py-1 px-4 rounded-md"
        />
      {error && <p className="text-red-700">{error}</p>}

        </div>
        
        <button className="border border-red-400 bg-green-300 py-1 px-2 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}

export default FormInputs;
