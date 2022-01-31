var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start()
{
    recognition.start();
    document.getElementById("textbox").innerHTML="";   
}

recognition.onresult=function(event)
{
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="take my selfie")
    {
        speak();
    }
    
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    start();
    save();
},5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',jpeg_quality:90
});

camera=document.getElementById("camera");

function start()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie">';
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
link.href=image;
link.click();
}