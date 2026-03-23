const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")
const titles = [
    "Strength Training",
    "Cardio Workout",
    "Body Building",
    "Fitness Routine",
    "Yoga Training",
    "Crossfit",
    "HIIT Training",
    "Personal Coaching"
];
const desc = [
    "Build strength and power with intense training programs designed for all fitness levels.",
    "Boost your stamina and heart health with high-energy cardio workouts and routines.",
    "Sculpt your body and gain muscle with expert-guided bodybuilding techniques.",
    "Stay consistent and achieve your goals with structured daily fitness routines.",
    "Relax your mind and improve flexibility through calming and effective yoga sessions.",
    "Push your limits with high-intensity crossfit training for total body transformation.",
    "Burn fat fast with high-intensity interval training designed for maximum results in less time.",

    "Get personalized workout plans and one-on-one guidance to reach your fitness goals faster."
];
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line")
})


navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-4-line")
})


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".header_socials li", {
    ...scrollRevealOption,
    delay: 2500,
    interval: 500
});




ScrollReveal().reveal(".card-container .card", {
    ...scrollRevealOption,
    delay: 200,
    interval: 500,
});






document.querySelectorAll(".card").forEach((card, i) => {
    card.querySelector("h3").textContent = titles[i];
    card.querySelector("p").textContent = desc[i];
});