//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

// Create sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

// Stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
