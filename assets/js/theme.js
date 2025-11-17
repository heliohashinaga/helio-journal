 
  // Alter theme
  function toggleTheme() {
    const isDark = document.body.classList.contains("theme-dark");
    const next = isDark ? "theme-light" : "theme-dark";
  
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(next);
    localStorage.setItem("theme", next);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });