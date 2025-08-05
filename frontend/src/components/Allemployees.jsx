import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";

const Allemployees = () => {

  const [result, setResult] = useState([]);
  
    const fetchAllEmployees = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/employee/all");
        setResult(response.data.result);
      } catch (e) {
        console.log(e);
      }
    };
  
    const deleteRecord = async (id) => {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:5000/employee/delete/${id}`
        );
        fetchAllEmployees();
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchAllEmployees();
    }, []);

  return (
    <div className="max-w-5xl mx-auto">
       <div className="flex justify-between items-center mb-6">
         <h2 className="text-2xl font-semibold text-gray-700">All Employees</h2>
         <Link to="/Addemployee" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
           Add Employee
         </Link>
       </div>
       <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">FirstName</th>
              <th className="py-2 px-4">LastName</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Contact</th>
              <th className="py-2 px-4">Designation</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row) => (
              <tr className="border-t" key={row._id}>
                <td className="py-2 px-4">{row._id}</td>
                <td className="py-2 px-4">{row.firstName}</td>
                <td className="py-2 px-4">{row.lastName}</td>
                <td className="py-2 px-4">{row.email}</td>
                <td className="py-2 px-4">{row.contact}</td>
                <td className="py-2 px-4">{row.designation}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/Editemployee/${row._id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Edit
                  </Link>
                  <button type="button"
                value="delete"
                onClick={() => {
                  deleteRecord(row._id);
                }} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  )
}

export default Allemployees
