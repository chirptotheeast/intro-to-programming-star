let today = new Date();

let thisYear = today.getFullYear();
// console.log(thisYear);

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerText = `Alyssa Easterly ${thisYear}`;

footer.appendChild(copyright);

let skills = ["Ruby", "Front-end", "React", "Javascript"];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelectorAll("leave_message")

messageForm.addEventListener("submit", (e) => {

  console.log(input.value);
    e.preventDefault();
});


// messageForm.addEventListener('submit', function messageSubmit(event){
//     const name = event.target.name
//     const email = event.target.email
//     const message = event.target.message
//     console.log(name, email, message)
//     event.preventDefault()

// })
