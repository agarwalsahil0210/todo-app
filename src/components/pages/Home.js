import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get(
      "https://todo-app-devsnest.vercel.app/items"
    );
    setItem(result.data.reverse());
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
                <td>{item.dueDate}</td>
                {/* <td>
                  <Link class="btn btn-primary mr-4">View</Link>
                  <Link class="btn btn-outline-primary mr-2" to="/users/edit">
                    Edit
                  </Link>
                  <Link class="btn btn-danger">Delete</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
