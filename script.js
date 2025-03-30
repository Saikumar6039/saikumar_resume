document.querySelectorAll('.profile-section').forEach((section) => {
  section.style.transition = 'transform 0.3s ease';
  section.addEventListener('mouseover', () => {
    section.style.transform = 'translateY(-10px)';
  });
  section.addEventListener('mouseout', () => {
    section.style.transform = 'translateY(0)';
  });
});

