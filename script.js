// Açılıb-bağlanan hissələr
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".collapsible");
   sections.forEach(function (section) {
      section.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
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
  