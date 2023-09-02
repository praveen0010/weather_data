import React from "react";

const Form = ({ search, setSearch, handelsubmit }) => {
  return (
    <div>
      <form
        className="form"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          autoFocus
          placeholder="entr city"
          type="text"
          required={true}
        />
        <button onClick={() => handelsubmit()}>Search</button>
      </form>
    </div>
  );
};

export default Form;
