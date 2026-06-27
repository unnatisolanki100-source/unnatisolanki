import React from "react";
import { SERVICES } from "../data";
import { Check, MessageSquare, Briefcase } from "lucide-react";

interface ServicesProps {
  onInquireService: (serviceTitle: string) => void;
}

export default function Services({ onInquireService }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black relative overflow-hidden"
    >
      {/* Abstract Creative Wave Flow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full text-zinc-800" stroke="currentColor" strokeWidth="0.75" fill="none">
          {/* Flowing abstract wave curves representing copy writing flow & narrative cadence */}
          <path d="M -100,200 C 200,450 400,50 600,350 C 750,550 900,150 1100,400" strokeDasharray="2 4" />
          <path d="M -100,250 C 150,500 350,100 550,400 C 700,600 850,200 1100,450" />
          <path d="M -100,150 C 250,400 450,0 650,300 C 800,500 950,100 1100,350" strokeDasharray="6 6" />
          
          {/* Subtle labels on the flow curves */}
          <text x="150" y="320" className="font-mono text-[7px] fill-zinc-600">NARRATIVE_FLOW_01</text>
          <text x="500" y="280" className="font-mono text-[7px] fill-zinc-600">EMPIRICAL_STORY_ENG</text>
          <text x="800" y="310" className="font-mono text-[7px] fill-zinc-600">COPY_STRATEGY_MAX</text>
        </svg>
      </div>

      <div className="space-y-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">
              SECTION 04
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              Services Offered
            </h2>
            <div className="w-12 h-1 bg-white"></div>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
            Helping businesses and creators solve complex data visualization puzzles, build responsive websites, and write compelling narrative treatments.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="border border-zinc-800 bg-zinc-950 p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Top Details */}
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-zinc-900 pb-4">
                  <h3 className="font-sans text-lg font-bold text-white max-w-[80%] uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <Briefcase size={18} className="text-white mt-1" />
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    CORE DELIVERABLES
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2.5">
                        <Check size={12} className="text-white shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-zinc-300 leading-normal">
                          {del}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Block */}
              <div className="border-t border-zinc-900 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  Typical Duration: {service.duration || "Per Project"}
                </span>

                <button
                  id={`service-inquire-btn-${service.id}`}
                  onClick={() => onInquireService(service.title)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-zinc-200 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border border-white"
                >
                  <MessageSquare size={12} />
                  <span>Inquire / Request</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
