// script.js

document.addEventListener("DOMContentLoaded", function () {
   // Get the current time and date
  function getCurrentTimeDate() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString();
    document.getElementById("current-time").innerText = currentTime;
    document.getElementById("current-date").innerText = currentDate;
    }
    
    // Update the time and date every second
    setInterval(getCurrentTimeDate, 1000);
    
    // Add animation effects on hover
    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("mouseover", () => {
    menuBar.classList.add("animate");
    });
    
    menuBar.addEventListener("mouseout", () => {
    menuBar.classList.remove("animate");
    });
    }

    // Initial call to display the time and date immediately
    updateTime();

    // Update time every minute
    setInterval(updateTime, 60000);

    // Scroll animation
    const sections = document.querySelectorAll('.content-section');
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.transform = 'translateY(0)';
                section.style.opacity = '
