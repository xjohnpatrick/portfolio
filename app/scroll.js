export function setupObserver(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);  
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}
