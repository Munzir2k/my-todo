import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (title.length === 0 || desc.length === 0) {
      alert("Title and Description missing");
    }
    addTodo(title, desc);
  };
  return (
    <div className="container ">
      <h4>Add list</h4>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            To do title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            To do Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Add To do
        </button>
      </form>
    </div>
  );
};
