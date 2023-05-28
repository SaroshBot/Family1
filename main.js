//https://teachablemachine.withgoogle.com/models/117X5u5ro/
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
})
camera = document.getElementById('camera');

Webcam.attach('camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img src="'+data_uri+'" id="capture_image"> '
    })
}

console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/117X5u5ro/models/Vj5W-SPbG/model.json', modelLoaded)

function modelLoaded()
{
    console.log("Model is Loaded!")
}