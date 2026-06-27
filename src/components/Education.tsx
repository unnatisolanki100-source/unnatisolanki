import React from "react";
import { EDUCATION } from "../data";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black relative overflow-hidden"
    >
      {/* Education Timeline Academic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        {/* Horizontal timeline ruler/ticks axis */}
        <div className="absolute bottom-6 left-0 right-0 h-8 border-b border-zinc-800 flex items-end justify-between px-12 font-mono text-[8px] text-zinc-600">
          <span>0.00ms</span>
          <span>&bull;</span>
          <span>DRAFT_START [2022]</span>
          <span>&bull;</span>
          <span>METRICS_LOG [2023]</span>
          <span>&bull;</span>
          <span>DIPLOMA_REF [2024]</span>
          <span>&bull;</span>
          <span>DATA_ANALYST [ONGOING]</span>
          <span>&bull;</span>
          <span>1000.00ms</span>
        </div>
        
        {/* Faint academic vertical ruler on the side */}
        <div className="absolute left-2.5 top-12 bottom-12 w-4 border-r border-zinc-800 flex flex-col justify-between py-6 font-mono text-[7px] text-zinc-600">
          <span>SEC_01</span>
          <span>SEC_02</span>
          <span>SEC_03</span>
          <span>SEC_04</span>
          <span>SEC_05</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
        {/* Title side */}
        <div className="md:col-span-4">
          <div className="sticky top-28 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">
              SECTION 05
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              Education & Learning
            </h2>
            <div className="w-12 h-1 bg-white"></div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-[240px]">
              My academic foundations and ongoing technical training programs in data analytics.
            </p>
          </div>
        </div>

        {/* Timeline side */}
        <div className="md:col-span-8 space-y-8">
          <div className="relative border-l border-zinc-800 pl-6 md:pl-8 space-y-12">
            {EDUCATION.map((item, index) => (
              <div
                key={item.id}
                id={`education-item-${item.id}`}
                className="relative space-y-4 group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 border border-zinc-850 bg-black group-hover:bg-white transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-full"></div>
                </div>

                {/* Details header */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">
                    Focus Coursework & Specialization
                  </span>
                  <h3 className="font-sans text-xl font-bold text-white group-hover:opacity-80 transition-opacity uppercase tracking-wide">
                    {item.subject}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 items-center font-mono text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <GraduationCap size={12} className="text-white" />
                      {item.provider}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <CheckCircle2 size={11} className="text-emerald-500" />
                      Status: {item.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Dynamic tag checklist */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">
                    PRIMARY SYSTEMS ACQUIRED:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-2.5 py-0.5 border border-zinc-800 bg-zinc-950 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
