import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useRef } from "react";



function App() {
  const previewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

`;
const navLinkStyle = {
   color: "#E6F1F5",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.3s ease",
  position: "relative",
  paddingBottom: "4px"
};
  const modules = [
  {
    title: "Zero Trust Auth",
    desc: "Behavioural authentication system",
    details:"Continuously verifies users based on typing speed, interaction patterns, and behavioural signals to prevent unauthorized access.",
    image: "/Auth.gif",
    tech: "ML • Behavioural Biometrics",
    status: "Active",
    impact: "Adaptive trust scoring",
    live: "https://zero-trust-auth.onrender.com/",
    code: "https://github.com/Keertilata20/zero-trust-auth"
  },
  {
    title: "AI Phish Guard",
    desc: "Phishing detection system",
    details:
      "Analyzes URLs, email content, and patterns using NLP to detect phishing attempts in real-time.",
    image: "/Phish.gif",
    tech: "NLP • Threat Detection",
    status: "Scanning",
    impact: "Explainable risk engine",
    live: "https://ai-phish-guard.onrender.com/",
    code: "https://github.com/Keertilata20/ai-phish-guard"
  },
  {
    title: "AI Finance Agent",
    desc: "Intelligent financial assistant leveraging data-driven insights",
  details: "Allows users to upload financial documents and interact with an AI-powered system to understand spending patterns, generate trends, and receive improvement suggestions",
  tech: "Data Analysis • Predictive AI",
  status: "Advising",
  impact: "Personalized recommendations & trend analysis",
  code: "https://github.com/nishant150226-hub/ai_finance_agent"}
];
useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });
  window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;

  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll("nav a").forEach((link) => {
        link.style.color = "#E6F1F5";
      });

      const active = document.querySelector(`nav a[href="#${id}"]`);
      if (active) active.style.color = "#00F5D4";
    }
  });
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;

  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = scrolled + "%";
});

  elements.forEach((el) => observer.observe(el));
}, []
);
return (
  
  <div style={{ scrollBehavior: "smooth" }}>
    <style>{styles}</style>

    {/* NAVBAR */}
        <div id="progress-bar" style={{
  position: "fixed",
  top: 0,
  left: 0,
  height: "3px",
  background: "#00F5D4",
  width: "0%",
  zIndex: 2000,
  boxShadow: "0 0 10px rgba(0,245,212,0.7)"
}} />
<nav>
<div style={{
  position: "fixed",
  top: "3px",
  left: 0,
  width: "100%",
  boxSizing: "border-box", 
  background: "rgba(11, 30, 38, 0.7)",
  backdropFilter: "blur(10px)",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(0,245,212,0.1)",
  zIndex: 1000
}}>
  <h3 style={{
  color: "#00F5D4",
  margin: 0,
  letterSpacing: "1px",
  fontSize: "18px"
}}>
  KLC<span style={{ color: "#E6F1F5" }}> Systems</span>
</h3>

  <div style={{ display: "flex", gap: "25px" }}>
    <a href="#projects" style={navLinkStyle} onMouseEnter={(e) => {
  e.target.style.color = "#00F5D4";
    e.target.style.borderBottom = "2px solid #00F5D4";
}}
onMouseLeave={(e) => {
  e.target.style.color = "#E6F1F5";
   e.target.style.borderBottom = "none";
}}>Projects</a>
    <a href="#contact" style={navLinkStyle} onMouseEnter={(e) => {
  e.target.style.color = "#00F5D4";
    e.target.style.borderBottom = "2px solid #00F5D4";
}}
onMouseLeave={(e) => {
  e.target.style.color = "#E6F1F5";
   e.target.style.borderBottom = "none";
}}>Contact</a>
  </div>
</div></nav>


    {/* MAIN CONTAINER */}
 <div style={{
  background: `
    radial-gradient(circle at 10% 20%, rgba(0,245,212,0.05), transparent 30%),
    radial-gradient(circle at 80% 10%, rgba(54,188,247,0.05), transparent 30%),
    linear-gradient(135deg, #0B1E26, #08161C)
  `,
  color: "#E6F1F5",
  minHeight: "100vh",
  padding: "50px 20px",
  paddingTop: "100px",
  fontFamily: "sans-serif",
  textAlign: "center",
  opacity: 0,
  animation: "fadeIn 1s ease forwards",
  maxWidth: "1200px",
margin: "0 auto",
  
}}>

      {/* HERO */}
      <div className="reveal" style={{ marginBottom: "60px",
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s ease", }}>
        <h1 style={{
          color: "#E6F1F5",
          fontSize: "40px",
          textShadow: "0 0 15px rgba(0,245,212,0.4)"
        }}>
          Keerti Lata Choudhury
        </h1>

       <h3 style={{ color: "#00F5D4" }}>
  AI Developer focused on Security, Behaviour & Intelligent Systems
</h3>

<p style={{ opacity: 0.8, lineHeight: "1.6" }}>
  Building adaptive systems that observe, learn, and respond in real time.
</p>
        <p style={{
  marginTop: "8px",
  fontSize: "14px",
  opacity: 0.6
}}>
<p style={{
  marginTop: "8px",
  fontSize: "14px",
  opacity: 0.6
}}>
  Computer Science Student • Building real-world AI systems with focus on security & intelligence
</p>
</p>
  
      </div>

      {/*EXPLORE SYSTEM  */}
<div style={{
  marginTop: "20px",
  marginBottom: "60px"
}}>
  <a
    href="#projects"
    style={{
      padding: "10px 20px",
      background: "#00F5D4",
      color: "#08161C",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 0 10px rgba(0,245,212,0.5)",
      transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
  e.target.style.boxShadow = "0 0 20px rgba(0,245,212,0.9)";
  e.target.style.transform = "scale(1.05)";
}}
onMouseLeave={(e) => {
  e.target.style.boxShadow = "0 0 10px rgba(0,245,212,0.5)";
   e.target.style.transform = "scale(1)";
}}
  >
    View My Work
  </a>
</div>
      {/* TALKSPACE */}
      <div id="projects" className="reveal" style={{
        margin: "auto",
        maxWidth: "700px",
        padding: "30px",
        background: "#132F3A",
        borderRadius: "14px",
        boxShadow: "0 0 20px rgba(0, 245, 212, 0.1)", opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s ease"
      }}>
        <h2 style={{ color: "#E6F1F5" }}>🧠 TalkSpace AI</h2>

        <p style={{ fontSize: "13px", opacity: 0.7 }}>
  Tech: Streamlit • NLP • Emotion Detection
</p>

        <p style={{ opacity: 0.8,lineHeight: "1.6" }}>
          Emotion-aware conversational system that adapts based on user behaviour.
        </p>

        {/* FIXED GIF PATH */}
        <img
          src="/demo.gif"
          alt="TalkSpace demo"
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,245,212,0.15)"
          }}
        />

        <br /><br />

        <a
          href="https://talkspace-ai.streamlit.app/"
          target="_blank"
          style={{
            color: "#00F5D4",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Live Demo →
        </a>
      </div>

<div style={{
  height: "1px",
  width: "60%",
  margin: "60px auto",
  background: "linear-gradient(to right, transparent, rgba(0,245,212,0.3), transparent)"
}} />


{/* TECH STACK */}

<div className="reveal" style={{
  marginTop: "80px",
  textAlign: "center",
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s ease"
}}>

  <h2 style={{
    color: "#E6F1F5",
    letterSpacing: "1px",
    textTransform: "uppercase"
  }}>
    ⚙️ System Capabilities
  </h2>

  {/* DEFINE DATA */}
  {(() => {
    const techGroups = [
      {
        title: "AI / ML",
        items: ["Machine Learning", "Behavioural Biometrics", "Predictive AI"]
      },
      {
        title: "Security",
        items: ["Threat Detection", "Cybersecurity", "Adaptive Trust"]
      },
      {
        title: "Development",
        items: [
  "React (Frontend)",
  "FastAPI (Backend)",
  "NLP (ML)",
  "Data Analysis (Python)"
]
      }
    ];

    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>

        {techGroups.map((group, i) => (
          <div
            key={i}
            style={{
              background: "rgba(19, 47, 58, 0.5)",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "220px",
              backdropFilter: "blur(8px)",
              transition: "0.3s",
              boxShadow: "0 0 15px rgba(0,245,212,0.08)"
            }}

           
            onMouseLeave={(e) => {
            
  e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
  e.currentTarget.style.transition = "all 0.3s ease";

              e.currentTarget.style.boxShadow = "0 0 15px rgba(0,245,212,0.08)";
            }}
          >

            <h4 style={{ color: "#00F5D4" }}>
              {group.title}
            </h4>

            <div style={{
  marginTop: "15px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center"
}}>
  {group.items.map((item, idx) => (
    <span
      key={idx}
      style={{
        padding: "6px 10px",
        background: "rgba(0,245,212,0.08)",
        borderRadius: "999px",
        fontSize: "12px",
        border: "1px solid rgba(0,245,212,0.15)",
        transition: "0.3s",
        cursor: "default"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#00F5D4";
        e.currentTarget.style.color = "#08161C";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,245,212,0.08)";
        e.currentTarget.style.color = "#E6F1F5";
      }}
    >
      {item}
    </span>
  ))}
</div>

          </div>
        ))}

      </div>
    );
  })()}

</div>

{/* DIVIDER */}
<div style={{
  height: "1px",
  width: "60%",
  margin: "60px auto",
  background: "linear-gradient(to right, transparent, rgba(0,245,212,0.3), transparent)"
}} />
      {/* MODULES */}
      <div className="reveal" style={{marginTop: "60px",
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s ease" }}>
        <h2 style={{ color: "#E6F1F5", marginBottom: "20px" }}>
          🧩 Modules
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
         gap: "30px",
          maxWidth: "900px",
          margin: "auto",
           opacity: 0,
           animation: `fadeIn 0.6s ease forwards`,
           transition: "all 0.4s ease",
           overflow: "hidden",
           marginTop: "40px",
background: "rgba(19, 47, 58, 0.3)",
borderRadius: "20px",
padding: "30px",
boxShadow: "0 0 60px rgba(0,245,212,0.08)",
        }}>

    {modules.map((item, index) => (
      <div
        key={index}
        onClick={() => {
  const newIndex = activeIndex === index ? null : index;
  setActiveIndex(newIndex);

  setTimeout(() => {
    previewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}}
        style={{
          background: "#132F3A",
          padding: "25px",
          borderRadius: "16px",
border: activeIndex === index
  ? "1px solid rgba(0,245,212,0.4)"
  : "1px solid transparent",

          transition: "all 0.3s ease",
          cursor: "pointer",
          transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
          boxShadow: activeIndex === index
            ? "0 0 40px rgba(0,245,212,0.25)"
            : "0 0 30px rgba(0,245,212,0.08)",
            opacity: activeIndex === null
  ? 1
  : activeIndex === index
  ? 1
  : 0.4


        }}
      >

        <p style={{ fontSize: "12px", color: "#00F5D4" }}>
          {item.tech}
        </p>

        <p style={{ fontSize: "12px", opacity: 0.6 }}>
          Status: {item.status}
        </p>

        <h4 style={{ color: "#E6F1F5" }}>
          {item.title}
        </h4>

        <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
          {item.desc}
        </p>

        {/* EXPAND SECTION */}
        

        {/* BUTTONS */}
        <div style={{ marginTop: "15px" }}>
          {item.live && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.live, "_blank");
              }}
              style={{
                marginRight: "10px",
                padding: "6px 12px",
                background: "#00F5D4",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Live
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(item.code, "_blank");
            }}
            style={{
              padding: "6px 12px",
              background: "#1F4D5A",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Code
          </button>
        </div>

      </div>
    ))}
    
    

  </div>
  {activeIndex !== null && (
  <div ref={previewRef} style={{
    marginTop: "80px",
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(19,47,58,0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 60px rgba(0,245,212,0.2)",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto", 
    transform: "translateY(30px)",
  opacity: 1,
  animation: "slideUp 0.5s",
  position: "relative",
  }}>
    <h2 style={{ color: "#00F5D4" }}>
      {modules[activeIndex].title}
    </h2>

    <p style={{ marginTop: "10px", opacity: 0.8 }}>
      {modules[activeIndex].details}
    </p>

    {modules[activeIndex].image && (
      <img
        src={modules[activeIndex].image}
        alt="preview"
        style={{
          width: "100%",
          marginTop: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(0,245,212,0.25)"
        }}
      />
    )}

          <div
  onClick={() => setActiveIndex(null)}
  style={{
    position: "absolute",
    top: "15px",
    right: "20px",
    cursor: "pointer",
    fontSize: "18px",
    color: "#00F5D4"
  }}
>
  ✕
</div>

    <div style={{ marginTop: "20px" }}>
      {modules[activeIndex].live && (
        <button
          onClick={() => window.open(modules[activeIndex].live, "_blank")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            background: "#00F5D4",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Live
        </button>
        
      )}

      <button
        onClick={() => window.open(modules[activeIndex].code, "_blank")}
        style={{
          padding: "8px 16px",
          background: "#1F4D5A",
          border: "none",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Code
      </button>


    </div>
  </div>
)}

</div>

<div style={{
  height: "1px",
  width: "60%",
  margin: "60px auto",
  background: "linear-gradient(to right, transparent, rgba(0,245,212,0.3), transparent)"
}} />


 {/* CONTACT */}
<div id="contact" className="reveal" style={{
  marginTop: "120px",
  textAlign: "center",
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s ease"
}}>
  <h2 style={{ color: "#E6F1F5" }}>📡 Connect</h2>

 <p style={{ opacity: 0.7 }}>
  Open to internships, collaborations, and AI system development
</p>

  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap"
  }}>

    {/* LINKEDIN */}
    <div
      onClick={() => window.open("https://www.linkedin.com/in/keerti-lata-choudhury-20oct2005/", "_blank")}
      style={{
        width: "160px",
        height: "120px",
        background: "rgba(19, 47, 58, 0.6)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 0 20px rgba(0,245,212,0.08)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,212,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,212,0.08)";
      }}
    >
      <FaLinkedin size={28} color="#00F5D4" />
      <div style={{ marginTop: "10px", color: "#E6F1F5", fontWeight: "bold" }}>
        LinkedIn
      </div>
    </div>

    {/* GITHUB */}
    <div
      onClick={() => window.open("https://github.com/Keertilata20", "_blank")}
      style={{
        width: "160px",
        height: "120px",
        background: "rgba(19, 47, 58, 0.6)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 0 20px rgba(0,245,212,0.08)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,212,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,212,0.08)";
      }}
    >
      <FaGithub size={28} color="#00F5D4" />
      <div style={{ marginTop: "10px", color: "#E6F1F5", fontWeight: "bold" }}>
        GitHub
      </div>
    </div>

    {/* EMAIL */}
    <div
      onClick={() => window.location.href = "mailto:keerti150226@gmail.com"}
      style={{
        width: "160px",
        height: "120px",
        background: "rgba(19, 47, 58, 0.6)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 0 20px rgba(0,245,212,0.08)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,212,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,212,0.08)";
      }}
    >
      <MdEmail size={28} color="#00F5D4" />
      <div style={{ marginTop: "10px", color: "#E6F1F5", fontWeight: "bold" }}>
        Email
      </div>
    </div>

  </div>
</div>

      {/* FOOTER */}
      <div style={{
        marginTop: "80px",
  paddingTop: "25px",
  borderTop: "1px solid rgba(0,245,212,0.1)",
  opacity: 0.5,
  fontSize: "13px",
  letterSpacing: "0.5px"
      }}>
       © 2026 Keerti Lata Choudhury  <br></br>
Building AI Systems • Security • Adaptive Intelligence
      </div>

    </div>
  </div>
);
}

export default App;