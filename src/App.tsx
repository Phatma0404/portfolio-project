import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";
import Resume from "@/pages/Resume";
import Blog from "@/pages/Blog";
import Projects from "./components/Portfolio";


function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="relative bg-[#0e0e10] min-h-screen text-white antialiased font-sans overflow-x-hidden">
        {/* Ambient background — fixed glow + noise */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-[#E8472A]/[0.08] blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#7B61FF]/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[#E8472A]/[0.05] blur-[140px]" />
          <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />
        </div>

        {/* Content above background */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
