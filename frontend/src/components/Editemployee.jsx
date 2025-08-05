import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Editemployee = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOneDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/employee/edit/${id}`
        );
        setFirstName(response.data.result.firstName);
        setLastName(response.data.result.lastName);
        setEmail(response.data.result.email);
        setContact(response.data.result.contact);
        setDesignation(response.data.result.designation);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
    fetchOneDetails();
  }, []);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { firstName, lastName, email, contact, designation };
      const response = await axios.put(
        `http://127.0.0.1:5000/employee/update/${id}`,
        data
      );
      alert("Your Record Updated Successfully");
      navigate("/allemployees");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit Employee</h2>
      <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium capitalize text-gray-600">firstName</label>
            <input
              type="text"
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium capitalize text-gray-600">'lastName'</label>
            <input
              type="text"
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium capitalize text-gray-600">'email'</label>
            <input
              type="text"
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium capitalize text-gray-600">'contact'</label>
            <input
              type="text"
              name='contact'
              id='contact'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium capitalize text-gray-600">'designation'</label>
            <input
              type="text"
              name='designation'
              id='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        <button
          type="submit" id='submit' name='submit' value='Update'
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Employee
        </button>
      </form>
    </div>
  )
}

export default Editemployee
