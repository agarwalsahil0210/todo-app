import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddItem = () => {
  let history = useHistory();
  const [item, setItem] = useState({
    id: "",
    title: "",
    description: "",
    status: "To Do",
    createdAt: "",
    updatedAt: "",
    dueDate: "",
  });

  const { id, title, description, status, createdAt, updatedAt, dueDate } =
    item;
  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log("hey", e);
    e.preventDefault();
    await axios.post("https://todo-app-devsnest.vercel.app/items", item);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an item</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ID"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the due date"
              name="dueDate"
              value={dueDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
