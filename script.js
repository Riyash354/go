document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
  
    // Toggle expand on click
    sidebar.addEventListener("click", () => {
      sidebar.classList.toggle("expanded");
    });
  });
  