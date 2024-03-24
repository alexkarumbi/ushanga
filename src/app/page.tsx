'use client'
import React from "react";
import Login from "./login/Login";

const onLogin = (username: string, password: string) => {
  // code to handle login goes here
};

const onCreateNewUser = (username: string, password: string) => {
  // code to handle create new user goes here
};

export default function Home() {
  return (
    <div>
      <Login onLogin={onLogin} onCreateNewUser={onCreateNewUser} />
    </div>
  );
}