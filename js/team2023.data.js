/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// Faculty Advisor Details
let facul = [
  {
    id: 0,
    name: "Dr. Gururaj H L",
    avatar: "../assets/img/team/Dr._Gururaj.jpeg",
    badges: ``,
    socialLinkedinLink: "https://www.linkedin.com/in/dr-gururaj-h-l-92513539/",
  },
  {
    id: 1,
    name: "Dr. Sapna R",
    avatar: "../assets/img/team/Dr._Sapna.jpeg",
    badges: ``,
    socialLinkedinLink: "https://www.linkedin.com/in/sapna-r-3271b424/",
  },
];

// Lead Member Details
let leadMemberDetails2023 = [
  {
    id: 0,
    name: "Parth Bhatnagar",
    avatar: "../assets/img/team/Parth_Bhatnagar.jpeg",
    badges: `       <span class="blue">APEX</span>
                    <span class="green">President</span>
                `,

    socialLinkedinLink: "https://www.linkedin.com/in/parth-bhatnagar-01650a256/",
  },
  {
    id: 1,
    name: "Disha Panwar",
    avatar: "../assets/img/team/Disha_Panwar.jpeg",
    badges: `       <span class="blue">APEX</span>
                     <span class="green">Vice-President</span>
                `,
    socialLinkedinLink: "https://www.linkedin.com/in/disha-panwar-07414a290/",

  },
  {
    id: 3,
    name: "Ambikesh Jha",
    avatar: "../assets/img/team/Ambikesh_Jha.jpeg",
    badges: `    <span class="green">Treasurer</span>
                `,
    socialLinkedinLink: "https://www.linkedin.com/in/ambikesh-jha-714652252/",

  }  
];

// *************** Core Members Details 2023 ***************************
let coreMembersDetails2023 = [
  {
    id:0,
    name:"Shivansh Gautam",
    avatar: "../assets/img/team/Shivansh_Gautam.jpeg",
    badges: `
      <span class="green">Secretary</span>
      `,
    socialLinkedinLink: "https://www.linkedin.com/in/shivansh-gautam-sg/",
  },
  {
    id:1,
    name:"Nishant Tripathi",
    avatar: "../assets/img/team/Nishant_Tripathi.jpeg",
    badges: `
      <span class="green">Logistic Head</span>
    `,
    socialLinkedinLink: "https://www.linkedin.com/in/nishant-tripathi-4474a9212/",
  },
  {
    id:2,
    name:"Ananya Dua",
    avatar: "../assets/img/team/Ananya_Dua.jpeg",
    badges: `
      <span class="green">Marketing Head</span>
    `,
    socialLinkedinLink: "https://www.linkedin.com/in/ananya-dua-212a46275/",
  },
];

// *************** Technical Lead Members Details 2023 ***************************
let techleadMemberDetails2023 = [
  {
    id:0,
    name:"Arnab Jena",
    avatar: "../assets/img/team/Arnab_Jena.jpg",
    badges: `       <span class="blue">Technical</span>
                     <span class="green">Chair</span>
                `,
    socialLinkedinLink: "https://www.linkedin.com/in/arnabjena/",
  },
  {
    id:1,
    name:"Panchadip",
    avatar: "../assets/img/team/Panchadip.jpg",
    badges: `       <span class="green">Web Developer</span>
                `,
    socialLinkedinLink: "https://www.linkedin.com/in/panchadip-192388228/",
  },
  {
    id:2,
    name:"Prabhsimar Singh Dhingra",
    avatar: "../assets/img/team/Prabhsimar.jpg",
    badges: `       <span class="green">Web Developer</span>
                `,
    socialLinkedinLink: "https://www.linkedin.com/in/arnabjena/",
  }
];

/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */
let leadMember = document.querySelector("#lead");
let techleadMember = document.querySelector("#tech");
let coreMember = document.querySelector("#core");
let excoreMember = document.querySelector("#exCore");
let faculty = document.querySelector("#faculty-advisor");

Object.values(facul).map((val) => {
  faculty.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
              
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                
            </div>
        </div>
    `;
});
// **************** Lead Member 2023 ***********************

Object.values(leadMemberDetails2023).map((val) => {
  leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    `;
});

// **************** Technical Lead Member 2023 ***********************

Object.values(techleadMemberDetails2023).map((val) => {
  techleadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    `;
});

// **************** Core ***********************

Object.values(coreMembersDetails2023).map((val) => {
  coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialLinkedinLink}" ><i class="bx bxl-linkedin"></i></a>
        </div>
    `;
});
