// Renders project cards from the projects array in projects.js

function buildCard(project) {
  const imageHtml = project.image
    ? `<div class="card-image"><img src="${project.image}" alt="${project.name} screenshot" /></div>`
    : `<div class="card-image placeholder">Screenshot coming soon</div>`;

  const tagsHtml = project.tech
    .map(t => `<span class="tag">${t}</span>`)
    .join("");

  const githubBtn = project.github
    ? `<a href="${project.github}" class="card-btn secondary" target="_blank">GitHub</a>`
    : "";

  const demoBtn = project.demo
    ? `<a href="${project.demo}" class="card-btn primary" target="_blank">Live Demo</a>`
    : "";

  return `
    <div class="card">
      ${imageHtml}
      <div class="card-body">
        <div class="card-title">${project.name}</div>
        <div class="card-desc">${project.description}</div>
        <div class="card-tags">${tagsHtml}</div>
        <div class="card-buttons">${demoBtn}${githubBtn}</div>
      </div>
    </div>
  `;
}

document.getElementById("projects-grid").innerHTML =
  projects.map(buildCard).join("");
