// Simple interactivity: highlight tags when clicked
document.querySelectorAll('.tags span').forEach(tag => {
  tag.addEventListener('click', () => {
    alert(`You clicked on tag: ${tag.textContent}`);
  });
});
