import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243.0.5)",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          {/*     <Route path="/login" element={<Login />} /> */}
          <Route path="/thank" element={<Thanks />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
