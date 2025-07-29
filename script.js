const modeToggle = document.getElementById('modeToggle');
const langToggle = document.getElementById('langToggle');
const mainText = document.getElementById('mainText');
const subText = document.getElementById('subText');

let isJapanese = true;
let isLight = false;

const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
 stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5" />
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
           M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
</svg>
`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
 stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 100 18 9 9 0 008.79-8.21z" />
</svg>
`;

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  isLight = !isLight;
  modeToggle.innerHTML = isLight ? sunIcon : moonIcon;
});

langToggle.addEventListener('click', () => {
  isJapanese = !isJapanese;
  if (isJapanese) {
    mainText.textContent = '近日公開';
    subText.textContent = 'このサイトは間もなく公開されます。';
  } else {
    mainText.textContent = 'Coming Soon';
    subText.textContent = 'This site will be live shortly.';
  }
});
