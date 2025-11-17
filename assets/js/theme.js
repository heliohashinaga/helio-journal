// Alter theme
function toggleTheme() {
    const root = document.documentElement;

    const isDark = root.classList.contains("theme-dark");
    const next = isDark ? "theme-light" : "theme-dark";

    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(next);
    localStorage.setItem("theme", next);
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
});