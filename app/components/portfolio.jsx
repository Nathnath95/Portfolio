"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ICONS = [
  { key: "profile", label: "My profile", glyph: "👤" },
  { key: "experience", label: "Experience", glyph: "💼" },
  { key: "education", label: "Education", glyph: "🎓" },
  { key: "projects", label: "Projects", glyph: "📁" },
  { key: "skills", label: "Skills", glyph: "🛠️" },
  { key: "certificates", label: "Certificates", glyph: "📜" },
  { key: "contact", label: "Contact", glyph: "✉️" },
];

const rowStyle = {
  marginBottom: "14px",
  paddingBottom: "10px",
  borderBottom: "1px dotted #999",
};

const mutedStyle = {
  color: "#555",
  fontSize: "17px",
  marginBottom: "4px",
};

const linkStyle = {
  color: "#1c5fc9",
  textDecoration: "underline",
};

const CONTENT = {
  profile: {
    title: "My Profile",
    body: (
      <>
        <Image 
          src="/id.png"
          alt="Nathaniel Lejano"
          width={200}
          height={200}
          style={{ border: "2px solid #000000", marginBottom: "12px" }}
        />
        <p>Hello! I'm Nathaniel Lejano, and I made this simple portfolio to introduce myself.</p>
        <p><br />I am 22 years old, and currently residing in Lian, Batangas.</p>
        <p><br />I am a Computer Science fresh graduate from Batangas State University - The National Engineering University (Alangilan Campus).</p>
        <p><br />With knowledge in software development, computer systems, and basic device troubleshooting, along with my passion for problem solving, I am eager to apply these skills in technology-focused work environments.</p>
        <p><br />If you want to know more about me, click around the icons on the left to see my experience, education, projects, and more.</p>
      </>
    ),
  },
  experience: {
    title: "Experience",
    body: (
      <>
        <div style={rowStyle}>
          <strong>UI/UX Designer & Front-end Developer — Center for AI and Smart Technologies (On-the-Job Training)</strong>
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
    title: "Education",
    body: (
      <>
        <div style={rowStyle}>
          <strong>BS Computer Science</strong>
          <div style={mutedStyle}>Batangas State University - Alangilan Campus, Batangas City | 2022 – 2026</div>
          <p>• Honors & Awards: <strong>Cum Laude</strong> | <strong>Dean's Lister</strong> (7 Semesters)</p>
        </div>
        <div style={rowStyle}>
          <strong>STEM</strong>
          <div style={mutedStyle}>Batangas State University - ARASOF | 2016 - 2022</div>
          <p>• Honors & Awards: <strong> With High Honors</strong></p>
        </div>
      </>
    ),
  },
  projects: {
    title: "Projects",
    body: (
      <>
        <div style={rowStyle}>
          <strong>DebTabbed (Laravel, Vue.js)</strong>
          <div style={mutedStyle}>August 2026</div>
          <p>•	A web-based system for managing, splitting, and tracking shared bills and expenses in multiple households.</p>
          <p>•	Users can log payments, split costs, and see who owes whom among all members of a household. </p>
          <p>•	Makes shared expense management simpler and more transparent.</p>
          <a
          href= "https://github.com/Nathnath95/Debtabbed"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}>
            GitHub Link
          </a>
        </div>
        <div style={rowStyle}>
          <strong>Gestura (Python, MediaPipe)</strong>
          <div style={mutedStyle}>March 2025</div>
          <p>•	A real-time hand gesture system that aids users in learning and interpreting sign language.</p>
          <p>•	Trained a model to detect valid hand signs and translate them into corresponding alphabet letters.</p>
          <p>•	Designed the interface to give interactive feedback for practicing sign language.</p>
          <a
          href= "https://github.com/VinceAbella/Gestura"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}>
            GitHub Link
          </a>
        </div>
        <div style={rowStyle}>
          <strong>Scripter (Java)</strong>
          <div style={mutedStyle}>December 2024</div>
          <p>•	A mobile application that recognizes speech and performs transcription.</p>
          <p>•	Transcribed audios can be saved and edited for revision of information.</p>
          <p>•	Integrated a generative AI API to further expand information of transcriptions.</p>
          <p>•	Simplifies taking notes during lectures or meetings.</p>
          <p>•	Helps individuals with hearing impairments transcribe spoken conversations for better engagement.</p>
          <a
          href= "https://github.com/Nathnath95/Scripter.git"
            rel="noopener noreferrer"
            target="_blank"
            style={linkStyle}>
            GitHub Link
          </a>
        </div>
      </>
    ),
  },
  skills: {
    title: "Skills",
    body: (
      <>
        <div style={rowStyle}>
          <strong>Programming</strong>
          <p>Web Development | Computer Vision/AI Development | Mobile App Development | Git Version Control</p>
          <p><i>Languages & Frameworks:</i> PHP | Python | Java | Laravel | Livewire | Vue.js | OpenCV | MediaPipe | scikit-learn</p>
        </div>
        <div style={rowStyle}>
          <strong>Tools</strong>
          <p>Visual Studio Code | Android Studio | GitHub | Figma | Aseprite | FireAlpaca | Microsoft 365 | Orange Data Mining</p>
        </div>
        <div style={rowStyle}>
          <strong>Computer Systems</strong>
          <p>Basic Hardware/Software Diagnostics and Troubleshooting | Computer System Installation | Computer Maintenance | Peripheral Device Setup | Technical Documentation</p>
        </div>
        <div style={rowStyle}>
          <strong>Soft Skills</strong>
          <p>Problem Solving | Client Communication | Team Coordination | Willingness to Learn</p>
        </div>
      </>
    ),
  },
  certificates: {
    title: "Certificates",
    body: (
      <>
        <div style={rowStyle}>
          <strong>TESDA Online Program (TOP) – Computer System Servicing</strong>
          <div style={mutedStyle}>September 2026</div>
          <p>Maintaining Computer Systems and Networks | Setting Up Computer Servers | Setting Up Computer Networks | Installing and Configuring Computer Systems | Introduction to Computer Systems Servicing</p>
        </div>
        <div style={rowStyle}>
          <strong>TESDA Online Program (TOP) – Visual Graphic Design</strong>
          <div style={mutedStyle}>July 2026</div>
          <p>Developing Designs for User Interface | Developing Designs for User Experience</p>
        </div>
        <div style={rowStyle}>
          <strong>TESDA Online Program (TOP) – Information and Communication Technology</strong>
          <div style={mutedStyle}>June 2026</div>
          <p>Microsoft Artificial Intelligence Course: Azure AI Fundamentals</p>
        </div>
      </>
    ),
  },
  contact: {
    title: "Contact",
    body: (
      <>
        <p>You can reach me through any of these:</p>
        <div style={rowStyle}>
          <strong>Email</strong>
          <div style={mutedStyle}>
            <a
            href= "https://mail.google.com/mail/?view=cm&fs=1&to=nathaniellejano953@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              style={linkStyle}>
              nathaniellejano953@gmail.com
            </a>
          </div>
        </div>
        <div style={rowStyle}>
          <strong>Phone</strong>
          <div style={mutedStyle}>
            <a href="tel:+639152385608" style={linkStyle}>09152385608</a>
          </div>
        </div>
        <div style={rowStyle}>
          <strong>LinkedIn</strong>
          <div style={mutedStyle}>
            <a
            href="https://linkedin.com/in/nathaniel-lejano-a5a91a286"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer">
              linkedin.com/in/nathaniel-lejano-a5a91a286
            </a>
          </div>
        </div>
      </>
    ),
  },
};

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

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        background: "#3a6ea5",
        backgroundImage:
          "linear-gradient(180deg, #4a7fb5 0%, #3a6ea5 40%, #326199 100%)",
        fontFamily:
          '"MS Sans Serif", "Tahoma", "Segoe UI", Geneva, Verdana, sans-serif',
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      {/* Desktop area */}
      <div style={{ flex: 1, position: "relative", padding: "20px" }}>
        {/* Name banner */}
        <div
          style={{
            display: "inline-block",
            background: "#ffffff",
            border: "2px solid #1a1a1a",
            boxShadow: "3px 3px 0 rgba(0,0,0,0.35)",
            padding: "14px 20px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? "18px" : "26px",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#111",
              fontFamily: '"Courier New", monospace',
            }}
          >
            NATHANIEL LEJANO
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "40px",
          }}
        >
          {/* Icon grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(3, 1fr)"
                : "repeat(2, 80px)",
              gap: isMobile ? "16px 8px" : "24px 40px",
              alignContent: "start",
            }}
          >
            {ICONS.map((icon) => (
              <button
                key={icon.key}
                onClick={() => setActive(icon.key)}
                onDoubleClick={() => setActive(icon.key)}
                style={{
                  background: active === icon.key ? "rgba(255,255,255,0.25)" : "transparent",
                  border:
                    active === icon.key
                      ? "1px dashed rgba(255,255,255,0.8)"
                      : "1px dashed transparent",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 4px",
                  width: isMobile ? "100%" : "80px",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "70px" : "56px",
                    height: isMobile ? "70px" : "56px",
                    background: "#ffffff47",
                    border: "1px solid #1a1a1a",
                    boxShadow: "2px 2px 0 rgba(0,0,0,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "20px" : "26px",
                  }}
                >
                  {icon.glyph}
                </div>
                <span
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? "10px" : "12px",
                    textAlign: "center",
                    textShadow: "1px 1px 1px rgba(0,0,0,0.6)",
                    lineHeight: 1.2,
                  }}
                >
                  {icon.label}
                </span>
              </button>
            ))}
          </div>

          {/* Window */}
          {activeContent && (
            <div
              style={
                isMobile
                  ? {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100%",
                      height: "100%",
                      background: "#ece9d8",
                      border: "none",
                      display: "flex",
                      flexDirection: "column",
                      zIndex: 50,
                    }
                  : {
                      width: "1000px",
                      height: "500px",
                      background: "#ece9d8",
                      border: "2px solid #0a0a0a",
                      boxShadow: "4px 4px 0 rgba(0,0,0,0.35)",
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0,
                    }
              }
            >
              {/* Title bar */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #4f9ef7 0%, #1c5fc9 50%, #123f8f 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "5px 6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{activeContent.title}</span>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close window"
                  style={{
                    background: "#d94f3d",
                    border: "1px solid #7a2418",
                    color: "#fff",
                    width: isMobile ? "32px" : "20px",
                    height: isMobile ? "28px" : "18px",
                    lineHeight: isMobile ? "26px" : "16px",
                    fontSize: isMobile ? "14px" : "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Content area */}
              <div
                style={{
                  flex: 1,
                  margin: "10px",
                  padding: "16px",
                  background: "#ffffff",
                  border: "1px solid #9d9d9d",
                  boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)",
                  overflowY: "auto",
                  fontSize: "20px",
                  color: "#222",
                  lineHeight: 1.5,
                }}
              >
                {activeContent.body}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Taskbar */}
      <div
        style={{
          height: "34px",
          background: "linear-gradient(180deg, #d4d0c8 0%, #b8b4aa 100%)",
          borderTop: "1px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "linear-gradient(180deg, #f0f0f0 0%, #c8c4ba 100%)",
            border: "1px solid #7a7a7a",
            borderTopColor: "#fff",
            borderLeftColor: "#fff",
            padding: "3px 10px",
            fontSize: "12px",
            fontWeight: 700,
            height: "24px",
          }}
        >
          <span style={{ fontSize: "14px" }}>🪟</span> Start
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "12px",
            color: "#111",
            background: "#c8c4ba",
            border: "1px solid #8a8a8a",
            padding: "3px 10px",
            height: "24px",
          }}
        >
          <span>🔌</span>
          <span style={{ fontWeight: 600 }}>{formatTime(now)}</span>
        </div>
      </div>
    </div>
  );
}
