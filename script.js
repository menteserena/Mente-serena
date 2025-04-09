// Mostrar os cards com efeito de fade-in quando entram na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});