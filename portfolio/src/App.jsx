function App() {
  const modules = [
  {
    title: "Zero Trust Auth",
    desc: "Behavioural authentication system",
    live: "https://zero-trust-auth.onrender.com/",
    link: "https://github.com/Keertilata20/zero-trust-auth"
  },
  {
    title: "AI Phish Guard",
    desc: "Phishing detection system",
    live: "https://ai-phish-guard.onrender.com/",
    link: "https://github.com/Keertilata20/ai-phish-guard"
  },
  {
    title: "AI Finance Agent",
    desc: "AI-powered financial assistant",
    link: "https://github.com/nishant150226-hub/ai_finance_agent"
  }
];
return (
  <div style={{ scrollBehavior: "smooth" }}>

    {/* NAVBAR */}
    <div style={{
      position: "sticky",
      top: 0,
      background: "#0B1E26",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #1F4D5A",
      zIndex: 100
    }}>
      <h3 style={{ color: "#00F5D4", margin: 0 }}>
        KL
      </h3>

      <div>
        <a href="#projects" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </div>

    {/* MAIN CONTAINER */}
    <div style={{
      background: "linear-gradient(135deg, #0B1E26, #08161C)",
      color: "#E6F1F5",
      minHeight: "100vh",
      padding: "50px 20px",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>

      {/* HERO */}
      <div style={{ marginBottom: "60px" }}>
        <h1 style={{
          color: "#E6F1F5",
          fontSize: "40px",
          marginBottom: "10px",
          textShadow: "0 0 10px rgba(0,245,212,0.3)"
        }}>
          Keerti Lata Choudhury
        </h1>

        <h3 style={{ color: "#00F5D4" }}>
          AI Security Systems
        </h3>

        <p style={{ opacity: 0.8 }}>
          Building intelligent systems that observe, adapt, and verify.
        </p>
      </div>

      {/* TALKSPACE */}
      <div id="projects" style={{
        margin: "auto",
        maxWidth: "700px",
        padding: "30px",
        background: "#132F3A",
        borderRadius: "14px",
        boxShadow: "0 0 20px rgba(0, 245, 212, 0.1)"
      }}>
        <h2 style={{ color: "#E6F1F5" }}>🧠 TalkSpace AI</h2>

        <p style={{ opacity: 0.8 }}>
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

      {/* MODULES */}
      <div style={{ marginTop: "60px" }}>
        <h2 style={{ color: "#E6F1F5", marginBottom: "20px" }}>
          🧩 Modules
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          maxWidth: "900px",
          margin: "auto"
        }}>

          {modules.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#132F3A",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0,245,212,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
              }}
            >
              <h4 style={{ color: "#E6F1F5" }}>{item.title}</h4>
              <p style={{ opacity: 0.7 }}>{item.desc}</p>

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

      {/* CONTACT */}
      <div id="contact" style={{ marginTop: "80px" }}>
         <h2 style={{ color: "#E6F1F5" }}>📫 Contact</h2>

        <p>
          <a
            href="https://www.linkedin.com/in/keerti-lata-choudhury-20oct2005/"
            target="_blank"
            style={{ color: "#00F5D4",textAlign:"center", textDecoration: "none" }}
          >
             LinkedIn
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <div style={{
        marginTop: "60px",
        paddingTop: "20px",
        borderTop: "1px solid #1F4D5A",
        opacity: 0.6,
        fontSize: "14px"
      }}>
        © 2026 Keerti Lata Choudhury • Built with React ⚛️
      </div>

    </div>
  </div>
);
}

export default App;