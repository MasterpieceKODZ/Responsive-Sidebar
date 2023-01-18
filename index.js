const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".toggle-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

// show navbar and rotate toggle button when toggle button is clicked
sidebarToggleBtn.addEventListener("click", (e) => {
	e.currentTarget.classList.toggle("tb-open");

	sidebar.classList.toggle("open");
});

// dismiss navbar and rotate toggle button when close button is clicked
sidebarCloseBtn.addEventListener("click", (e) => {
	sidebar.classList.remove("open");
	sidebarToggleBtn.classList.remove("tb-open");
});
