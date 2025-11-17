// Aplica o tema salvo imediatamente
(function () {
    const saved = localStorage.getItem("theme");
    const theme = saved ? saved : "theme-light";
  
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(theme);
  })();
  
  // Função para alternar tema
  function toggleTheme() {
    const isDark = document.body.classList.contains("theme-dark");
    const next = isDark ? "theme-light" : "theme-dark";
  
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(next);
    localStorage.setItem("theme", next);
  }
  
  // Só roda quando DOM estiver pronto
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });