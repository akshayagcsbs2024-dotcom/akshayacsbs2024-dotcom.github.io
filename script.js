// Back to top
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Skill animation
const bars = document.querySelectorAll(".progress");

bars.forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value;
});
