let sections = document.querySelectorAll(".scrolltest"); // All sections
let navLinks = document.querySelectorAll("header nav ul a"); // All nav links
let offsetMargin = window.innerHeight * 0.1; // Offset for 10vh margin

// Scroll Event Listener
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight ;  // Adjusted height
    let id = sec.getAttribute("id");
    
    // Check if section is in view
    if (top > offset - offsetMargin && top <= offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active class from all links
        // Add active class to the link pointing to the current section
        document
          .querySelector("header nav ul a[href='#" + id + "']")
          .classList.add("active");
      });
    }
  });
};

// Click Event Listener for Navigation Links
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor link behavior
    let targetId = this.getAttribute("href").substring(1); // Get section ID
    let targetSection = document.getElementById(targetId);
    let scrollPosition = targetSection.offsetTop - offsetMargin; // Adjust scroll for 10vh margin
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", // Smooth scroll effect
    });
  });
});
