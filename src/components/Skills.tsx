import React from "react";
import { BarChart3, Code, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics",
      toolsCount: "7 Specialized Tools",
      icon: <BarChart3 size={20} className="text-white" />,
      skills: [
        { name: "Power BI", level: "90%" },
        { name: "SQL", level: "85%" },
        { name: "Python", level: "80%" },
        { name: "Advanced Excel", level: "95%" },
      ],
    },
    {
      title: "Web Development",
      toolsCount: "7 Specialized Tools",
      icon: <Code size={20} className="text-white" />,
      skills: [
        { name: "HTML", level: "95%" },
        { name: "CSS", level: "90%" },
        { name: "JavaScript", level: "82%" },
        { name: "React", level: "80%" },
      ],
    },
    {
      title: "Creative & AI Skills",
      toolsCount: "7 Specialized Tools",
      icon: <Sparkles size={20} className="text-white" />,
      skills: [
        { name: "Copywriting", level: "95%" },
        { name: "Story Writing", level: "92%" },
        { name: "Screenplay Writing", level: "88%" },
        { name: "Web Series Writing", level: "90%" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black text-white relative overflow-hidden"
    >
      {/* Technical Dial & Radar Background Visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        {/* Ambient radial flare */}
        <div className="absolute top-1/3 left-2/3 -translate-y-1/2 w-[320px] h-[320px] bg-white/[0.04] rounded-full blur-[100px]" />

        {/* Concentric technical dials */}
        <svg className="absolute top-[45%] left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] text-zinc-800" fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="225" cy="225" r="190" strokeDasharray="3 9" />
          <circle cx="225" cy="225" r="150" strokeDasharray="15 15" />
          <circle cx="225" cy="225" r="110" strokeDasharray="1 6" />
          <circle cx="225" cy="225" r="70" />
          
          {/* Radial axis markers */}
          <line x1="225" y1="0" x2="225" y2="450" strokeDasharray="2 4" />
          <line x1="0" y1="225" x2="450" y2="225" strokeDasharray="2 4" />
        </svg>

        {/* Floating tech token tags */}
        <span className="absolute top-[18%] left-[8%] font-mono text-[9px] text-zinc-600 uppercase tracking-widest">[DATA_ENGINE_ACTIVE]</span>
        <span className="absolute bottom-[15%] left-[12%] font-mono text-[8px] text-zinc-700 uppercase tracking-wider">DAX.ENG_V3</span>
        <span className="absolute top-[25%] right-[10%] font-mono text-[8px] text-zinc-700 uppercase tracking-wider">REACT_v18.3</span>
        <span className="absolute bottom-[22%] right-[8%] font-mono text-[9px] text-zinc-600 uppercase tracking-widest">[PROSE_METRICS_STORY]</span>
      </div>

      <div className="space-y-16 relative z-10">
        {/* Centered Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-[10px] md:text-xs font-sans tracking-widest text-zinc-300 font-medium uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
            CORE COMPETENCIES & TOOLKIT
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            Technical & Creative Skills
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
            A balanced multi-disciplinary skillset bridging analytical rigor with engaging digital storytelling.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-zinc-800 bg-zinc-950 p-8 rounded-[20px] flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 animate-scale-up"
            >
              <div className="space-y-8">
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wide leading-tight">
                      {category.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mt-0.5">
                      {category.toolsCount}
                    </span>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-sans font-bold text-zinc-300">
                        <span className="uppercase tracking-wider">{skill.name}</span>
                        <span className="font-mono text-zinc-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
