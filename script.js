function changeContent(section) {
  const content = document.getElementById("aboutContent");

  if (section === "skills") {
    content.innerHTML = `
      <h2 class="info-title">Skills</h2> 
      <div class="skills-section">
          <div class="skill-box">Java</div>
          <div class="skill-box">SQL</div>
          <div class="skill-box">C++</div>
          <div class="skill-box">HTML</div>
          <div class="skill-box">CSS</div>
          <div class="skill-box">Python</div>
      </div>
    `;
  } else if (section === "education") {
    content.innerHTML = `
      <!-- Education Section -->
      <div class="education-section">
          <h2 class="info-title">Education</h2>
          <!-- Three Columns -->
          <div class="row">
              <div class="col-md-4 mb-4"> <!-- Added mb-4 for spacing -->
                  <div class="education-item">
                      <img src="images/aes.jpg" alt="Image 1" class="img-fluid">
                      <h4>Primary Education</h4>
                      <p>Aninuan Elementary School</p>
                  </div>
              </div>
              <div class="col-md-4 mb-4"> <!-- Added mb-4 for spacing -->
                  <div class="education-item">
                      <img src="images/pga.jpg" alt="Image 2" class="img-fluid">
                      <h4>Secondary Education</h4>
                      <p>Puerto Galera Academy</p>
                  </div>
              </div>
              <div class="col-md-4 mb-4"> <!-- Added mb-4 for spacing -->
                  <div class="education-item">
                      <img src="images/nulp.jpg" alt="Image 3" class="img-fluid">
                      <h4>Tertiary Education</h4>
                      <p>National University Lipa</p>
                  </div>
              </div>
          </div>
      </div>
    `;
  } else if (section === "hobbies") {
    content.innerHTML = `
      <!-- Hobbies Section -->
      <div class="hobbies-section">
          <h2 class="info-title">Hobbies & Interests</h2>
          <div class="row">
              <div class="col-md-4 mb-4">
                  <div class="hobby-item text-center">
                      <img src="images/mlbb.png" alt="Gaming" class="img-fluid hobby-image">
                      <h4>Gaming</h4>
                  </div>
              </div>
              <div class="col-md-4 mb-4">
                  <div class="hobby-item text-center">
                      <img src="images/ff.jpg" alt="Anime" class="img-fluid hobby-image">
                      <h4>Anime</h4>
                  </div>
              </div>
              <div class="col-md-4 mb-4">
                  <div class="hobby-item text-center">
                      <img src="images/gym.jpg" alt="Studying" class="img-fluid hobby-image">
                      <h4>Gym</h4>
                  </div>
              </div>
          </div>
      </div>
    `;
  }
}

// SweetAlert for Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Show SweetAlert popup
    Swal.fire({
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK"
    });

    // Optionally reset the form after showing the alert
    contactForm.reset();
  });
})