import React from "react";
import Api from "./components/Api/Api";
import Card from "./components/Card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Api></Api>
      <Footer></Footer>
    </div>
  );
};

export default App;
