let projects = [
  {
    name: "Project 1",
    hostlink: "https://example1.com",
    githublink: "https://github.com/example1",
    discription:
      "This Weather App is built using React.js and fetches weather data from the OpenWeatherMap API. It allows users to search for a city and get the current weather information, including temperature, humidity, and weather conditions.",
    Technologies: "HTML, CSS, JavaScript",
  },
  {
    name: "Project 2",
    hostlink: "https://example2.com",
    githublink: "https://github.com/example2",
    discription:
      "This is a simple Tic Tac Toe game built using React.js and Material-UI. The game allows two players to play against each other, taking turns to place their marks (X or O) on a 3x3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.",
    Technologies: "React, Node.js",
  },
  {
    name: "Project 3",
    hostlink: "https://example2.com",
    githublink: "https://github.com/example2",
    discription:
      "The Stationery Management System is a desktop application developed for managing college stationery distribution. The application is built using Java Swing for the user interface and MySQL for the database, with JDBC for database connectivity.",
    Technologies: "React, Node.js",
  },
  {
    name: "Project 3",
    githublink: "https://github.com/example2",
    discription:
      "The Stationery Management System is a desktop application developed for managing college stationery distribution. The application is built using Java Swing for the user interface and MySQL for the database, with JDBC for database connectivity.",
    Technologies: "React, Node.js",
  },
];
var modal = document.getElementById("myModal");
// var modalContent = document.getElementById("modalContent");

function closeModal() {
  modal.style.display = "none";
}

function openModal(project) {
  if (project.hostlink == undefined) {
    modal.innerHTML = `<div class="modal-content">
      <div class="modal-header">
        <button class="close" onclick="closeModal()">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h1>${project.name}</h1>
      
        <hr>
      </div>
      <div class="model-head">
        <p class="modal-title">
          <span >Technologies: </span>
          <span >${project.Technologies}</span>
        </p>
      
    
        <p class="modal-title">
          <span>Github: </span>
          <a target="_blank"
            href="${project.githublink}"
            >${project.githublink}
            <i class="ri-external-link-line"></i></a
          ><br>
          <span class="node">*Note: Project Screenshot added in github repository.</span>
        </p>
      </div>
      <p class="modal-title">
        <span>
          Project Description:
        </span>
      </p>
      <p >
      ${project.discription}
      </p>
    </div>`;
  } else {
    modal.innerHTML = `<div class="modal-content">
  <div class="modal-header">
    <button class="close" onclick="closeModal()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h1>${project.name}</h1>
  
    <hr>
  </div>
  <div class="model-head">
    <p class="modal-title">
      <span >Technologies: </span>
      <span >${project.Technologies}</span>
    </p>
  
    <p class="modal-title">
      <span>Live Demo : </span>
      <a
        href="${project.hostlink}"
        target="_blank"
        >${project.hostlink}
        <i class="ri-external-link-line"></i
      ></a>
    </p>
    <p class="modal-title">
      <span>Github: </span>
      <a target="_blank"
        href="${project.githublink}"
        >${project.githublink}
        <i class="ri-external-link-line"></i></a
      ><br>
      <span class="node">*Note: Project Screenshot added in github repository.*</span>
    </p>
  </div>
  <p class="modal-title">
    <span>
      Project Description:
    </span>
  </p>
  <p >
  ${project.discription}
  </p>
</div>`;
  }

  //   modal.innerHTML = `
  //   <div class="modal-header">
  //     <button class="close" onclick="closeModal()">
  //       <i class="fa-solid fa-xmark"></i>
  //     </button>
  //     <h1>${project.name}</h1>
  //     <hr>
  //   </div>
  //   <div class="modal-body">
  //     <p class="modal-title">
  //       <span>Technologies: </span>
  //       <span>${project.Technologies}</span>
  //     </p>
  //     <p class="modal-title">
  //       <span>Live Demo: </span>
  //       <a href="${project.hostlink}" target="_blank">${project.hostlink}
  //         <i class="ri-external-link-line"></i>
  //       </a>
  //     </p>
  //     <p class="modal-title">
  //       <span>GitHub: </span>
  //       <a href="${project.githublink}" target="_blank">${project.githublink}
  //         <i class="ri-external-link-line"></i>
  //       </a>
  //       <br>
  //       <span class="note">*Note: Project Screenshot added in github repository.</span>
  //     </p>
  //     <p class="modal-title">
  //       <span>Project Description:</span>
  //     </p>
  //     <p>${project.discription}</p>
  //   </div>
  // `;
  modal.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  var ele = document.getElementById("projectcard");
  let content = "";

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    var des = project.discription;

    discription = des.substring(0, 99) + "...";

    content += `
      <div class="product_card" data-aos="flip-left">
        <div class="image">
          <img src="https://i.rtings.com/assets/products/nggZcsC3/sony-wh-1000xm4-wireless/design-medium.jpg?format=auto" alt="${
            project.name
          }" />
        </div>
        <div class="product_info">
          <h2 class="product_name">${project.name}</h2>
          <p class="product_description">${discription}</p>
          <div class="bottom">
            <div class="
            ">
              <button id="openModalBtn" onclick='openModal(${JSON.stringify(
                project
              )})'>View Details<i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>`;
  }

  ele.innerHTML = content;
});

