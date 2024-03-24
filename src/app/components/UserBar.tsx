"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const UserBar = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("/user-endpoint")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  //   if (!users) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="flex flex-col items-center bg-black text-white p-4 ml-36">
      <div className="mt-10">
        <img
          className="w-24 h-24 rounded-full mb-4"
          src={"users.profilePic"}
          alt="User Profile Picture"
        />
        <h2 className="text-lg p-1">{"users.name"} </h2>
        <p className="text-sm mb-4 p-1">{"users.role"}</p>
        <ul>
          <li className="p-1">
            <Link href={"/password-renewal"}>Password Renewal</Link>
          </li>
          <li className="p-1">
            <Link href={"/register"}>New User</Link>
          </li>
          <li className="p-1">
            <Link href={"/"}>Logout</Link>
          </li>
        </ul>
        <p className="text-sm mt-4 p-2">Last login : {'users.lastLogin'} </p>
      </div>
    </div>
  );
};

export default UserBar;
