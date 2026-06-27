import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, MessageSquare } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onOpenResume: () => void;
}

export default function Header({ activeSection, onOpenResume }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-4 border-zinc-800"
          : "bg-black py-6 border-zinc-900"
      } print:hidden`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          id="header-logo-link"
          href="#home"
          className="flex items-center gap-1.5 sm:gap-3 hover:opacity-85 transition-opacity select-none group min-w-0 flex-1"
        >
          {/* Badge 'US' */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black font-sans font-black text-[11px] sm:text-sm flex items-center justify-center rounded-lg sm:rounded-xl tracking-tighter shadow-sm shrink-0">
            US
          </div>
          <div className="flex flex-col text-left min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-sans text-[9.5px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-black tracking-wider sm:tracking-widest text-white uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                UNNATI SOLANKI
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full shrink-0 inline-block"></span>
            </div>
            <span className="font-sans text-[6.5px] min-[360px]:text-[7.5px] sm:text-[8px] md:text-[9px] font-semibold tracking-[0.10em] sm:tracking-[0.18em] text-zinc-400 uppercase leading-none mt-0.5 sm:mt-1 whitespace-nowrap overflow-hidden text-ellipsis inline-block">
              DATA & STORYTELLING
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              id={`nav-link-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              className={`font-sans text-[11px] tracking-widest uppercase transition-all duration-200 relative py-1 hover:text-white ${
                activeSection === item.label.toLowerCase()
                  ? "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white"
                  : "text-zinc-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Quick Actions (White buttons as requested) */}
          <div className="flex items-center gap-3 ml-4">
            <button
              id="header-download-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-700 hover:bg-zinc-850 text-[11px] font-sans font-extrabold tracking-wider uppercase transition-all duration-200 rounded-full cursor-pointer"
            >
              <FileText size={13} className="text-zinc-400" />
              Resume
            </button>

            <a
              id="header-lets-talk-btn"
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-100 text-[11px] font-sans font-black tracking-widest uppercase transition-all duration-200 rounded-full shadow-md cursor-pointer"
            >
              <MessageSquare size={13} />
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-1 min-[360px]:gap-1.5 lg:hidden shrink-0">
          <button
            id="mobile-download-resume-btn"
            onClick={onOpenResume}
            className="px-1.5 py-1 min-[360px]:px-2.5 min-[360px]:py-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-[8px] min-[360px]:text-[9px] min-[380px]:text-[10px] font-sans font-bold tracking-wider uppercase transition-all duration-200 rounded-full cursor-pointer whitespace-nowrap"
          >
            Resume
          </button>
          
          <a
            id="mobile-lets-talk-btn"
            href="#contact"
            className="px-1.5 py-1 min-[360px]:px-2.5 min-[360px]:py-1.5 bg-white text-black text-[8px] min-[360px]:text-[9px] min-[380px]:text-[10px] font-sans font-black tracking-wider uppercase transition-all duration-200 rounded-full shadow-sm cursor-pointer whitespace-nowrap"
          >
            Let's Talk
          </a>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 min-[360px]:p-1.5 bg-zinc-900/90 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors rounded-lg min-[360px]:rounded-xl cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={12} className="min-[360px]:size-[14px]" /> : <Menu size={12} className="min-[360px]:size-[14px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-zinc-800 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fade-in"
        >
          {navItems.map((item) => (
            <a
              id={`mobile-nav-link-${item.label.toLowerCase()}`}
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-sans text-xs tracking-widest uppercase py-2 border-b border-zinc-900 flex justify-between items-center ${
                activeSection === item.label.toLowerCase()
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
              <ArrowUpRight size={12} className="opacity-40" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              id="mobile-drawer-resume-btn"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2.5 bg-white text-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-200"
            >
              Download Resume
            </button>
            <a
              id="mobile-drawer-talk-btn"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-2.5 border border-white text-white hover:bg-white hover:text-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
