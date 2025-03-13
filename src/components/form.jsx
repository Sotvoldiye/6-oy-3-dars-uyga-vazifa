function FormInputs({ setText, handleSubmit, text, error }) {
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          onChange={(e) => {
            const inputText = e.target.value;
            setText(inputText);
          }}
          value={text}
          placeholder="Malumot kiriting"
          className="border outline-none focus:border-red-500 border-red-400 py-1 px-4 rounded-md"
        />
        <button className="border border-red-400 py-1 px-2 rounded-md">
          Add
        </button>
      </form>
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
}

export default FormInputs;
