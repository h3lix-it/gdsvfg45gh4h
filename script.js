const gifUrls = [
  'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.tenor.com/eLsrCqaJkt0AAAAj/baldi-dance.gif',
  'https://media.tenor.com/images/3f89ab77d5aff6d02028243c08dbece7/tenor.gif',
  'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmU0bHg2cGpyMDFhaTRzd3JuMXF1MHp3cXpqdGlrZG1lNHBhZWR3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ArAgo5dU2z2xO/giphy.gif',
  'https://i.pinimg.com/736x/37/f8/e9/37f8e97cbacb958a4a6339a07cd32093.jpg'
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createFlyingGif() {
  const img = document.createElement('img');
  img.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];
  img.style.position = 'fixed';
  img.style.left = randomBetween(0, 90) + 'vw';
  img.style.top = randomBetween(0, 90) + 'vh';
  img.style.width = randomBetween(60, 120) + 'px';
  img.style.zIndex = 9999;
  img.style.cursor = 'pointer';
  img.style.transition = 'transform 2s cubic-bezier(0.4,2,0.6,1), left 2s linear, top 2s linear';
  document.body.appendChild(img);

  img.addEventListener('click', () => {
    window.open('https://t.me/MijerW1nter', '_blank');
  });

  function animate() {
    const newLeft = randomBetween(0, 90);
    const newTop = randomBetween(0, 90);
    const newScale = randomBetween(0.5, 3.5);
    img.style.left = newLeft + 'vw';
    img.style.top = newTop + 'vh';
    img.style.transform = `scale(${newScale}) rotate(${randomBetween(-45, 45)}deg)`;
    setTimeout(animate, randomBetween(1500, 2500));
  }

  animate();
}

for (let i = 0; i < 12; i++) {
  setTimeout(createFlyingGif, i * 400);
}
