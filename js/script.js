// ===== Image Slider =====
let current = 0;
const slides = document.querySelectorAll('.slides img');
const total = slides.length;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(idx) {
  current = (idx + total) % total;
  const offset = -current * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
nextBtn.onclick = () => showSlide(current + 1);
prevBtn.onclick = () => showSlide(current - 1);
showSlide(0);

// ===== Contact Form Validation =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  if (!form.checkValidity()) {
    e.preventDefault();
    // browser will show native errors + our small.error messages
  } else {
    alert('Message sent!');
    form.reset();
  }
});
