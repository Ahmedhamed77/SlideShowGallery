let intervalId;
let newPic;
let currentPic;
const images = [
    "images/cats/cat1.jpg",
    "images/cats/cat2.jpg",
    "images/cats/cat3.jpg",
    "images/cats/cat4.jpg",
    "images/cats/cat5.jpg"
];


function change() {
    for (let i in images) {
        let pic = new Image();
        pic.src = images[i];
        console.log(pic);
        document.getElementById('pic').setAttribute('src', images[i]);
    }
}


let index = 0;
document.getElementById('next').addEventListener('click', function () {
    clearInterval(intervalId);

    if (index + 1 === images.length) return;
    else {
        index++;
        console.log(images.length)
        let nextPic = images[index];
        document.getElementById('pic').setAttribute('src', nextPic);
        console.log("here next");
        console.log("index" + index)
    }
});


document.getElementById('previous').addEventListener('click', function () {

    clearInterval(intervalId);

    if (index <= 0) return;
    else {
        index--;
        let nextPic = images[index];
        document.getElementById('pic').setAttribute('src', nextPic);
        console.log(nextPic)
        console.log(index);
    }

})


let clicked = true;
document.getElementById('start').addEventListener('click', function () {
    if (clicked) {
        intervalId = setInterval(changePic, 1000);
        console.log("here");
        clicked = false;
    }


})

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(intervalId);
    console.log("here");
    clicked = true;

})



function changePic() {

    if (index < images.length){
        document.getElementById('pic').setAttribute('src', images[index]);
        index++;
    }

}
