function expandAllCV() {
  document.querySelectorAll('.cv-card').forEach(card => {
    card.open = true;
  });
}

function collapseAllCV() {
  document.querySelectorAll('.cv-card').forEach(card => {
    card.open = false;
  });
}
