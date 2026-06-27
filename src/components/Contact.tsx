import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { Mail, Phone, ExternalLink, Copy, Check, Send, AlertCircle, Info } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export interface ContactRef {
  autofillMessage: (serviceTitle: string) => void;
}

const Contact = forwardRef<ContactRef, {}>((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Expose the autofill capability via ref
  useImperativeHandle(ref, () => ({
    autofillMessage(serviceTitle: string) {
      setSubject(`Inquiry: ${serviceTitle}`);
      setMessage(`Hi Unnati,\n\nI am reaching out regarding your "${serviceTitle}" services. I would love to connect and discuss potential collaboration opportunities.\n\nBest regards,`);
      
      // Smooth scroll to the contact form specifically
      formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      
      // Delay focus slightly for a smooth transition
      setTimeout(() => {
        messageInputRef.current?.focus();
      }, 800);
    },
  }));

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.phone).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/unnatisolanki400@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject || "New Portfolio Message",
          message
        })
      });

      const data = await response.json();
      if (response.ok && data.success === "true") {
        setIsSuccess(true);
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.message || "Failed to transmit message. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Could not deliver message. Please contact via email directly or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={formSectionRef}
      className="py-24 px-6 max-w-5xl mx-auto border-l border-r border-zinc-900 bg-black text-white relative overflow-hidden"
    >
      {/* Contact Network Node Linkages Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-10">
        {/* Abstract connection nodes and pulse lines */}
        <svg className="absolute inset-0 w-full h-full text-zinc-800" stroke="currentColor" strokeWidth="0.75" fill="none">
          {/* Connection paths */}
          <line x1="100" y1="100" x2="300" y2="250" />
          <line x1="300" y1="250" x2="200" y2="450" />
          <line x1="300" y1="250" x2="600" y2="150" />
          <line x1="600" y1="150" x2="800" y2="350" strokeDasharray="3 3" />
          <line x1="800" y1="350" x2="500" y2="500" />
          
          {/* Connected dots */}
          <circle cx="100" cy="100" r="3.5" fill="currentColor" />
          <circle cx="300" cy="250" r="4.5" fill="currentColor" />
          <circle cx="200" cy="450" r="3.5" fill="currentColor" />
          <circle cx="600" cy="150" r="5" fill="currentColor" />
          <circle cx="800" cy="350" r="4.5" fill="currentColor" />
          <circle cx="500" cy="500" r="3.5" fill="currentColor" />
          
          {/* Technical targeting circles */}
          <circle cx="600" cy="150" r="16" strokeDasharray="2 2" />
          <circle cx="300" cy="250" r="10" />
        </svg>

        {/* Faint gateway indicator labels */}
        <div className="absolute top-[8%] left-[2%] font-mono text-[8px] text-zinc-600 space-y-0.5">
          <div>NODE_SYS: LINKED</div>
          <div>GATEWAY: SMTP_TLS</div>
          <div>HANDSHAKE: OK</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
        {/* Contact info panel */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">
              SECTION 06
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              Get In Touch
            </h2>
            <div className="w-12 h-1 bg-white"></div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-[280px]">
              Ready to collaborate on a data dashboard, copywriting piece, website build, or creative script?
            </p>
          </div>

          {/* Interactive contact items */}
          <div className="space-y-4 pt-4">
            {/* Email card */}
            <div className="border border-zinc-800 p-4 bg-zinc-950 flex items-center justify-between group hover:border-white transition-colors rounded-[12px]">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-zinc-500 block">EMAIL ADDRESS</span>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="font-sans text-xs font-bold text-white break-all"
                >
                  {PERSONAL_INFO.contact.email}
                </a>
              </div>
              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="p-1.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white transition-all bg-black rounded-[8px]"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Phone card */}
            <div className="border border-zinc-800 p-4 bg-zinc-950 flex items-center justify-between group hover:border-white transition-colors rounded-[12px]">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-zinc-500 block">PHONE NUMBER</span>
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="font-sans text-xs font-bold text-white"
                >
                  {PERSONAL_INFO.contact.phone}
                </a>
              </div>
              <button
                id="copy-phone-btn"
                onClick={copyPhone}
                className="p-1.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white transition-all bg-black rounded-[8px]"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="p-4 border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-zinc-500 leading-normal rounded-[12px]">
            * Direct responses are typically processed within 24–48 standard working hours.
          </div>
        </div>

        {/* Contact Form panel */}
        <div className="md:col-span-7">
          <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-8 space-y-6 rounded-[20px]">
            <div className="border-b border-zinc-900 pb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1">
                SECURE CONTACT GATEWAY
              </span>
              <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-wide">Transmit Message</h3>
            </div>

            {isSuccess ? (
              <div id="contact-success-box" className="p-6 border border-zinc-800 bg-black text-center space-y-4 animate-scale-up rounded-[12px]">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto bg-black">
                  <Check size={20} className="text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">
                    Transmission Complete
                  </h4>
                  <p className="font-sans text-xs text-zinc-400">
                    Your message has been cached and delivered to Unnati's inbox successfully.
                  </p>
                </div>
                <button
                  id="send-another-msg-btn"
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 bg-white text-black hover:bg-zinc-200 text-[11px] font-sans font-bold tracking-wider uppercase transition-colors border border-white rounded-[12px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 border border-red-900/50 bg-red-950/20 text-red-400 text-xs font-sans rounded-[12px] flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                      Sender Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Carter"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 border border-zinc-800 focus:border-white focus:outline-none bg-black text-white text-xs font-sans transition-colors placeholder-zinc-700 rounded-[12px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 border border-zinc-800 focus:border-white focus:outline-none bg-black text-white text-xs font-sans transition-colors placeholder-zinc-700 rounded-[12px]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                    Subject Line
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Freelance Dashboard Development"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2 border border-zinc-800 focus:border-white focus:outline-none bg-black text-white text-xs font-sans transition-colors placeholder-zinc-700 rounded-[12px]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                    Detailed Message *
                  </label>
                  <textarea
                    id="contact-message"
                    ref={messageInputRef}
                    required
                    rows={4}
                    placeholder="Please type your project inquiry or collaboration proposal..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 border border-zinc-800 focus:border-white focus:outline-none bg-black text-white text-xs font-sans transition-colors resize-none placeholder-zinc-700 rounded-[12px]"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-zinc-200 text-xs font-sans tracking-widest uppercase transition-all duration-300 font-bold border border-white cursor-pointer rounded-[12px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Encrypting & Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Transmit Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
