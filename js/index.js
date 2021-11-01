let today = new Date();

let thisYear = today.getFullYear();
console.log(thisYear);

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerText = `Alyssa Easterly ${thisYear}`;

footer.appendChild(copyright);

let skills = ["Ruby", "Front-end", "React", "Javascript"];

let skillsSection = document.getElementById("skills");
const unorderedList = document.createElement('ul')



for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  console.log(skill);
 unorderedList.appendChild(skill);
}

skillsSection.appendChild(unorderedList)
