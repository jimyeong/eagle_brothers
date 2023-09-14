import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
import { useGlobalAppContext } from "../contexts/GlobalAppContext";
import AddItem from "./ui/AddItem";

const HomePage = () => {
  const context = useGlobalAppContext();
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold">hello world</h1>{" "}
      <Link to="about">About us</Link>
      <button onClick={() => {}}>btm</button>
      <AddItem taskId="aduwhdi" taskValue="hell worold" />
    </React.Fragment>
  );
};

export default HomePage;
