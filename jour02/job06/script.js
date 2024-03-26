
function konamiCode(callback) {
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let current = 0;

  function keyHandler(event) {
      if (event.key === sequence[current]) {
          current++;
          if (current === sequence.length) {
              callback();
              current = 0;
          }
      } else {
          current = 0;
      }
  }

  document.addEventListener('keydown', keyHandler);
}

function applyKonamiStyles() {
  document.body.classList.add('konami');
}

konamiCode(applyKonamiStyles);
