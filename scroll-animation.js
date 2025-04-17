document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        //   observer.unobserve(entry.target); // Optionnel : ne l'anime qu'une fois
        } else {
            entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.001
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});
  