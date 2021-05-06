Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);


function take_snapshot() {
    Webcam.snap(function(data_uri) {

        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https: //teachablemachine.withgoogle.com/models/nwMqF8R0n/', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}
prediction_1 = "";

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speach(utterthis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
if (error) {
    console.log(error);
} else {
    console.log(result);
    document.getElementById("result_hand_gesture").innerHTML = results[0].label;
    prediction_1 = results[0].label;
    speak();