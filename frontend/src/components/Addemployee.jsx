import React, { useState } from 'react'
import  axios from "axios";

const Addemployee = () => {
  const [formData, setFormData] =
  useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    designation: ''
  })
  

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      designation: ''
    })
  };

  const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/employee/store",
          formData
        );
        alert("New Employee Added Successfully");
        resetForm();
      } catch (e) {
        console.log(e);
      }
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Employee</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        {["firstName", "lastName", "email", "contact", "designation"].map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium capitalize text-gray-600">{field}</label>
            <input
              type="text"
              name={field}
              id={field}
              placeholder= {field}
              value={formData[field]}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
        <button
          type="submit" id='submit' name='submit' value='submit'
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
        Add Employee
        </button>
      </form>
    </div>
  )
}

export default Addemployee
