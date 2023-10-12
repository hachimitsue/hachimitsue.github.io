document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn[data-filter]");
  const projectItems = document.querySelectorAll(".col-lg-5[data-filter]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");

      // Remove "active-projects" class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active-projects");
      });

      // Add "active-projects" class to the clicked button
      button.classList.add("active-projects");

      // Add a CSS class to initiate the transition
      document.body.classList.add("filtering");

      // Show or hide projects based on the category after a short delay
      setTimeout(() => {
        projectItems.forEach((item) => {
          const projectCategory = item.getAttribute("data-filter");

          if (filterValue === "all" || projectCategory === filterValue) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });

        // Remove the transition class when the transition is complete
        setTimeout(() => {
          document.body.classList.remove("filtering");
        }, 500); // You can adjust the timing to match your transition duration
      }, 100); // You can adjust the delay timing
    });
  });
});