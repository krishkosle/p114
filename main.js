function preload() {}

function setup() {
    canvs = createCanvas(300, 300);
    canvs.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');

}

function draw() {

    image(video, 0, 0, 300, 300);

}

function take_snapshot() {
    save('myFilterImage.png');

}

function gotPoses(results)

{

    if (results.length > 0)

    {

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);

        console.log("nose y = " + results[0].pose.nose.y);

    }
}
