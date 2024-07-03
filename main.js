function openNav() {
  document.getElementById("myNav").style.opacity = "1";
  document.getElementById("myNav").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
}
function closeNav() {
  document.getElementById("myNav").style.opacity = "0";
  document.getElementById("myNav").style.visibility = "hidden";
  document.querySelector("body").style.overflow = "visible";
}
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navLink");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      sessionStorage.setItem("scrollToSection", targetId);
      setTimeout(function () {
        window.location.href = window.location.href.split("#")[0]; 
      }, 1000);
    });
  });
  const scrollToSection = sessionStorage.getItem("scrollToSection");
  if (scrollToSection) {
    sessionStorage.removeItem("scrollToSection");
    const section = document.getElementById(scrollToSection);
    if (section) {
      setTimeout(function () {
        gsap.to(window, {
          duration: 2,
          scrollTo: { y: section, offsetY: 20 },
          ease: "power1.inOut",
        });
      }, 0);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 5000) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: { y: 0 } });
  });
});
