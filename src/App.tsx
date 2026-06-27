import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact, { ContactRef } from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const contactRef = useRef<ContactRef>(null);

  // Scroll tracking to update the active nav item in the Header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "education", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle service clicking to trigger contact form autofill and scroll
  const handleInquireService = (serviceTitle: string) => {
    if (contactRef.current) {
      contactRef.current.autofillMessage(serviceTitle);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black relative font-sans leading-relaxed flex flex-col justify-between">
      {/* Editorial background borders with custom zinc border for contrast */}
      <div className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl border-l border-r border-zinc-900 pointer-events-none z-0"></div>

      {/* Header bar */}
      <Header activeSection={activeSection} onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* SECTION 00: Hero (Home) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* SECTION 01: About Me */}
        <About />

        {/* SECTION 02: Skills */}
        <Skills />

        {/* SECTION 03: Projects */}
        <Projects />

        {/* SECTION 04: Services */}
        <Services onInquireService={handleInquireService} />

        {/* SECTION 05: Education */}
        <Education />

        {/* SECTION 06: Contact */}
        <Contact ref={contactRef} />
      </main>

      {/* Footer bar */}
      <footer className="relative z-10 border-t border-zinc-800 bg-black py-12 px-6 print:hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-sans text-lg font-bold">Unnati Solanki</h4>
            <p className="font-mono text-[10px] text-zinc-500">
              Data Analyst &bull; Copywriter &bull; Web Designer &bull; Web Series Writer
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-zinc-500">
            <span>&copy; {new Date().getFullYear()} Unnati Solanki. All Rights Reserved.</span>
            <button
              id="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-white hover:opacity-80 transition-opacity uppercase font-bold tracking-wider"
              title="Return to topmost screen"
            >
              Top
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
