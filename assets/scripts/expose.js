// expose.js

window.addEventListener('DOMContentLoaded', init);
//elements pulled from html file 
const hornSelect = document.getElementById('horn-select');
const image = document.querySelector("img");
const audio = document.querySelector("audio");
const volumeControls = document.getElementById("volume");
const volumePic = document.querySelector("#volume-controls img");
const playSound = document.querySelector('button');
//collection of horn images 
const hornImages ={
  'air-horn': "assets/images/air-horn.svg",
  'car-horn': "assets/images/car-horn.svg",
  'party-horn': "assets/images/party-horn.svg"
};
//collection of horn audio
const hornAudio ={
  'air-horn': "assets/audio/air-horn.mp3",
  'car-horn': "assets/audio/car-horn.mp3",
  'party-horn':"assets/audio/party-horn.mp3"
};

function init() {
  // set the image and audio for the horn 
  hornSelect.addEventListener('change',() => {
    const selectedHorn = hornSelect.value;
    const selectedImage = hornImages[selectedHorn];
    const selectedAudio = hornAudio[selectedHorn];
    image.src = selectedImage;
    audio.src = selectedAudio;
  });
  //changing the volumn icon based on the input
  volumeControls.addEventListener('input',()=>{
    const sound = volumeControls.value;
    if (sound === '0'){
      volumePic.src = 'assets/icons/volume-level-0.svg';
    }
    else if (sound >= 1 && sound < 33){
      volumePic.src = 'assets/icons/volume-level-1.svg';
    }
    else if (sound >= 33 && sound <67){
      volumePic.src = 'assets/icons/volume-level-2.svg';
    }
    else if (sound >= 67){
      volumePic.src = 'assets/icons/volume-level-3.svg';
    }
  });
  //play audio when the button play sound is clicked
  playSound.addEventListener('click',()=>{
    const sound = volumeControls.value;
    if (sound !== '0'){
      audio.play();
    }
    if (hornSelect.value === 'party-horn'){
      const confetti = new JSConfetti({})
      confetti.addConfetti();
    }
  });
}

