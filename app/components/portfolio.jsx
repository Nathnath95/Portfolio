"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MENU = [
  { key: "profile", label: "Character", sub: "Profile" },
  { key: "experience", label: "Quests", sub: "Experience" },
  { key: "education", label: "Training", sub: "Education" },
  { key: "projects", label: "Great Runes", sub: "Projects" },
  { key: "skills", label: "Attributes", sub: "Skills" },
  { key: "certificates", label: "Remembrances", sub: "Certificates" },
  { key: "contact", label: "Summon", sub: "Contact" },
];

const BACKGROUNDS = {
  default: "/bg/default.webp",
  profile: "/bg/character.jpeg",
  experience: "/bg/quests.webp",
  education: "/bg/training.webp",
  projects: "/bg/great-runes.jpg",
  skills: "/bg/attributes.webp",
  certificates: "/bg/remembrances.jpg",
  contact: "/bg/summon.webp",
};

const GOLD = "#c9a44c";
const GOLD_BRIGHT = "#e8c872";
const TEXT = "#d9d0b8";
const MUTED = "#9a9078";

const rowStyle = {
  marginBottom: "18px",
  paddingBottom: "14px",
  borderBottom: "1px solid rgba(201,164,76,0.25)",
};

const mutedStyle = {
  color: MUTED,
  fontStyle: "italic",
  fontSize: "18px",
  marginBottom: "6px",
};

const contactStyle = {
  ...mutedStyle,
  fontStyle: "normal",
  fontSize: "24px",
};

