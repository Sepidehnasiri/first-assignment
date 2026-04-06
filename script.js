const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML and CSS.",
    category: "Web Design",
    imageURL: "./img/project-1.jpg",
    link: "#"
  },
  {
    title: "Weather App",
    description: "A weather application using JavaScript and an API.",
    category: "JavaScript",
    imageURL: "./img/project-2.jpg",
    link: "#"
  },
  {
    title: "Task Manager",
    description: "A simple task manager to organize daily work.",
    category: "Productivity",
    imageURL: "./img/project-3.jpg",
    link: "#"
  },
{
    title: "Job Hunt Tracker",
    description: "A job hunting tracker to manage applications and interviews.",
    category: "Productivity",
    imageURL: "./img/project-4.jpg",
    link: "#"
  }
];

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