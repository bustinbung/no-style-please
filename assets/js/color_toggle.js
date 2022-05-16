const toggleButton = document.querySelector(".toggle");
const documentBody = document.querySelector("body");
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);

    if (storedTheme == "dark") {
        toggleButton.classList.add("invert");
    }
} else {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkQuery.matches == true) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else if (darkQuery.matches == false) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

function toggleColor() {
    const currentTheme = document.documentElement.dataset.theme 

    if (currentTheme == "light") {
        toggleButton.classList.toggle("invert");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else if (currentTheme == "dark") {
        toggleButton.classList.toggle("invert");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}