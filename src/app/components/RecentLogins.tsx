import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const RecentLogins = () => {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/user-endpoint");
//         setUsers(response.data);
//       } catch (error) {
//         console.log("Error fetching user data", error);
//       }
//     };
//     fetchData();
//   }, []);
const [users, setUsers] = useState(null);

useEffect(() => {
  axios
    .get("/users-endpoint")
    .then((response) => setUsers(response.data))
    .catch((error) => console.error("Error fetching user data", error));
}, []);


    // if (!users) {
    //   return <div>Loading...</div>;
    // }

  return (
    <div className="flex flex-col mb-5">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-0.5">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  User Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {users?.map((user, personID) => (
              ))} */}
                <tr key={'personID'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {"users.name"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.Type'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.date'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    {'user.status'}
                  </td>
                </tr>
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {users?.map((user, personID) => (
              ))} */}
                <tr key={'personID'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {"users.name"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.Type'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.date'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    {'user.status'}
                  </td>
                </tr>
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {users?.map((user, personID) => (
              ))} */}
                <tr key={'personID'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {"users.name"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.Type'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.date'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    {'user.status'}
                  </td>
                </tr>
            </tbody>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {users?.map((user, personID) => (
              ))} */}
                <tr key={'personID'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {"users.name"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.Type'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {'users.date'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    {'user.status'}
                  </td>
                </tr>
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentLogins;
