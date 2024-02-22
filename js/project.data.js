/* ********************************************************** */
// Projects Details Data Object
/* ********************************************************** */

let projectDetails = [
  {
    id: 1,
    name: "APEX COMMUNITY Website",
    repo: "APEX/APEX-WEBSITE",
    desc: "Official Website for APEX COMMUNITY, and which is open source 🤩.",

    viewLink: "https://APEX.github.io/",
    repoLink: "",

    viewtarget: "_blank",
    repotarget: "_blank",
  }
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectDiv = document.querySelector(".projects_contents");

Object.values(projectDetails).map((val) => {
  projectDiv.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="project_card">
            <h2>${val.name}</h2>
            <a href="${val.repoLink}" class="repo">${val.repo}</a>
            <p>${val.desc}</p>
            <div class="links">
                <a href="${val.viewLink}" target="${val.viewtarget}">Preview</a>
                <a href="${val.repoLink}" target="${val.repotarget}">Repository</a>
            </div>
        </div>
    `;
});
