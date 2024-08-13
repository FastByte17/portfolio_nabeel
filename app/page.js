import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
//import Experience from "./sections/Experience";
import Navigator from "./components/Navigator";

export default function Home() {
  return (
    <div className="grid-areas-layout font-Oxygen min-w-screen min-h-screen text-white bg-cyan-800">
      <Navigator />
      <Nav />
      <main className="area-main flex flex-col border-2">
        <Landing />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
