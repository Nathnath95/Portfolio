"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ICONS = [
  { key: "profile", label: "My profile", glyph: "👤" },
  { key: "experience", label: "Experience", glyph: "💼" },
  { key: "education", label: "Education", glyph: "🎓" },
  { key: "projects", label: "Projects", glyph: "📁" },
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

const CONTENT = {
  profile: {
    title: "My Profile",
    body: (
      <>
        <Image 
          src="/1x1.png"
          alt="Nathaniel Lejano"
          width={200}
          height={200}
          style={{ border: "2px solid #000000", marginBottom: "12px" }}
        />
        <p>Hello, I'm Nathaniel Lejano. I made this simple portfolio to introduce myself.</p>
        <p><br /> I am 22 years old, and I am currently residing in Lian, Batangas.</p>
        <p><br />I am a fresh graduate from Batangas State University - The National Engineering University (Alangilan Campus) as a Bachelor of Science in Computer Science.</p>
        <p><br />I have a strong passion for software development, and I am eager to learn more and upskill in professional settings in order to grow as a professional.</p>
        <p><br />If you want to know more about me, click around the icons on the left to see my experience, education, projects, and more.</p>
      </>
    ),
  },
  experience: {
    title: "Experience",
    body: (
      <>
        <div style={rowStyle}>
          <strong>UI/UX Designer & Front-end Developer — Center for Artificial Intelligence and Smart Technologies (On-the-Job Training) </strong>
          <div style={mutedStyle}>June 2025 – July 2025</div>
          <p>• Designed and developed mockups and interactive prototypes for a web-based system using Figma.</p>
          <p>• Translated approved designs into a functional front-end interface using Laravel and Livewire.</p>
          <p>• Coordinated with back-end developers to discuss and implement interface functionalities.</p>
          <p>• Created documentation for the front-end components and features of the system.</p>
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
          <div style={mutedStyle}>Batangas State University - Alangilan Campus — 2026</div>
          <p>• Cum Laude</p>
          <p>• Dean's Lister</p>
        </div>
        <div style={rowStyle}>
          <strong>STEM</strong>
          <div style={mutedStyle}>Batangas State University - ARASOF — 2022</div>
          <p>• With Honors</p>
        </div>
      </>
    ),
  },
  projects: {
    title: "Projects",
    body: (
      <>
        <div style={rowStyle}>
          <strong>DebTabbed</strong>
          <p>A web-based system for managing expenses in multiple households.</p>
        </div>
        <div style={rowStyle}>
          <strong>Kaisigns</strong>
          <p>Short description of the project, your role, and the stack used.</p>
        </div>
        <div style={rowStyle}>
          <strong>Gestura</strong>
          <p>A prototype for a system that aids users in learning and interpreting sign language. It utilizes the camera to detect valid hand gestures which are then translated to the corresponding sign language alphabet. </p>
        </div>
        <div style={rowStyle}>
          <strong>Scripter</strong>
          <p>A mobile application that recognizes speech and transcribes it as audio to text, in which the transcribed content can then be modified manually or automatically with the help of Gemini AI. Furthermore, it also features user authentication, Bluetooth connectivity, file transfer, and file management.</p>
        </div>
      </>
    ),
  },
  certificates: {
    title: "Certificates",
    body: (
      <>
        <div style={rowStyle}>
          <strong>Developing Designs for User Interface</strong>
          <div style={mutedStyle}>TESDA — 2026</div>
        </div>
        <div style={rowStyle}>
          <strong>Developing Designs for User Experience</strong>
          <div style={mutedStyle}>TESDA — 2026</div>
        </div>
        <div style={rowStyle}>
          <strong>Microsoft Artificial Intelligence Course: Azure AI Fundamentals</strong>
          <div style={mutedStyle}>TESDA — 2026</div>
        </div>
        <div style={rowStyle}>
          <strong>DataBix Conference 2024 (Data Science, Artificial Intelligence, and Business Analytics)</strong>
          <div style={mutedStyle}>Batangas Information Technology Society — 2024</div>
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
          <div style={mutedStyle}>nathaniellejano953@gmail.com</div>
        </div>
        <div style={rowStyle}>
          <strong>LinkedIn</strong>
          <div style={mutedStyle}>linkedin.com/in/nathaniel-lejano-a5a91a286</div>
        </div>
        <div style={rowStyle}>
          <strong>GitHub</strong>
          <div style={mutedStyle}>github.com/nathnath95</div>
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
                      width: "800px",
                      height: "680px",
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
