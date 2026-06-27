import React from "react";
import { motion } from "motion/react";
import { Target } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black text-white relative overflow-hidden"
    >
      {/* Unique About Background Visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        {/* Soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[90px]" />
        
        {/* Overlapping Venn diagram curves of Creative & Analytical intersection */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] text-zinc-800" fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="220" cy="200" r="140" strokeDasharray="3 3" />
          <circle cx="380" cy="200" r="140" />
          <path d="M 300 80 Q 300 200 300 320" strokeDasharray="5 5" />
        </svg>

        {/* Faint script/story snippet overlay in background (Creative focus) */}
        <div className="absolute bottom-[8%] left-[4%] font-mono text-[9px] text-zinc-600 max-w-[200px] transform -rotate-2 hidden sm:block">
          <p className="font-sans font-bold text-zinc-500 uppercase tracking-widest text-[8px] mb-1">SCENE DESIGN TREATMENT</p>
          [ACT I - ENTER UNNATI]<br />
          The narrative grid converges.<br />
          A story written in data rows.<br />
          &lt;empathy_filter_on&gt;
        </div>

        {/* Faint statistical coordinates overlay (Analytical focus) */}
        <div className="absolute top-[8%] right-[4%] font-mono text-[8px] text-zinc-600 max-w-[180px] text-right transform rotate-1 hidden sm:block">
          <p className="font-sans font-bold text-zinc-500 uppercase tracking-widest text-[8px] mb-1">DATA FLOW PARADIGM</p>
          X-AXIS: EMPATHY METRICS<br />
          Y-AXIS: STATISTICAL RIGOR<br />
          R-SQUARED: 0.9942<br />
          P-VALUE: &lt; 0.0001
        </div>
      </div>

      <div className="relative z-10">
        {/* Centered Title Area */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-[10px] md:text-xs font-sans tracking-widest text-zinc-300 font-medium uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
          GET TO KNOW ME
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          About Me
        </h2>
        <div className="w-24 h-1 bg-white"></div>
      </div>

      {/* Grid Layout of Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Why Work With Me? Card */}
        <div className="border border-zinc-800 p-8 space-y-6 bg-zinc-950 rounded-[20px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              CORE PHRASE
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-black text-white uppercase tracking-wide">
              Why Work With Me?
            </h3>
            <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed font-light">
              Hello! I'm <strong className="text-white font-extrabold">Unnati Solanki</strong>, a passionate, multi-disciplinary professional working at the intersection of structured analytical data systems and creative narrative storytelling.
            </p>
            <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
              My unique background allows me to bring absolute empirical precision to dashboard analytics while infusing technical interfaces with intuitive, user-centric human stories.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 font-mono text-[10px] text-zinc-500">
            * MULTI-FACETED APPROACH
          </div>
        </div>

        {/* Primary Mission Card */}
        <div className="border border-zinc-800 p-8 space-y-6 bg-zinc-950 rounded-[20px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              MISSION STATEMENT
            </div>
            <h3 className="font-sans text-xl md:text-2xl font-black text-white uppercase tracking-wide">
              My Ultimate Vision
            </h3>
            <p className="font-sans text-base md:text-lg text-zinc-200 leading-relaxed italic font-light">
              &ldquo;{PERSONAL_INFO.careerGoal}&rdquo;
            </p>
            <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
              I am committed to designing high-fidelity dashboards and scripting engaging dialogue streams that bridge empirical business metrics and human empathy.
            </p>
          </div>
          <div className="pt-4 border-t border-zinc-900 font-mono text-[10px] text-zinc-500">
            * STRATEGIC BRANDING
          </div>
        </div>
      </div>

      {/* Dual Methodology highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="border border-zinc-800 p-8 space-y-4 bg-zinc-950 rounded-[20px] hover:border-zinc-700 transition-all duration-300">
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center font-sans text-xs font-bold text-white">
            01
          </div>
          <h3 className="font-sans text-sm md:text-base font-extrabold uppercase tracking-widest text-white">
            Analytical Rigor
          </h3>
          <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Applying advanced Power BI models, DAX formulas, SQL databases, and Python data pipelines to clean, analyze, and visualize complex corporate metrics.
          </p>
        </div>

        <div className="border border-zinc-800 p-8 space-y-4 bg-zinc-950 rounded-[20px] hover:border-zinc-700 transition-all duration-300">
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center font-sans text-xs font-bold text-white">
            02
          </div>
          <h3 className="font-sans text-sm md:text-base font-extrabold uppercase tracking-widest text-white">
            Creative Storytelling
          </h3>
          <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Writing screenplays, screenplay treatments, digital copy, and character dialogues that optimize user attention and elevate emotional relevance.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
