// Load theme
function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    const theme = saved ? saved : "theme-light";
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(theme);
  }
  
  // Apply immediately
  applySavedTheme();
  
  // Toggle button
  function toggleTheme() {
    const current = document.body.classList.contains("theme-dark")
      ? "theme-dark"
      : "theme-light";
  
    const next = current === "theme-dark" ? "theme-light" : "theme-dark";
  
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(next);// Load theme as early as possible
    function applySavedTheme() {
      const saved = localStorage.getItem("theme");
      const theme = saved ? saved : "theme-light";
      document.body.classList.remove("theme-light", "theme-dark");
      document.body.classList.add(theme);
    }
    
    // Apply immediately
    applySavedTheme();
    
    // Toggle button
    function toggleTheme() {
      const current = document.body.classList.contains("theme-dark")
        ? "theme-dark"
        : "theme-light";
    
      const next = current === "theme-dark" ? "theme-light" : "theme-dark";
    
      document.body.classList.remove("theme-light", "theme-dark");
      document.body.classList.add(next);
      localStorage.setItem("theme", next);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("theme-toggle");
      if (btn) btn.addEventListener("click", toggleTheme);
    });
    localStorage.setItem("theme", next);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });