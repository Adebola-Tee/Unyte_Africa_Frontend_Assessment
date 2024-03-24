import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "matchmedia-polyfill";
import React, { Suspense } from "react";
import { NotFound, ProductDetails, Navbar, Footer, } from "./components";
import Loader from "../src/components/atoms/Loader";
import {ScrollToTop,} from "../src/components/atoms";
import Contact from "./pages/Contact";
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Products"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
      <h1>hi</h1>
      
    </>
 
  );
}

export default App;
