// src/constants/themeScript.ts
export const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;