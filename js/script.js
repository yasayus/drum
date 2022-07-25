// function playSound(e){
//   const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = this.document.querySelector(`key[data-key="${e.keyCode}"]`);
// if (!audio) return;
// audio.currentTime =0;
// audio.play();
// key.classList.add("playing");
// }
// window.addEventListener("keydown",playSound);*/

//  window.addEventListener('keydown', (e) => {
//     let myDiv = document.querySelector(`div[data-char="${e.code}"]`);
//     let audioFile = document.querySelector(`audio[char="${e.code}"]`);

//    if (audioFile !== null) {
//        audioFile.currentTime = 0;
//        audioFile.play();
//        myDiv.classList.add('myEffect');
//       setTimeout(() => {
//           myDiv.classList.remove('myEffect');
//       }, 500);
//    }

//  });

function removeTransition(e) {
  if (e.propertyName !== 'transform'){
  e.target.classList.remove('playing');
  return;
  }
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const keySelect = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) return;

  keySelect.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);