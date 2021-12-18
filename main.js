Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function Take_snapshot(){

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id = "captured_img" src = "'+data_uri+'"/>';
});
}

console.log('ml5 version',ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sa0B1_Tak/model.ml5',modelloaded);


function modelloaded(){
console.log('modelloaded');
}