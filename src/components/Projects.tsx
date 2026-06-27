import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import {
  TrendingUp,
  Music,
  Plus,
  Tv,
  Info,
  Layers,
  X
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Data & Analytics", "Creative Writing", "Web Design"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    return proj.category === filter;
  });

  // Unique icons for each project type
  const getProjectIcon = (id: string, category: string) => {
    if (id === "amazon-sales") return <TrendingUp size={20} className="text-white" />;
    if (id === "spotify-dashboard") return <Music size={20} className="text-white" />;
    if (category === "Creative Writing") return <Tv size={20} className="text-white" />;
    return <Layers size={20} className="text-white" />;
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black text-white relative overflow-hidden"
    >
      {/* Blueprint Drafting Wireframe Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full text-zinc-800" stroke="currentColor" strokeWidth="0.5" fill="none">
          {/* Horizontal drafting guide lines */}
          <line x1="0" y1="120" x2="100%" y2="120" strokeDasharray="4 8" />
          <line x1="0" y1="550" x2="100%" y2="550" strokeDasharray="1 10" />
          
          {/* Technical draft crop marks */}
          <path d="M 30,50 L 30,20 L 60,20" />
          <path d="M 970,50 L 970,20 L 940,20" />
          
          {/* Center drafting crosshair */}
          <path d="M 500,180 L 500,220 M 480,200 L 520,200" />
          <circle cx="500" cy="200" r="12" />
          
          {/* Drafting coordinate text markers */}
          <text x="530" y="204" className="font-mono text-[8px] fill-zinc-600">CANVAS_REF: [500, 200]</text>
          <text x="40" y="80" className="font-mono text-[8px] fill-zinc-600">MAX_BOUND: [1024px]</text>
          <text x="860" y="570" className="font-mono text-[8px] fill-zinc-600">DESIGN_SYSTEM: GRID_V1</text>
        </svg>
      </div>

      <div className="space-y-12 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">
              SECTION 03
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              Featured Work
            </h2>
            <div className="w-12 h-1 bg-white"></div>
          </div>

          {/* Tab Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-sans tracking-widest uppercase transition-all duration-200 border ${
                  filter === cat
                    ? "bg-white border-white text-black"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWriting = project.category === "Creative Writing";
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`border border-zinc-800 flex flex-col justify-between bg-zinc-950 overflow-hidden relative group hover:border-zinc-700 transition-colors duration-300 ${
                  project.isComingSoon ? "border-dashed border-zinc-800" : ""
                }`}
              >
                {/* Coming Soon absolute badge */}
                {project.isComingSoon && (
                  <div className="absolute top-4 right-4 bg-zinc-900 border border-zinc-850 text-zinc-400 font-mono text-[9px] uppercase px-2 py-0.5 tracking-wider">
                    COMING_SOON.TXT
                  </div>
                )}

                {/* Main block */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center bg-zinc-900">
                      {getProjectIcon(project.id, project.category)}
                    </div>
                  </div>

                  {/* Title & Logline/Description */}
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl md:text-2xl font-bold text-white leading-tight uppercase">
                      {project.title}
                    </h3>

                    {/* Show logline for screenwriting, otherwise short desc */}
                    {isWriting && project.logline ? (
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed italic">
                        &ldquo;{project.logline}&rdquo;
                      </p>
                    ) : (
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Tech stack / Tools tagged */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 border border-zinc-800 text-zinc-400 bg-zinc-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action trigger */}
                <div className="border-t border-zinc-900 bg-zinc-950 px-6 py-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500">
                    ID: {project.id.toUpperCase()}
                  </span>

                  {!project.isComingSoon ? (
                    <button
                      id={`project-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest uppercase text-white hover:text-zinc-300 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <Plus size={13} className="text-white" />
                    </button>
                  ) : (
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                      Under construction
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Details Modal Drawer (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="case-study-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-end p-0 md:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="case-study-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-black border-l border-zinc-800 w-full max-w-2xl min-h-screen md:min-h-[90vh] md:h-auto h-full flex flex-col relative text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-4">
                <span className="font-mono text-xs tracking-widest text-zinc-500">
                  DOCUMENT_CASE_STUDY: {selectedProject.id.toUpperCase()}.XML
                </span>
                <button
                  id="case-study-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="overflow-y-auto p-8 md:p-10 space-y-8 flex-1 no-scrollbar bg-black">
                {/* Categorization & Title */}
                <div className="space-y-3 border-b border-zinc-900 pb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 border border-zinc-800 bg-zinc-950 inline-block text-zinc-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight uppercase">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed pt-2">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Specific layouts for Analytics/Web Design vs Screenplay */}
                {selectedProject.category === "Data & Analytics" || selectedProject.category === "Web Design" ? (
                  <div className="space-y-8">
                    {/* Key Metrics Summary */}
                    {selectedProject.keyMetrics && (
                      <div className="space-y-3">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500">
                          METRIC AUDIT OUTLINE
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          {selectedProject.keyMetrics.map((met) => (
                            <div key={met.label} className="border border-zinc-800 p-4 bg-zinc-950 text-center">
                              <span className="font-mono text-[10px] text-zinc-500 block mb-1">
                                {met.label}
                              </span>
                              <span className="font-sans text-xl md:text-2xl font-bold text-white">
                                {met.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features checklist */}
                    {selectedProject.features && (
                      <div className="space-y-3">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500">
                          TECHNICAL FEATURE INTEGRATION
                        </h4>
                        <ul className="space-y-2.5">
                          {selectedProject.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 font-sans text-xs text-zinc-300">
                              <span className="font-mono text-white font-bold shrink-0 mt-0.5">[&bull;]</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Business Insights */}
                    {selectedProject.insights && (
                      <div className="border border-zinc-800 p-6 bg-zinc-950 space-y-3">
                        <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 border-b border-zinc-900 pb-2">
                          <Info size={12} className="text-white" />
                          <span>ANALYTICAL BUSINESS INSIGHTS</span>
                        </div>
                        <ul className="space-y-3">
                          {selectedProject.insights.map((ins, i) => (
                            <li key={i} className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed italic">
                              &ldquo;{ins}&rdquo;
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  // Creative Writing Layout
                  <div className="space-y-8">
                    {/* General Script Details */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border border-zinc-800 p-4 bg-zinc-950 font-mono text-[11px] text-zinc-300">
                      <div>
                        <span className="text-zinc-500 block mb-0.5">GENRE</span>
                        <span className="font-semibold text-white uppercase">{selectedProject.genre}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block mb-0.5">FORMAT</span>
                        <span className="font-semibold text-white uppercase">{selectedProject.format}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block mb-0.5">STATUS</span>
                        <span className="font-semibold text-white uppercase">{selectedProject.status}</span>
                      </div>
                    </div>

                    {/* Logline Quote block */}
                    {selectedProject.logline && (
                      <div className="border-l-4 border-white pl-5 py-2 bg-zinc-950">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block mb-1">
                          OFFICIAL STORY LOGLINE
                        </span>
                        <p className="font-sans text-base md:text-lg text-zinc-200 italic leading-relaxed">
                          &ldquo;{selectedProject.logline}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Episode Guide */}
                    {selectedProject.episodes && (
                      <div className="space-y-4">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500">
                          EPISODE DEVELOPMENT DIRECTORY
                        </h4>
                        <div className="space-y-4">
                          {selectedProject.episodes.map((ep) => (
                            <div key={ep.num} className="border border-zinc-800 p-5 bg-zinc-950 space-y-2">
                              <div className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                                <span className="font-sans text-xs font-bold uppercase text-white">
                                  EPISODE {ep.num}: {ep.title}
                                </span>
                                <span className="font-mono text-[9px] text-zinc-400 px-1.5 py-0.5 border border-zinc-800 bg-black">
                                  SCRIPT_READY
                                </span>
                              </div>
                              <p className="font-sans text-xs text-zinc-400 leading-relaxed italic">
                                {ep.synopsis}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tech specifications */}
                <div className="border-t border-zinc-900 pt-6 space-y-3">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500">
                    SKILL & APPLICATION STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 border border-white bg-black text-white uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer footer */}
              <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 text-center text-[10px] font-mono text-zinc-500">
                Unnati Solanki &bull; Case Study Document System
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
