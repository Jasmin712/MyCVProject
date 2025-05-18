document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".collapsible");
  sections.forEach(function (section) {
    section.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  loadData();
});

function addEducation() {
  const input = document.getElementById("education-input");
  const value = input.value.trim();
  if (value !== "") {
    const p = document.createElement("p");
    p.textContent = value;
    document.getElementById("education-list").appendChild(p);
    input.value = "";
  }
}

function addSkill() {
  const input = document.getElementById("skill-input");
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("skills-list").appendChild(li);
    input.value = "";
  }
}

function addExperience() {
  const input = document.getElementById("experience-input");
  const value = input.value.trim();
  if (value !== "") {
    const p = document.createElement("p");
    p.textContent = value;
    document.getElementById("experience-list").appendChild(p);
    input.value = "";
  }
}
});

function addEducation() {
  const input = document.getElementById("education-input");
  const value = input.value.trim();
  if (value !== "") {
    const p = document.createElement("p");
    p.textContent = value;
    document.getElementById("education-list").appendChild(p);
    input.value = "";
  }
}

function addSkill() {
  const input = document.getElementById("skill-input");
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("skills-list").appendChild(li);
    input.value = "";
  }
}

function addExperience() {
  const input = document.getElementById("experience-input");
  const value = input.value.trim();
  if (value !== "") {
    const p = document.createElement("p");
    p.textContent = value;
    document.getElementById("experience-list").appendChild(p);
    input.value = "";
  }
}
function saveData() {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = "";
  const emailElement = document.querySelector(".contact p:nth-child(3)");
  const emailText = emailElement ? emailElement.textContent : "";
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(emailText)) {
    errorDiv.textContent = "Email formatı yanlışdır!";
    return;
  }
  const education = document.getElementById("education-list").innerText.trim();
  const skills = document.getElementById("skills-list").innerText.trim();
  const experience = document.getElementById("experience-list").innerText.trim();

  if (!education) {
    errorDiv.textContent = "Zəhmət olmasa təhsil sahəsini doldurun!";
    return;
  }
  if (!skills) {
    errorDiv.textContent = "Zəhmət olmasa bacarıqlar sahəsini doldurun!";
    return;
  }
  if (!experience) {
    errorDiv.textContent = "Zəhmət olmasa iş təcrübəsi sahəsini doldurun!";
    return;
  }
  const data = {
    email: emailText,
    education,
    skills,
    experience
  };

  localStorage.setItem("cvData", JSON.stringify(data));
  alert("Məlumatlar yadda saxlanıldı!");
}
function loadData() {
  const saved = localStorage.getItem("cvData");
  if (saved) {
    const data = JSON.parse(saved);
    const emailElement = document.querySelector(".contact p:nth-child(3)");
    if (emailElement) emailElement.textContent = data.email;
    const educationList = data.education.split("\n");
    const educationContainer = document.getElementById("education-list");
    educationContainer.innerHTML = "";
    educationList.forEach(item => {
      if (item.trim()) {
        const p = document.createElement("p");
        p.textContent = item;
        educationContainer.appendChild(p);
      }
    });
    const skillList = data.skills.split("\n");
    const skillsContainer = document.getElementById("skills-list");
    skillsContainer.innerHTML = "";
    skillList.forEach(item => {
      if (item.trim()) {
        const li = document.createElement("li");
        li.textContent = item;
        skillsContainer.appendChild(li);
      }
    });
    const experienceList = data.experience.split("\n");
    const experienceContainer = document.getElementById("experience-list");
    experienceContainer.innerHTML = "";
    experienceList.forEach(item => {
      if (item.trim()) {
        const p = document.createElement("p");
        p.textContent = item;
        experienceContainer.appendChild(p);
      }
    });
  }
}