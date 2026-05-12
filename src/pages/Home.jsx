import Hero from "../components/Hero";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}