import React, { useRef } from "react";
import { X, Printer, Copy, Check, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Elegant printing of the resume container specifically
    const printContent = printRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      const windowUrl = "about:blank";
      const uniqueName = new Date().getTime();
      const printWindow = window.open(windowUrl, uniqueName.toString(), "left=50,top=50,width=800,height=900");
      
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Unnati Solanki - Resume</title>
              <style>
                body {
                  font-family: 'Inter', sans-serif;
                  color: #111;
                  line-height: 1.5;
                  padding: 40px;
                  max-width: 800px;
                  margin: 0 auto;
                }
                h1, h2, h3 {
                  font-family: 'Inter', sans-serif;
                  margin-top: 0;
                }
                h1 { border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 12px; }
                h2 { border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 24px; margin-bottom: 12px; font-size: 1.4em; }
                .meta { display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 0.9em; color: #555; }
                .section { margin-bottom: 20px; }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .bullet { margin-left: 16px; margin-bottom: 4px; }
                .skills-tag { display: inline-block; border: 1px solid #111; padding: 2px 8px; margin: 2px; font-size: 0.8em; font-family: 'Inter', sans-serif; }
                @media print {
                  body { padding: 0; }
                  button { display: none; }
                }
              </style>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      } else {
        // Fallback simple browser print
        window.print();
      }
    }
  };

  const copyTextToClipboard = () => {
    const textContent = `
UNNATI SOLANKI
Data Analyst | Copywriter | Web Designer | Creative Web Series Writer
Email: unnatisolanki400@gmail.com | Phone: +91 7434057085

CAREER GOAL
To synthesize analytical precision and creative storytelling, helping forward-thinking teams transform raw data into visually stunning dashboards and powerful, engaging narratives.

TECHNICAL & CREATIVE SKILLS
- Analytics & Tools: Power BI, Advanced Excel, Canva, AI Tools
- Programming & Web: SQL, Python, HTML, CSS, Tailwind CSS, JavaScript, React
- Writing & Narrative: Copywriting, Story Writing, Screenwriting

KEY PROJECTS
1. Amazon Sales Performance Dashboard (Power BI, DAX, Excel)
   - Dynamic sales and profit margin tracking with high-contrast custom gauges.
   - Geographic sales mapping with region-by-region filtering capabilities.
   - Key Metrics: 100k+ Transactions | $4.2M Sales | 18.4% Profit Margin
2. Spotify Behavior Analysis Dashboard (Power BI, Python, CSV)
   - Dynamic genre/artist density cloud visualizing listening frequency.
   - Temporal charts tracking listening patterns by hour and day.
   - Key Metrics: 84,000 Minutes Streamed | 48 Unique Genres
3. Almost Adult (Creative Writing - Web Series Pilot & bible)
   - Comedy-Drama about three post-grad roommates navigating modern adulthood.
   - Fully written scripts for key episodes, complete with character maps.
4. Two Sided (Creative Writing - Anthology Drama Series)
   - Screenplay examining critical relational situations from dual isolated view points.

SERVICES
- Data Analytics & Dashboard Development
- Narrative Copywriting & Content Strategy
- Minimalist Web Design & Development
- Creative Web Series & Screenplay Development

EDUCATION & FOCUS
- Data Analytics & Dashboard Engineering (Power BI, DAX, SQL, Excel)
- Python Programming & SQL Database Querying (Python, Pandas, SQL Scripting)
- React & Modern Front-End Architecture (React, Tailwind CSS, JavaScript)
    `.trim();

    navigator.clipboard.writeText(textContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 print:hidden"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-white border border-black max-w-3xl w-full max-h-[85vh] flex flex-col relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between border-b border-black bg-zinc-50 px-6 py-3.5">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-600">
            <FileText size={14} className="text-black" />
            UNNATI_SOLANKI_RESUME.TXT
          </div>
          <div className="flex items-center gap-3">
            <button
              id="resume-copy-btn"
              onClick={copyTextToClipboard}
              className="flex items-center gap-1.5 px-3 py-1 border border-zinc-200 hover:border-black text-[11px] font-sans tracking-widest uppercase transition-colors"
              title="Copy plain text resume"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={12} />
                  Copy
                </>
              )}
            </button>
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 border border-zinc-200 hover:border-black text-[11px] font-sans tracking-widest uppercase transition-colors"
              title="Print resume"
            >
              <Printer size={12} />
              Print
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1 hover:bg-zinc-200 text-zinc-500 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Container (Scrollable) */}
        <div className="overflow-y-auto p-8 md:p-12 no-scrollbar" ref={printRef}>
          {/* Header */}
          <div className="text-center md:text-left border-b-2 border-black pb-6 mb-6">
            <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-wider text-black mb-1">
              Unnati Solanki
            </h1>
            <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-zinc-600 mb-4">
              Data Analyst &bull; Copywriter &bull; Web Designer &bull; Web Series Writer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-500">
              <span>Email: unnatisolanki400@gmail.com</span>
              <span>Phone: +91 7434057085</span>
            </div>
          </div>

          {/* Goals */}
          <div className="mb-8">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1 mb-3">
              Career Goal
            </h2>
            <p className="font-sans text-sm text-zinc-800 leading-relaxed">
              To synthesize analytical precision and creative storytelling, helping forward-thinking teams transform raw data into visually stunning dashboards and powerful, engaging narratives.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1 mb-3">
              Skills Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Analytics & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Power BI", "Advanced Excel", "Canva", "AI Tools"].map((s) => (
                    <span key={s} className="px-2 py-0.5 border border-zinc-200 text-xs font-mono text-zinc-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Programming & Web
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["SQL", "Python", "HTML", "CSS", "Tailwind CSS", "JavaScript", "React"].map((s) => (
                    <span key={s} className="px-2 py-0.5 border border-zinc-200 text-xs font-mono text-zinc-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Writing & Creative
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Copywriting", "Story Writing", "Screenwriting"].map((s) => (
                    <span key={s} className="px-2 py-0.5 border border-zinc-200 text-xs font-mono text-zinc-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Projects */}
          <div className="mb-8">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1 mb-4">
              Featured Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-sans text-sm font-bold text-black">
                  Amazon Sales Performance Dashboard (Power BI)
                </h3>
                <span className="font-mono text-[10px] text-zinc-500">Analytics Project</span>
              </div>
              <p className="font-sans text-xs text-zinc-700 mb-2">
                Designed multi-page reports analyzing sales trends, volume distributions, and profit margins. Generated dynamic calculations using advanced DAX modeling.
              </p>
              <ul className="list-disc pl-5 font-sans text-xs text-zinc-600 space-y-1">
                <li>Isolated Southern area logistics bottleneck, enhancing order turnaround times.</li>
                <li>Created automated forecasting models using historical records.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-sans text-sm font-bold text-black">
                  Spotify Streaming Behavior Dashboard (Power BI)
                </h3>
                <span className="font-mono text-[10px] text-zinc-500">Analytics Project</span>
              </div>
              <p className="font-sans text-xs text-zinc-700 mb-2">
                Aggregated active listening history records to highlight user ratings, temporal patterns, and favorite audio genres.
              </p>
              <ul className="list-disc pl-5 font-sans text-xs text-zinc-600 space-y-1">
                <li>Analyzed over 84k minutes streamed, isolating listener trends.</li>
                <li>Visualized temporal variations across focus hours versus rest cycles.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-sans text-sm font-bold text-black">
                  Almost Adult & Two Sided (Creative Writing Web Series)
                </h3>
                <span className="font-mono text-[10px] text-zinc-500">Screenwriting</span>
              </div>
              <p className="font-sans text-xs text-zinc-700 mb-2">
                Developed character bibles, multi-perspective comedic scripts, and episodic treatments tailored for high-quality streaming pilots.
              </p>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-8">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1 mb-3">
              Professional Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-sans text-xs font-bold text-black">&bull; Data Analytics & Dashboards</h4>
                <p className="font-sans text-[11px] text-zinc-600 pl-3">Converting database structures into clear visual dashboards.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold text-black">&bull; Copywriting & Content Audits</h4>
                <p className="font-sans text-[11px] text-zinc-600 pl-3">Constructing conversion copy, direct emails, and copy edits.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold text-black">&bull; Web Design & Frontend Layouts</h4>
                <p className="font-sans text-[11px] text-zinc-600 pl-3">Designing aesthetic, responsive layouts with Tailwind.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold text-black">&bull; Scriptwriting & Narrative Treatments</h4>
                <p className="font-sans text-[11px] text-zinc-600 pl-3">Crafting screenplays, scene breakdowns, and pilot outlines.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-black border-b border-zinc-200 pb-1 mb-3">
              Education & Specialization
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans text-xs font-bold text-black">Data Analytics & Relational Databases</h4>
                  <span className="font-mono text-[10px] text-zinc-500">Specialized Study</span>
                </div>
                <p className="font-sans text-[11px] text-zinc-600">Advanced instruction on Power BI DAX expressions, SQL aggregations, and visual layouts.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans text-xs font-bold text-black">React Frontend Web Development</h4>
                  <span className="font-mono text-[10px] text-zinc-500">Aesthetic Layouts</span>
                </div>
                <p className="font-sans text-[11px] text-zinc-600">Constructing robust single-page applications with clean responsive states.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer toolbar info */}
        <div className="border-t border-black bg-zinc-50 px-6 py-3.5 text-center text-[10px] font-mono text-zinc-400">
          * This document is optimized for A4 paper layout printouts or digital PDF exports.
        </div>
      </div>
    </div>
  );
}
