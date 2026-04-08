let projects = [];

fetch("https://raw.githubusercontent.com/Sepidehnasiri/first-assignment/main/projects.json")
  .then((response) => response.json())
  .then((data) => {
    projects = data;
    renderProjects(projects);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

const projectContainer = document.getElementById("project-container");
function renderProjects(projectList) {
  projectContainer.innerHTML = "";

  if (projectList.length === 0) {
    projectContainer.innerHTML = `<p class="no-results">No projects found</p>`;
    return;
  }

  projectList.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project.imageURL}" alt="${project.title}" class="project-image">
      <div class="project-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p class="category">${project.category}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      </div>
    `;

    projectContainer.appendChild(card);
  });
}

renderProjects(projects);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue) ||
      project.category.toLowerCase().includes(searchValue)
    );
  });

  renderProjects(filteredProjects);
});