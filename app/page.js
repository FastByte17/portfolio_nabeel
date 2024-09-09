import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Navigator from "./components/Navigator";

export default function Home() {
  return (
    <div className="grid-areas-layout font-Oxygen min-w-screen min-h-screen text-white box-border">
      <Navigator />
      <Nav />
      <main className="area-main flex flex-col bg-teal-800">
        <Landing />
        <Skills />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
