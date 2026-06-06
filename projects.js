// ── Projects data ─────────────────────────────────────────────────────────────
// To add a new project: copy one of the objects below and fill in the details.
// image: path to a screenshot in assets/ — set to null to show a placeholder.

const projects = [
  {
    name: "The Hardwood Index — NBA Predictor",
    description:
      "Client-side NBA win-probability terminal styled as an editorial analytics publication. Pick two teams and it projects the winner, win probability, and final score by blending team net ratings with position-by-position starter matchups — plus edge-by-category breakdowns and narrative X-factors. All math runs in the browser; every on-screen number traces to an input.",
    tech: ["JavaScript", "React", "HTML/CSS", "Statistical Modeling"],
    github: "https://github.com/MikeyLee133/nba-predictor",
    demo: null,
    image: "assets/nba.png",
  },
  {
    name: "Luna mHealth",
    description:
      "Mobile health education app built for rural communities with limited healthcare access. Features an authoring system that lets healthcare professionals create and distribute custom education modules — no engineering support required. Built with a cross-functional team using Agile and TDD.",
    tech: ["Dart", "Flutter", "Azure", "Git", "XML"],
    github: null,
    demo: null,
    image: null,
  },
  {
    name: "ConstructIQ",
    description:
      "AI-powered construction project management. Upload inspection reports, photos, and receipts per build phase — then ask questions in plain English across all documents. Answers are grounded in your files with source citations.",
    tech: ["Python", "Streamlit", "RAG", "ChromaDB", "Ollama", "SQLite"],
    github: "https://github.com/MikeyLee133/construct-iq",
    demo: null,
    image: "assets/construct.png",
  },
];
