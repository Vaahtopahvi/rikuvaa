// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience"
// import Projects from "./components/Projects"

function App() {
  return (
    <div className="text-3xl min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
      </main>
    </div>
  );
}

export default App;
