// ── Projects data ─────────────────────────────────────────────────────────────
// To add a new project: copy one of the objects below and fill in the details.
// image: path to a screenshot in assets/ — set to null to show a placeholder.

const projects = [
  {
    name: "NBA Playoff Predictor",
    description:
      "Predicts playoff series outcomes using live stats from the official NBA Stats API. Blends a weighted scoring model with a calibrated logistic regression trained on 6 seasons of historical data. Achieves 72–76% accuracy across 90 held-out series.",
    tech: ["Python", "Streamlit", "scikit-learn", "FastAPI", "Docker"],
    github: "https://github.com/MikeyLee133/nba-predictor",
    demo: null,
    image: null, // replace with "assets/nba.png" once you have a screenshot
  },
  {
    name: "ConstructIQ",
    description:
      "AI-powered construction project management. Upload inspection reports, photos, and receipts per build phase — then ask questions in plain English across all documents. Answers are grounded in your files with source citations.",
    tech: ["Python", "Streamlit", "RAG", "ChromaDB", "Ollama", "SQLite"],
    github: "https://github.com/MikeyLee133/construct-iq",
    demo: null,
    image: null, // replace with "assets/constructiq.png" once you have a screenshot
  },
];
