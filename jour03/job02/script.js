document.addEventListener('DOMContentLoaded', function() {
    const Button = document.getElementById('Button');
    const rainbow = document.getElementById('rainbow');
  
    Button.addEventListener('click', function() {
      sRainbow();
    });
  
    function sRainbow() {
      for (let i = rainbow.children.length; i >= 0; i--) {
        rainbow.appendChild(rainbow.children[Math.random() * i | 0]);
      }
    }
  });
  