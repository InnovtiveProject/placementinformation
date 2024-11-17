// Smooth Scroll Reveal
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
  
    const revealSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealSection);
    revealSection();
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check if dark mode is enabled in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }
  
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled'); // Save preference
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled'); // Save preference
    }
  });


  function filterJobs() {
    const searchInput = document.getElementById("jobSearchInput").value.toLowerCase();
    const jobCards = document.querySelectorAll(".company-card1");
  
    jobCards.forEach(card => {
      // Retrieve searchable text from the card
      const companyName = card.querySelector("h3").textContent.toLowerCase();
      const jobTitle = card.querySelector("p:nth-child(2)").textContent.toLowerCase();
      const role = card.getAttribute("data-role").toLowerCase();
  
      // Check if the search input matches any of the searchable text
      if (
        companyName.includes(searchInput) ||
        jobTitle.includes(searchInput) ||
        role.includes(searchInput)
      ) {
        card.style.display = "block"; // Show matching cards
      } else {
        card.style.display = "none"; // Hide non-matching cards
      }
    });
  
    // Show a message if no results are found
    const visibleCards = document.querySelectorAll(".company-card1[style='display: block;']");
    const noResultsMessage = document.getElementById("noResultsMessage");
    
    if (visibleCards.length === 0) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
    }
  }
  
//cv 
  document.getElementById("cvUploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById("student-name").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const fileInput = document.getElementById("cv-file");
  
    // Validate inputs
    if (!name || !email || !fileInput.files.length) {
      alert("Please fill in all fields and upload your CV.");
      return;
    }
  
    const file = fileInput.files[0];
    if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      alert("Invalid file type. Please upload a PDF or Word document.");
      return;
    }
  
    // Simulate file upload
    setTimeout(() => {
      document.getElementById("upload-status").style.display = "block";
      document.getElementById("cvUploadForm").reset();
    }, 1000); // Simulate a delay for uploading
  });
  

  

