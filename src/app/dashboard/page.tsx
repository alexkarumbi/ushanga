"use client";
import React from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import { url } from "inspector";
import UserBar from "../components/UserBar";
import { useEffect, useState } from "react";
import axios from "axios";
import RecentLogins from "../components/RecentLogins";
import Profiles from "../components/Profiles";

const page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/profiles-endpoint")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  // if(!data){
  //   return(
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }

  return (
    <div className="">
      <Header />
      <div
        className="h-full w-full flex   "
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: "cover",
          position: "relative",
          left: 0,
          height: "calc(100vh)",
          //width: '100%',
          zIndex: -1,
        }}
      >
        <UserBar />
        <div className="p-4 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white text-black p-4 border-green-800 border-2 rounded">
              <p className="font-bold">Registered Clerks</p>
              <h2 className="text-2xl text-yellow-400">
                {"data.registeredClerks"}
              </h2>
            </div>
            <div className="bg-white text-black p-4 border-green-800 border-2 rounded">
              <p className="font-bold">Beadmasters</p>
              <h2 className="text-2xl text-green-600">{"data.beadmasters"}</h2>
            </div>
            <div className="bg-white text-black p-4 border-green-800 border-2 rounded">
              <p className="font-bold">Pending Profiles</p>
              <h2 className="text-2xl text-red-500">
                {"data.pendingProfiles"}
              </h2>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl text-white mb-2 bg-green-800 p-4 rounded">
              Recent Logins
            </h2>
            <RecentLogins />
          </div>
          <div>
            <Profiles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
