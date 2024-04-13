document.addEventListener("DOMContentLoaded", function () {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.location.href = "Main.html";
  } else {
      document.querySelector(".container").classList.add("slide-down");
  }
});

function checkCustomCareer() {
  var careerPlansSelect = document.getElementById("careerPlans");
  var customCareerGroup = document.getElementById("customCareerGroup");
  var customCareerInput = document.getElementById("customCareer");

  if (careerPlansSelect.value === "Other") {
      customCareerGroup.style.display = "block";
      customCareerInput.required = true;
  } else {
      customCareerGroup.style.display = "none";
      customCareerInput.required = false;
      customCareerInput.value = "";
  }
}

document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  setTimeout(function() {
    document.getElementById("surveyForm").reset();
    document.getElementById("successMessage").style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000);
});
