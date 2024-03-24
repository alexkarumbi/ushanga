"use client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Profiles = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/beadprofiles-endpoint");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetchig data", error);
      }
    };
    fetchData();
  }, []);

  //   if(!users){
  //     return(
  //         <div>Loading...</div>
  //     )
  //   }

  return (
    <div>
      <div className="text-xl text-white mb-2 bg-red-500 p-4 rounded">
        <h1 className="text-white">Bead master profiles</h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row items-center h-2 w-96 mt-4 p-2">
          <img
            className="w-12 h-12 rounded-full ml-2 "
            src={"users.profilePicture"}
            alt="user.profilePicture"
          />
          <h1 className="text-sm font-bold mt-4 ml-2">{"users.name"}</h1>
          <h2 className="text-sm ml-2 font-bold mt-4">{"users.speciality"}</h2>
        </div>
        <div className="w-full">
          <div className=" bg-black flex- shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
              <img
                className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 text-white rounded-full"
                src={"users.profilePicture"}
                alt="User avatar"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-xl text-white leading-tight">{"users.name"}</p>
                <p className="text-sm text-white leading-tight text-grey-dark">DOB:
                  {"Users.DOB"}
                </p>
                <p className="text-sm text-white leading-tight text-grey-dark">Co-operative:
                  {"Users.Co-operative"}
                </p>
               
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-6 py-4 ">
                <h3 className="font-bold text-white text-xl text-whitemb-2">Story</h3>
                <p className="text-white">{'users.story'}</p>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-bold text-white text-xl mb-2">BeadMaster Documents</h3>
                <p className="text-white">{'users.id'}</p>
                <p className="text-white">{'users.birthcertificate'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
