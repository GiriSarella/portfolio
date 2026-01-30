// Auto update year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// -----------------------------
// Scroll reveal animation (enhanced)
// -----------------------------
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 80}ms`;
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 },
);

reveals.forEach((section) => observer.observe(section));

// -----------------------------
// Inject subtle professional animations via JS (no framework)
// -----------------------------
const style = document.createElement("style");
style.textContent = `
  .card{transition:transform .3s ease, box-shadow .3s ease;}
  .card:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 18px 40px rgba(0,0,0,.45);}

  .github-btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    margin-top:14px;
    padding:10px 14px;
    border-radius:10px;
    background:#0f172a;
    border:1px solid #1f2a44;
    color:#e5e7eb;
    font-size:14px;
    transition:all .25s ease;
  }

  .github-btn:hover{
    background:#111827;
    transform:translateY(-2px);
  }

  .pulse{
    animation:pulse 2.2s infinite;
  }

  @keyframes pulse{
    0%{box-shadow:0 0 0 0 rgba(99,102,241,.5)}
    70%{box-shadow:0 0 0 12px rgba(99,102,241,0)}
    100%{box-shadow:0 0 0 0 rgba(99,102,241,0)}
  }
`;

document.head.appendChild(style);

// -----------------------------
// GitHub Projects Button
// -----------------------------
// NOTE: Replace the URL below with your real GitHub profile link
const githubProfileUrl = "https://github.com/your-username";

const projectsSection = document.getElementById("projects");

if (projectsSection) {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "24px";

  const btn = document.createElement("a");
  btn.href = githubProfileUrl;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.className = "github-btn pulse";
  btn.innerHTML = "🚀 View all my projects on GitHub";

  wrapper.appendChild(btn);
  projectsSection.appendChild(wrapper);
}

// -----------------------------
// Smooth scrolling for navbar
// -----------------------------
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
