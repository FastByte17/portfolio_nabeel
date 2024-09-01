import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
//import Experience from "./sections/Experience";
import Navigator from "./components/Navigator";

export default function Home() {
  return (
    <div className="grid-areas-layout font-Oxygen min-w-screen min-h-screen text-white box-border">
      <Navigator />
      <Nav />
      <main className="area-main flex flex-col border-2 border-green-500">
        <Landing />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
