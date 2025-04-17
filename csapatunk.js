document.addEventListener('DOMContentLoaded', function () {
  const toggleDetailsButtons = document.querySelectorAll('.toggle-details');
  const cardContainers = document.querySelectorAll('.card-container');
  const cards = document.querySelectorAll('.stab-card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});
  toggleDetailsButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.dataset.target;
      const targetDetailsCard = document.querySelector(targetId);
      const parentCard = this.closest('.card-container');

      // Bezárás, ha már nyitva van
      if (targetDetailsCard.classList.contains('show')) {
        targetDetailsCard.classList.remove('show');
        return;
      }

      // Minden details-card bezárása
      document.querySelectorAll('.details-card').forEach(card => card.classList.remove('show'));

      // Megnyitás
      targetDetailsCard.classList.add('show');
    });
  });

  // Nyilak működése
  const prevButtons = document.querySelectorAll('.prev-image');
  const nextButtons = document.querySelectorAll('.next-image');

  prevButtons.forEach(button => {
    button.addEventListener('click', function () {
      const images = this.closest('.image-container').querySelectorAll('.gallery-image');
      const activeImage = this.closest('.image-container').querySelector('.gallery-image.active');
      let currentIndex = Array.from(images).indexOf(activeImage);

      // Előző kép
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].classList.add('active');
    });
  });

  nextButtons.forEach(button => {
    button.addEventListener('click', function () {
      const images = this.closest('.image-container').querySelectorAll('.gallery-image');
      const activeImage = this.closest('.image-container').querySelector('.gallery-image.active');
      let currentIndex = Array.from(images).indexOf(activeImage);

      // Következő kép
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    });
  });
});


