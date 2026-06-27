import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, Send, ArrowDown, Mail, Phone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const roles = [
    "Creative Storyteller",
    "Data Analyst",
    "Copywriter",
    "Web Designer"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black text-white overflow-hidden"
    >
      {/* Blurred Code & Dashboard Background Visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-[0.14]">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[120px]" />

        {/* Dashboard grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Floating Code Visual 1 - Top Right */}
        <div className="absolute top-[12%] right-[-5%] md:right-[5%] max-w-xs md:max-w-sm p-4 font-mono text-[9px] md:text-[10px] text-zinc-500 border border-zinc-900 bg-zinc-950/60 rounded-xl transform rotate-2 blur-[0.6px] leading-relaxed hidden sm:block">
          <span className="text-zinc-600">// Dashboard Model Initialization</span><br />
          <span className="text-zinc-400">const</span> databaseQuery = <span className="text-white">await</span> client.query(<span className="text-emerald-500">"SELECT * FROM sales"</span>);<br />
          <span className="text-zinc-400">const</span> parsedData = databaseQuery.rows.map(row =&gt; &#123;<br />
          &nbsp;&nbsp;return &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;id: row.transaction_id,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;revenue: row.amount * <span className="text-zinc-300">0.85</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;status: row.conversion_ratio &gt; <span className="text-zinc-300">0.75</span> ? <span className="text-emerald-500">"Optimal"</span> : <span className="text-rose-500">"Review"</span><br />
          &nbsp;&nbsp;&#125;;<br />
          &#125;);
        </div>

        {/* Floating Dashboard Visual 2 - Middle Left (Peeking through behind text) */}
        <div className="absolute top-[45%] left-[-10%] md:left-[2%] max-w-xs p-4 font-mono text-[9px] md:text-[10px] text-zinc-500 border border-zinc-900 bg-zinc-950/40 rounded-xl transform -rotate-3 blur-[0.8px] leading-relaxed">
          <span className="text-zinc-600">// Screenplay Screen treatment</span><br />
          <span className="text-white">INT. CONTROL ROOM - NIGHT</span><br />
          <p className="text-zinc-400 mt-1 pl-2">
            A single monitor flickers with blue data lines.<br />
            UNNATI stares at the conversion rates.<br />
            The story begins inside the cells...
          </p>
        </div>

        {/* Floating Data Metrics Visual 3 - Bottom Right */}
        <div className="absolute bottom-[10%] right-[3%] max-w-xs p-5 font-mono text-[8px] md:text-[9px] text-zinc-500 border border-zinc-900 bg-zinc-950/50 rounded-xl transform rotate-1 blur-[0.5px] space-y-2 hidden md:block">
          <div className="flex justify-between border-b border-zinc-900 pb-1.5">
            <span className="text-zinc-600">QUERY_METRICS_LOG</span>
            <span className="text-emerald-500">LIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-1 bg-zinc-900/30 rounded border border-zinc-900/50 text-center">
              <span className="block text-zinc-600">KPI</span>
              <span className="text-white font-bold">98.4%</span>
            </div>
            <div className="p-1 bg-zinc-900/30 rounded border border-zinc-900/50 text-center">
              <span className="block text-zinc-600">DAX</span>
              <span className="text-white font-bold">FAST</span>
            </div>
            <div className="p-1 bg-zinc-900/30 rounded border border-zinc-900/50 text-center">
              <span className="block text-zinc-600">SQL</span>
              <span className="text-white font-bold">INDEXED</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 md:py-20 flex flex-col justify-between h-full relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Subtle availability label pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-[9px] md:text-xs font-sans tracking-widest text-zinc-300 font-medium uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulse"></span>
              <span className="xs:hidden">AVAILABLE FOR WORK</span>
              <span className="hidden xs:inline">AVAILABLE FOR ANALYTICS & CREATIVE PROJECTS</span>
            </div>
          </motion.div>

          {/* Main Title / Name (Matches typography) */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-4xl sm:text-5xl md:text-8xl font-black tracking-tight text-white leading-[1.05] select-none"
            >
              Hi, I'm <br />
              Unnati Solanki
            </motion.h1>

            {/* Typewriter text line with custom layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2 py-2"
            >
              <span className="text-zinc-500 font-mono text-lg md:text-2xl select-none font-bold">&gt;</span>
              <span className="font-sans text-lg sm:text-xl md:text-3xl font-black text-white tracking-wide">
                {currentText}
              </span>
              <span className="w-2 md:w-3 h-5 md:h-7 bg-white shrink-0 inline-block ml-0.5 animate-pulse"></span>
            </motion.div>

            {/* Tags row styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {["Data Analyst", "Copywriter", "Web Designer", "Creative Storyteller"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-zinc-900/40 border border-zinc-850 text-[9px] md:text-xs font-sans text-zinc-400 font-medium tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Custom thin elegant line */}
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-zinc-850 origin-left"
          />

          {/* Tagline & Call-to-action block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="md:col-span-7 space-y-6"
            >
              <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                "Turning data into insights and ideas into impactful stories."
              </p>

              {/* Action Buttons (Matches Reference Image Layout and Rounding, Optimized for Mobile Screen width) */}
              <div className="flex flex-row flex-wrap gap-3 pt-4 w-full sm:w-auto">
                <button
                  id="hero-view-resume-btn"
                  onClick={onOpenResume}
                  className="flex items-center justify-center gap-1.5 px-4 md:px-6 py-3 bg-white text-black hover:bg-zinc-100 text-xs md:text-sm font-sans font-extrabold tracking-wider uppercase transition-all duration-300 rounded-[12px] shadow-md border border-white cursor-pointer whitespace-nowrap min-w-[70px] xs:min-w-[100px]"
                >
                  <Download size={14} />
                  <span className="md:hidden">CV</span>
                  <span className="hidden md:inline">Download Resume</span>
                </button>
                <a
                  id="hero-to-contact-btn"
                  href="#contact"
                  className="flex items-center justify-center gap-1.5 px-4 md:px-6 py-3 bg-zinc-950/40 border border-zinc-800 text-white hover:bg-zinc-900 hover:border-zinc-700 text-xs md:text-sm font-sans font-extrabold tracking-wider uppercase transition-all duration-300 rounded-[12px] cursor-pointer whitespace-nowrap min-w-[100px]"
                >
                  <Send size={14} />
                  <span className="md:hidden">Contact</span>
                  <span className="hidden md:inline">Contact Me</span>
                </a>
              </div>
            </motion.div>

            {/* Quick overview widget representing the black and white grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="md:col-span-5 border border-zinc-800 p-6 flex flex-col justify-between bg-zinc-950 rounded-[20px]"
            >
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block border-b border-zinc-900 pb-2">
                  CONTACT DETAILS
                </span>
                <div className="space-y-2 font-mono text-[11px] text-zinc-400">
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={12} />
                    {PERSONAL_INFO.contact.email}
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.contact.phone}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone size={12} />
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>
              <div className="pt-6 font-sans text-xs text-zinc-500 italic">
                Currently based in India, accepting global freelance and project contracts.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-3 pt-12 text-zinc-600 text-xs font-mono select-none"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
