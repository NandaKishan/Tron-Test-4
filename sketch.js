const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

const greetings = [
    "I'm good, what about you",
    "Better than ever",
    "Epic"
]

const weather = [
    "It is really pleasant",
    "Weather is fine",
    "Breezy and humid",
    "Sunny",
    "Windy",
    "Rainy"
]

const games = [
    'https://studio.code.org/projects/gamelab/nf5XGwdsUzP-LZC-neJheNNYmk_xZZu7eWubcfDcKGI',
    'https://studio.code.org/projects/gamelab/Bsm44lzhz4J5au5U8dctC5zY3JpiFAqFT-jGQ2B3dB0',
    'https://studio.code.org/projects/gamelab/nf5XGwdsUzP-LZC-neJheNNYmk_xZZu7eWubcfDcKGI',
    'https://studio.code.org/projects/gamelab/16Xza783-pwSddJ0zUCbCZ-jC7C9P0N8UrDjPfX6OAM',
    'https://studio.code.org/projects/gamelab/msN01WsYbK4dDiRz1-lb0CxHjVnACuLVE60-dBNENMc',
    'https://studio.code.org/projects/gamelab/zq_l9fvFrnLnLzUrEfUVHT-h6YuE95qg0ptepAd9pbE',
    'https://studio.code.org/projects/gamelab/my7NzgJrvxXyR6fVqCog9tgug_cSEX9dfuSi_2rq99U',
    'https://studio.code.org/projects/gamelab/LVSHpiPSdMQC7w1Y8x4bLu0p6e9o17uFhcnN1bBlJNE',
    'https://editor.p5js.org/nandakishankm457/full/_t8LoI_wk',
    'https://nandakishan.github.io/Tower-Siege---3/',
    'https://nandakishan.github.io/Plinko-/',
]



recognition.onstart = function(){
    console.log("You Can Speak To The Microphone Now, Oh Yeah !!");
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//adding the button
btn.addEventListener('click', ()=>{
    recognition.start();
    speech = new SpeechSynthesisUtterance();
    const voice = window.speechSynthesis.getVoices();
    speech.voice = voice[1];
    speech.text = "Welcome Sir";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
});


function readOutLoud(message){
    speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand that but I hope to learn more";

    if(message.includes("how are you")){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
        console.log(Math.floor(Math.random()));
    }

    if(message.includes("weather")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if(message.includes("time")){
        const timeAPI = "It is "+new Date().getHours() + " "+ new Date().getMinutes() + " right now";
        speech.text = timeAPI;
    }

    if(message.includes("YouTube")){
        speech.text = "Opening Youtube....";
        window.open('https://youtube.com');
    }

    if(message.includes("Google")){
        speech.text = "Opening Google....";
        window.open('https://google.com');
    }

    if(message.includes("play new english music")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if(message.includes("open my website")){
        speech.text = "Opening Your Website....";
        window.open('file:///D:/Using%20CSS%20in%20HTML/CSS.html');
    }

    if(message.includes("Tron")){
        speech.text = "Yup That's Me, Happy To Help";
    }

    if(message.includes("set up my to do list")){
        window.open('https://nandakishan.github.io/TODO/');
        speech.text = "Taking you to the to do list app";
    }

    if(message.includes("make new music")){
        window.open('https://nandakishan.github.io/Tap-Music/');
        speech.text = "Taking you to the make music with taps app";
    }

    if(message.includes("I want to play games")){
        window.open(games[Math.floor(Math.random() * games.length)]);
        speech.text = "Taking you to one of NK's games";
    }

    if(message.includes("Corona")){
        window.open('https://studio.code.org/projects/gamelab/tws-Kl8KuNZH3kuu-nblsvjKZ2riyXn7fxM0R27iZ9A');
        speech.text = "Taking you to the presentation";
    }
    if(message.includes("covid")){
        window.open('https://studio.code.org/projects/gamelab/tws-Kl8KuNZH3kuu-nblsvjKZ2riyXn7fxM0R27iZ9A');
        speech.text = "Taking you to the presentation";
    }

    if(message.includes("piano")){
        window.open('https://studio.code.org/projects/gamelab/c-fgw_n2Q7DUCqxNtLxcVYaRr-Arg38YMcJRAJbTNEk');
        speech.text = "Taking you to the piano player";
    }


    if(message.includes("open my website")){
        speech.text = "Opening your website";
        window.open("file:///D:/Using%20CSS%20in%20HTML/CSS.html");
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}