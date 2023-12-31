/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Header from "./component/header";
import Footer from "./component/footer";
import Symptoms from "./component/symptoms/symptoms";

function App() {
  return (
    <div className="">
      {/* <Navbar />
      <Header /> */}
      <Symptoms />
    </div>
  );
}

export default App;
