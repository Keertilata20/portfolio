import { useEffect } from "react";
function App() {
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
    tech: "ML • Behavioural Biometrics",
    status: "Active",
    impact: "Adaptive trust scoring",
    live: "https://zero-trust-auth.onrender.com/",
    code: "https://github.com/Keertilata20/zero-trust-auth"
  },
  {
    title: "AI Phish Guard",
    desc: "Phishing detection system",
    tech: "NLP • Threat Detection",
    status: "Scanning",
    impact: "Explainable risk engine",
    live: "https://ai-phish-guard.onrender.com/",
    code: "https://github.com/Keertilata20/ai-phish-guard"
  },
  {
    title: "AI Finance Agent",
    desc: "Intelligent financial assistant leveraging data-driven insights",
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
  KL<span style={{ color: "#E6F1F5" }}> Systems</span>
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
  AI Security Systems • Behavioural Intelligence • Adaptive Trust
</h3>

        <p style={{ opacity: 0.8,lineHeight: "1.6" }}>
          Building intelligent systems that observe, adapt and verify.
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
    Explore Systems →
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
        items: ["React", "FastAPI", "Data Analysis", "NLP"]
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

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(0,245,212,0.2)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
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
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
         gap: "30px",
          maxWidth: "900px",
          margin: "auto",
           opacity: 0,
           animation: `fadeIn 0.6s ease forwards`,
           transition: "all 0.3s ease",
           marginTop: "40px",
background: "rgba(19, 47, 58, 0.3)",
borderRadius: "20px",
padding: "30px",
boxShadow: "0 0 60px rgba(0,245,212,0.08)"

        }}>

          

          {modules.map((item, index) => (
            <div
  key={index}
  style={{
    background: "#132F3A",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0,245,212,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    transformStyle: "preserve-3d",
    cursor: "pointer"
  }}

  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,212,0.25)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
  }}
>
              <p style={{ fontSize: "12px", color: "#00F5D4" }}>
  {item.tech}
</p>

<p style={{ fontSize: "12px", opacity: 0.6 }}>
  Status: {item.status}
</p>

<p style={{ fontSize: "13px", marginTop: "8px" }}>
  {item.impact}
</p>
              <h4 style={{ color: "#E6F1F5",transform: "translateZ(20px)" }}>{item.title}</h4>
              <p style={{ opacity: 0.8, lineHeight: "1.6"}}>{item.desc}</p>
              

              <div style={{ marginTop: "15px" }}>
                {item.live && (
                  <button
                    onClick={() => window.open(item.live, "_blank")}
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
                  onClick={() => window.open(item.code, "_blank")}
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

  <p style={{ opacity: 0.6 }}>
    Open to collaborations, ideas, and AI system building
  </p>

  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap"
  }}>

    {[
      {
        name: "LinkedIn",
        icon: "🔗",
        link: "https://www.linkedin.com/in/keerti-lata-choudhury-20oct2005/"
      },
      {
        name: "GitHub",
        icon: "💻",
        link: "https://github.com/Keertilata20"
      },
      {
        name: "Email",
        icon: "📧",
        link: "mailto:keerti150226@gmail.com"
      }
    ].map((item, i) => (

      <div
        key={i}
        onClick={() => window.open(item.link, "_blank")}
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
          boxShadow: "0 0 20px rgba(0,245,212,0.08)",
          position: "relative"
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

        <div style={{ fontSize: "26px" }}>{item.icon}</div>

        <div style={{
          marginTop: "10px",
          fontWeight: "bold",
          color: "#E6F1F5"
        }}>
          {item.name}
        </div>

      </div>
    ))}

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