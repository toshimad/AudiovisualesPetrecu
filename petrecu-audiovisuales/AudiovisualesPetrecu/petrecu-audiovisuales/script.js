document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".anim-item");
    const finalText = document.getElementById("final-text");

    gsap.timeline({ delay: 1 })
        .staggerFrom(items, 1, { opacity: 0, scale: 0, ease: "elastic.out(1, 0.3)" }, 0.2)
        .to(items, { duration: 0.5, opacity: 0 }, "+=1")
        .call(() => {
            items.forEach((item) => item.style.display = "none");
            finalText.style.display = "block";
        });
});