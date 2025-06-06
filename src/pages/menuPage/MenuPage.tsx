import React, { useState } from "react";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Main from "../../components/menuPageComponents/main/Main";

const MenuPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MenuPage;