const linkStyle = {
  color: GOLD_BRIGHT,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const contactLinkStyle = {
  ...linkStyle,
  color: TEXT,
};

const strongStyle = { color: GOLD_BRIGHT, fontWeight: 600 };

const CONTENT = {
  profile: {
    title: "Character",
    body: (
      <>
        <Image
          src="/eldenID.png"
          alt="Nathaniel Lejano"
          width={200}
          height={200}
          className="er-portrait"
          style={{
            border: `2px solid ${GOLD}`,
            outline: "1px solid rgba(201,164,76,0.35)",
            outlineOffset: "4px",
          }}
        />
        <p>Hello! I'm Nathaniel Lejano, and I made this simple portfolio to introduce myself.</p>
        <p><br />I am 22 years old, and currently residing in Lian, Batangas.</p>
        <p><br />I am a Computer Science fresh graduate from Batangas State University, The National Engineering University — Alangilan Campus.</p>
        <p><br />With knowledge in software development, computer systems, and basic device troubleshooting, along with my passion for problem solving, I am eager to apply these skills in technology-focused work environments.</p>
        <p><br />If you want to know more about me, choose an entry from the menu on the left to see my experience, education, projects, and more.</p>
      </>
    ),
  },
  experience: {
    title: "Quests",
    body: (
      <>
        <div style={rowStyle}>
          <strong style={strongStyle}>UI/UX Designer & Front-end Developer — Center for AI and Smart Technologies (On-the-Job Training)</strong>
          <div style={mutedStyle}>Batangas City | June 2025 – July 2025</div>
          <p>• Designed mockups and interactive prototypes, then translated them into a functional web-based system.</p>
          <p>• Identified and analyzed issues encountered during system development and determined appropriate solutions.</p>
          <p>• Coordinated with back-end developers to implement and troubleshoot interface functionalities.</p>
          <p>• Created technical documentation for the front-end components to support future development.</p>
        </div>
      </>
    ),
  },
  education: {
    title: "Training",
    body: (
      <>
        <div style={rowStyle}>
          <strong style={strongStyle}>BS Computer Science</strong>
          <div style={mutedStyle}>Batangas State University - Alangilan Campus | 2022 – 2026</div>
          <p>• Honors & Awards: <strong style={strongStyle}>Cum Laude</strong> | <strong style={strongStyle}>Dean's Lister</strong> (7 Semesters)</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>STEM</strong>
          <div style={mutedStyle}>Batangas State University - ARASOF | 2016 - 2022</div>
          <p>• Honors & Awards: <strong style={strongStyle}>With High Honors</strong></p>
        </div>
      </>
    ),
  },
  projects: {
    title: "Great Runes",
    body: (
      <>
        <div style={rowStyle}>
          <strong style={strongStyle}>DebTabbed (Laravel, Vue.js)</strong>
          <div style={mutedStyle}>August 2026</div>
          <p>• A web-based system for managing, splitting, and tracking shared bills and expenses in multiple households.</p>
          <p>• Users can log payments, split costs, and see who owes whom among all members of a household.</p>
          <p>• Makes shared expense management simpler and more transparent.</p>
          <a
            href="https://github.com/Nathnath95/Debtabbed"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}
          >
            GitHub Link
          </a>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Gestura (Python, MediaPipe)</strong>
          <div style={mutedStyle}>March 2025</div>
          <p>• A real-time hand gesture system that aids users in learning and interpreting sign language.</p>
          <p>• Trained a model to detect valid hand signs and translate them into corresponding alphabet letters.</p>
          <p>• Designed the interface to give interactive feedback for practicing sign language.</p>
          <a
            href="https://github.com/VinceAbella/Gestura"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}
          >
            GitHub Link
          </a>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Scripter (Java)</strong>
          <div style={mutedStyle}>December 2024</div>
          <p>• A mobile application that recognizes speech and performs transcription.</p>
          <p>• Transcribed audios can be saved and edited for revision of information.</p>
          <p>• Integrated a generative AI API to further expand information of transcriptions.</p>
          <p>• Simplifies taking notes during lectures or meetings.</p>
          <p>• Helps individuals with hearing impairments transcribe spoken conversations for better engagement.</p>
          <a
            href="https://github.com/Nathnath95/Scripter.git"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}
          >
            GitHub Link
          </a>
        </div>
      </>
    ),
  },
  skills: {
    title: "Attributes",
    body: (
      <>
        <div style={rowStyle}>
          <strong style={strongStyle}>Programming</strong>
          <p>Web Development | Computer Vision/AI Development | Mobile App Development | Git Version Control</p>
          <p><i style={{ color: GOLD_BRIGHT }}>Languages & Frameworks:</i> PHP | Python | Java | Laravel | Livewire | Vue.js | OpenCV | MediaPipe | scikit-learn</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Tools</strong>
          <p>Visual Studio Code | Android Studio | GitHub | Figma | Aseprite | FireAlpaca | Microsoft 365 | Orange Data Mining</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Computer Systems</strong>
          <p>Basic Hardware/Software Diagnostics and Troubleshooting | Computer System Installation | Computer Maintenance | Peripheral Device Setup | Technical Documentation</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Soft Skills</strong>
          <p>Problem Solving | Client Communication | Team Coordination | Willingness to Learn</p>
        </div>
      </>
    ),
  },
  certificates: {
    title: "Remembrances",
    body: (
      <>
        <div style={rowStyle}>
          <strong style={strongStyle}>TESDA Online Program (TOP) – Computer System Servicing</strong>
          <div style={mutedStyle}>September 2026</div>
          <p>Maintaining Computer Systems and Networks | Setting Up Computer Servers | Setting Up Computer Networks | Installing and Configuring Computer Systems | Introduction to Computer Systems Servicing</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>TESDA Online Program (TOP) – Visual Graphic Design</strong>
          <div style={mutedStyle}>July 2026</div>
          <p>Developing Designs for User Interface | Developing Designs for User Experience</p>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>TESDA Online Program (TOP) – Information and Communication Technology</strong>
          <div style={mutedStyle}>June 2026</div>
          <p>Microsoft Artificial Intelligence Course: Azure AI Fundamentals</p>
        </div>
      </>
    ),
  },
  contact: {
    title: "Summon",
    body: (
      <>
        <p>You can reach me through any of these:</p>
        <div style={{ ...rowStyle, marginTop: "14px" }}>
          <strong style={strongStyle}>Email</strong>
          <div style={contactStyle}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nathaniellejano953@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              style={contactLinkStyle}
            >
              nathaniellejano953@gmail.com
            </a>
          </div>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>Phone</strong>
          <div style={contactStyle}>
            <a href="tel:+639152385608"
            style={contactLinkStyle}>09152385608</a>
          </div>
        </div>
        <div style={rowStyle}>
          <strong style={strongStyle}>LinkedIn</strong>
          <div style={contactStyle}>
            <a
              href="https://linkedin.com/in/nathaniel-lejano-a5a91a286"
              style={contactLinkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nathaniel-lejano-a5a91a286
            </a>
          </div>
        </div>
      </>
    ),
  },
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

.er-root {
  font-family: "EB Garamond", Garamond, Georgia, serif;
  color: ${TEXT};
  background:
    radial-gradient(ellipse 55% 50% at 80% -5%, rgba(232,200,114,0.26), transparent 70%),
    radial-gradient(ellipse 80% 40% at 50% 115%, rgba(70,52,22,0.55), transparent 65%),
    #0a0907;
}
.er-display { font-family: Cinzel, "Trajan Pro", Georgia, serif; }

.er-title {
  animation: er-title-in 1.4s ease-out both;
  text-shadow: 0 0 22px rgba(232,200,114,0.45);
}
@keyframes er-title-in {
  from { opacity: 0; letter-spacing: 0.18em; }
  to   { opacity: 1; }
}

.er-menu-btn {
  display: flex; align-items: center; gap: 14px;
  width: 100%; text-align: left;
  background: transparent; border: none;
  border-left: 2px solid transparent;
  color: #b9ae92; cursor: pointer;
  padding: 10px 16px;
  transition: color .2s, background .2s, border-color .2s;
}
.er-menu-btn:hover { color: ${GOLD_BRIGHT}; background: linear-gradient(90deg, rgba(201,164,76,0.16), transparent); }
.er-menu-btn[aria-current="true"] {
  color: #f2d98a; border-left-color: ${GOLD};
  background: linear-gradient(90deg, rgba(201,164,76,0.22), transparent);
}
  
.er-menu-btn:focus-visible {
  outline: 2px solid ${GOLD_BRIGHT}; outline-offset: -2px;
}

.er-bg-wrap { animation: er-bg-in 2.5s ease-out both; }
@keyframes er-bg-in { from { opacity: 0; } to { opacity: 1; } }

.er-bg-layer {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  opacity: 0; pointer-events: none;
  transition: opacity 1s ease;
}
.er-bg-layer[data-on="true"] { opacity: 0.4; }
.er-bg-shade {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(10,9,7,0.75) 100%),
    linear-gradient(180deg, rgba(10,9,7,0.35), rgba(10,9,7,0.15) 40%, rgba(10,9,7,0.6));
}

