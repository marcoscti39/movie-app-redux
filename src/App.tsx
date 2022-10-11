import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionOfContent from "./components/SectionOfContent";
import Home from "./pages";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie-details/:movieName/:movieId"
          element={<MovieDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
