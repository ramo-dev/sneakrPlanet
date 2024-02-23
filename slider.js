const left = document.querySelector('.left');
const right = document.querySelector('.right');
const scrollport = document.querySelector('.scrollport');

right.addEventListener('click', () => {
  scrollport.scrollBy({
    left: 350, // Adjust the value as needed to scroll more or less
    behavior: 'smooth' // Add smooth scrolling effect
  });
});

left.addEventListener('click', () => {
  scrollport.scrollBy({
    left: -350, // Adjust the value as needed to scroll more or less
    behavior: 'smooth' // Add smooth scrolling effect
  });
});
