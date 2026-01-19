const btn = document.getElementById('welcomeBtn');

btn.addEventListener('click', () => {
  console.log('[DEBUG] #welcomeBtn clicked', btn);
  const img = document.getElementById('welcomeImg');
  const audio = document.getElementById('welcomeAudio');

  img.style.display = 'block';
  console.log('[DEBUG] #welcomeImg style.display set to \'block\'');
  audio.play();
  console.log('[DEBUG] #welcomeAudio played');
}); 