.er-portrait { float: left; margin: 4px 28px 12px 4px; }
@media (max-width: 700px) {
    .er-portrait { float: none; display: block; margin: 0 0 16px 0; }
  }

.er-diamond {
  width: 8px; height: 8px; flex-shrink: 0;
  transform: rotate(45deg);
  border: 1px solid ${GOLD};
  opacity: 0; transition: opacity .2s;
}
.er-menu-btn:hover .er-diamond { opacity: 1; }
.er-menu-btn[aria-current="true"] .er-diamond { opacity: 1; background: ${GOLD}; box-shadow: 0 0 8px ${GOLD}; }

.er-panel { animation: er-open .3s ease-out both; }
@keyframes er-open { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

.er-rule {
  height: 1px; margin: 0 18px;
  background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
  transform-origin: center;
  animation: er-rule .7s ease-out both;
}
@keyframes er-rule { from { transform: scaleX(0); } to { transform: scaleX(1); } }

.er-close {
  background: transparent; color: ${GOLD};
  border: 1px solid ${GOLD}; cursor: pointer;
  transition: background .2s, color .2s;
}
.er-close:hover { background: ${GOLD}; color: #0a0907; }
.er-close:focus-visible { outline: 2px solid ${GOLD_BRIGHT}; outline-offset: 2px; }

.er-scroll::-webkit-scrollbar { width: 8px; }
.er-scroll::-webkit-scrollbar-thumb { background: rgba(201,164,76,0.45); }
.er-scroll::-webkit-scrollbar-track { background: transparent; }

@media (prefers-reduced-motion: reduce) {
  .er-title, .er-panel, .er-rule { animation: none; }
  .er-bg-layer { transition: none; }
  .er-bg-wrap { animation: none; }
}
`;

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatTime(d) {
  let h = d.getHours();
  const m = d.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  const mm = m < 10 ? `0${m}` : `${m}`;
  return `${h}:${mm} ${ampm}`;
}

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const now = useClock();
  const isMobile = useIsMobile();

  const activeContent = active ? CONTENT[active] : null;
  const bgKey = active && BACKGROUNDS[active] ? active : "default";

  return (
    <div
      className="er-root"
      style={{
        width: "100%",
        height: "100dvh",
        minHeight: "600px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{CSS}</style>

      <div aria-hidden="true" className="er-bg-wrap" style={{ position: "absolute", inset: 0, zIndex: 0 }}></div>

      {/* Background art*/}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {Object.entries(BACKGROUNDS).map(([key, src]) => (
          <div
            key={key}
            className="er-bg-layer"
            data-on={bgKey === key ? "true" : "false"}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="er-bg-shade" />
      </div>

      {/* Main area */}
      <div style={{ flex: 1, position: "relative", zIndex: 1, padding: isMobile ? "20px 16px" : "32px 40px", overflow: "auto" }}>
        {/* Name banner */}
        <div style={{ marginBottom: isMobile ? "24px" : "36px" }}>
          <h1
            className="er-display er-title"
            style={{
              margin: 0,
              fontSize: isMobile ? "26px" : "40px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: GOLD_BRIGHT,
            }}
          >
            NATHANIEL LEJANO
          </h1>
          <div
            style={{
              marginTop: "6px",
              fontSize: isMobile ? "17px" : "20px",
              fontStyle: "italic",
              color: MUTED,
            }}
          >
            Computer Science graduate, Cum Laude
          </div>
          <div
            style={{
              marginTop: "14px",
              height: "1px",
              maxWidth: "420px",
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "48px",
            alignItems: "flex-start",
          }}
        >
          {/* Menu */}
          <nav
            aria-label="Portfolio sections"
            style={{
              width: isMobile ? "100%" : "260px",
              flexShrink: 0,
              padding: "8px 0",
              background: "rgba(14,12,9,0.7)",
              border: "1px solid rgba(201,164,76,0.35)",
            }}
          >
            {MENU.map((item) => (
              <button
                key={item.key}
                className="er-menu-btn"
                aria-current={active === item.key ? "true" : undefined}
                onClick={() => setActive(item.key)}
              >
                <span className="er-diamond" />
                <span>
                  <span className="er-display" style={{ fontSize: "17px", letterSpacing: "0.05em", display: "block" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: "15px", fontStyle: "italic", color: MUTED }}>
                    {item.sub}
                  </span>
                </span>
              </button>
            ))}
          </nav>

          {/* Panel */}
          {activeContent && (
            <section
              key={active}
              className="er-panel"
              aria-label={activeContent.title}
              style={
                isMobile
                  ? {
                      position: "fixed",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(10,9,7,0.86)",
                      display: "flex",
                      flexDirection: "column",
                      zIndex: 50,
                    }
                  : {
                      flex: 1,
                      maxWidth: "1000px",
                      height: "min(560px, calc(100dvh - 260px))",
                      minHeight: "380px",
                      background: "rgba(14,12,9,0.9)",
                      border: `1px solid ${GOLD}`,
                      boxShadow: "0 0 0 4px rgba(10,9,7,0.9), 0 0 0 5px rgba(201,164,76,0.3), 0 10px 40px rgba(0,0,0,0.6)",
                      display: "flex",
                      flexDirection: "column",
                    }
              }
            >
              {/* Title bar */}
              <div
                style={{
                  padding: "14px 18px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2
                  className="er-display"
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: GOLD_BRIGHT,
                  }}
                >
                  {activeContent.title}
                </h2>
                <button
                  className="er-close"
                  onClick={() => setActive(null)}
                  aria-label="Close panel"
                  style={{
                    width: isMobile ? "36px" : "28px",
                    height: isMobile ? "36px" : "28px",
                    fontSize: "14px",
                  }}
                >
                  ✕
                </button>
              </div>
              <div className="er-rule" />

              {/* Content area */}
              <div
                className="er-scroll"
                style={{
                  flex: 1,
                  padding: "20px 22px",
                  overflowY: "auto",
                  fontSize: "21px",
                  color: TEXT,
                  lineHeight: 1.55,
                }}
              >
                {activeContent.body}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Bottom HUD bar */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "38px",
          background: "rgba(10,9,7,0.95)",
          borderTop: "1px solid rgba(201,164,76,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          flexShrink: 0,
          fontSize: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: GOLD }}>
          <span
            aria-hidden="true"
            style={{
              width: "8px",
              height: "8px",
              transform: "rotate(45deg)",
              background: GOLD,
              boxShadow: `0 0 10px ${GOLD_BRIGHT}`,
            }}
          />
          <span className="er-display" style={{ letterSpacing: "0.08em", fontSize: "13px" }}>
            Site of Grace
          </span>
        </div>

        <span style={{ color: MUTED, fontStyle: "italic" }}>{formatTime(now)}</span>
      </div>
    </div>
  );
}
