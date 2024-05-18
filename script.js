function toggleNavbar() {
    var navbarCollapse = document.getElementById("navbar-collapse");
    navbarCollapse.classList.toggle("active");
  
    // Add the following lines
    var body = document.body;
    body.style.overflow = navbarCollapse.classList.contains("active") ? "hidden" : "auto";
  }