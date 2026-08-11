import About from "./components/About";
import BestProduct from "./components/BestProduct";
import Contact from "./components/Contact";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Products from "./components/Products";

export default function App() {
  return (
    <>
      <Hero/>
      <Create/>
      <NewProducts/>
      <BestProduct/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}
