var SpeechRecognition = window.webkitSpeechRecognition;
var content = "";
var recognition = new SpeechRecognition() ;

function start(){
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event) ;
    content = event.results [0][0].transcript.toLowerCase() ;
    if (content == "selfie") {
        speak();
    } 
}

function speak(){
    synth = window.speechSynthesis;
    Webcam.attach (camera);
    var speech_data = "Tomando tu selfie en 5 segundos" ;
    utterThis = new SpeechSynthesisUtterance (speech_data) ;
    synth.speak (utterThis) ;
    setTimeout(function(){
        var img_id = "selfie 1" ;
        take_snapshot () ;
        speech_data = "Tomando tu selfie en 10 segundos" ;
        var utterThis = new SpeechSynthesisUtterance (speech_data) ;
        synth.speak (utterThis) ;       
    },5000) ;
    
    setTimeout(function(){
        img_id = "selfie 2" ;
        take_snapshot () ;
        speech_data = "Tomando tu selfie en 15 segundos" ;
        utterThis = new SpeechSynthesisUtterance (speech_data) ;
        synth.speak (utterThis) ;
    },10000) ;
    setTimeout(function(){
        img_id = "selfie 3" ;
        take_snapshot () ;
    },15000);   
}

camera = document.getElementById ("camera");
Webcam.set({
    width:500,
    height:400,
    image_format:"jpeg",
    jpeg_quality:100
});

function take_snapshot(){
    Webcam.snap (function(data_uri){
        if (img_id == "selfie 1"){
            document.getElementById ("result1").innerHTML = '<img id= "selfie 1" src="' + data_uri + '"/>' ;
        } 
        if (img_id == "selfie 2"){
            document.getElementById ("result2").innerHTML = '<img id= "selfie 2" src="' + data_uri + '"/>' ;
        }
        if (img_id == "selfie 3"){
            document.getElementById ("result3").innerHTML = '<img id= "selfie 3" src="' + data_uri + '"/>' ;
        }
    });
}