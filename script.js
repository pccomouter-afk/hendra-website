// Smooth scroll functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.remove("active")
  }
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 10) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile menu toggle
document.getElementById("mobileToggle").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileToggle = document.getElementById("mobileToggle")

  if (!mobileMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
    mobileMenu.classList.remove("active")
  }
})
