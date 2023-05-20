function start() {
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/etp0Gy53y/model.json', modelready);
}

function modelready() {
    classifier.classify(gotresults);
}

cat = 0;
cow = 0;
dog = 0;
lion = 0;

function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("count_h4").style.color = "rgb('+random_r+' , '+random_g+' , '+random_b+' )";
        document.getElementById("audio_h3").style.color = "rgb('+random_r+' , '+random_g+' , '+random_b+' )";
        document.getElementById("audio_h3").innerHTML = "detected voice is of - " + results[0].label;
        document.getElementById("count_h4").innerHTML = "detected dog - " + dog + 'detected cat - '  + cat + 'detected cow - ' + cow + 'detected lion - ' + lion;

        img = document.getElementById("img");
        if (results[0].label == "Barking") {
            img.src = "dog.gif";
            dog = dog+1;
        }
        else if (results[0].label == "Meowing") {
            img.src = "cat.gif";
            cat = cat + 1;
        }
        else if (results[0].label == "Mooing") {
            img.src = "cow.gif";
            cow = cow + 1;
        }
        else if (results[0].label == "Rooring") {
            img.src = "lion.gif";
            lion = lion + 1;
        }
        else {
            img.src = "audio.png";
        }

    }


}