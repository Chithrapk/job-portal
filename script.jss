function fillForm(jobTitle, location) {
  document.getElementById("cover-letter").value = `I am interested in the ${jobTitle} role located in ${location}.`;
  window.scrollTo({
    top: document.getElementById("application-form").offsetTop,
    behavior: "smooth"
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("application-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Application submitted successfully!");
});
