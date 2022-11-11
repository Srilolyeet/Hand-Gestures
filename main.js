Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach ('#camera');

function take_snapshot(){
    webcam.snap(function(data_uri));{
        document.getElementById("result").innerHTML='<img id="captured_image" src'"+data_uri+"'/>';
        
    }
}
console.log('ml5.version:',ml5.version);
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ssyx0Eb_R/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth=window.speechSynthesis:
    speak_data 1="The 1st predicton is",prediction_1;
    speak_data 2 "The 2nd prediction is",prediction_2;

    var utterThis= new SpeechSynthesisUtterance(speak_data 1 + speak_data 2);
    synth.speak=(utterThis);