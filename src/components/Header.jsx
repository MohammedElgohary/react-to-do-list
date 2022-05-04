import React from "react";
import { BiTask, BiTaskX } from "react-icons/bi";

const Header = () => (
  <header className="d-flex flex-row align-items-center justify-content-around p-5 bg-primary text-white">
    <h1>Tasks App</h1>
    <div className="d-flex flex-row">
      <div className="border p-2 rounded-circle mx-2">
        <span>{5}</span>
        <BiTask />
      </div>
      <div className="border p-2 rounded-circle">
        <span>{5}</span>
        <BiTaskX />
      </div>
    </div>
  </header>
);

export { Header };
