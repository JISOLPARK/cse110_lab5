// explore.js

window.addEventListener('DOMContentLoaded', init);
const voiceSelect = document.getElementById('voice-select');
let voices = [];
const speech = window.speechSynthesis;
const talkButton = document.querySelector('button');

function init() {
    // loading the voices so that user can choose which voice they want to select
  speech.onvoiceschanged = () => {
    voices = speech.getVoices();
    voices.forEach((voice) => {
      const voiceOption = document.createElement('option');
      voiceOption.textContent = `${voice.name} (${voice.lang})`;
      voiceOption.setAttribute('value', voice.name);
      voiceSelect.appendChild(voiceOption);
    });
  };
    //when the Press to Talk buttom is clicked, the voice speaks
    talkButton.addEventListener('click', () => {
    const textToSpeak = document.getElementById('text-to-speak').value;
    const selectedVoice = voiceSelect.value;
    //does not talk it a voice is not selected
    if (selectedVoice !== "select"){
        // if the voice is selected, 
        const talking = new SpeechSynthesisUtterance(textToSpeak);
        const currVoice = voices.find(voice => voice.name === selectedVoice);
        talking.voice = currVoice;
        speech.speak(talking);

        const smilingImg = document.querySelector('img');
        smilingImg.setAttribute('src','assets/images/smiling-open.png');
        const check = setInterval(function(){
            if(speech.speaking == false){
            smilingImg.setAttribute('src', 'assets/images/smiling.png');
            clearInterval(check);
            }
        }, 100);
    }
  });
}