var sourceImage = ["images/image-tanya.jpg", "images/image-john.jpg"];
var citationData =
["\“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. \” "
, "\“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”"];

var nameData = ["Tanya Sinclair ", "John Tarkpor "];
var jobData = ["UX Engineer", "Junior Front-end Developer"];


var imgSlider = document.getElementById("image");
var citation = document.getElementById('citationID');
var nameAuthor = document.getElementById('nameAuthor');



//buttons
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");


var imagePosition = 0;
imgSlider.src = sourceImage[imagePosition];
citation.textContent = citationData[imagePosition];
nameAuthor.textContent = nameData[imagePosition];
nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";

var tailleTab = sourceImage.length;
console.log("Taille du tabeau : " +tailleTab);
var count = 1;



nextBtn.addEventListener("click", () => {

    if (tailleTab <= count) {
        imagePosition = 0;
        imgSlider.src = sourceImage[imagePosition];
        citation.textContent = citationData[imagePosition];
        nameAuthor.textContent = nameData[imagePosition];
        nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
        count = 1;
        console.log("count : "+count);
    } else if (tailleTab > count) {
        imagePosition++
        imgSlider.src = sourceImage[imagePosition];
        citation.textContent = citationData[imagePosition];
        nameAuthor.textContent = nameData[imagePosition];
        nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
        count++;
        console.log("count : "+count);
    }
    console.log("Image actuelle : "+imagePosition);
});

prevBtn.addEventListener("click", () => {
    if (imagePosition > 0) {
        imagePosition --;
        imgSlider.src = sourceImage[imagePosition];
        citation.textContent = citationData[imagePosition];
        nameAuthor.textContent = nameData[imagePosition];
        nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
        count--;
        console.log("count : "+count);
    } else {
    }
});

//gestion des évènements aux claviers (flèches droites et gauches)
document.addEventListener("keydown", (e) => {
    //right arrow
    if (e.keyCode === 39) {
        console.log("ok");
        if (tailleTab <= count) {
            imagePosition = 0;
            imgSlider.src = sourceImage[imagePosition];
            citation.textContent = citationData[imagePosition];
            nameAuthor.textContent = nameData[imagePosition];
            nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
            count = 1;
            console.log("count : "+count);
        } else if (tailleTab > count) {
            imagePosition++
            imgSlider.src = sourceImage[imagePosition];
            citation.textContent = citationData[imagePosition];
            nameAuthor.textContent = nameData[imagePosition];
            nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
            count++;
            console.log("count : "+count);
        }
        //left arrow
    } else if (e.keyCode === 37) {
        if (imagePosition > 0) {
            imagePosition --;
            imgSlider.src = sourceImage[imagePosition];
            citation.textContent = citationData[imagePosition];
            nameAuthor.textContent = nameData[imagePosition];
            nameAuthor.innerHTML += "<span class='job-name'>"+jobData[imagePosition]+"</span>";
            count--;
            console.log("count : "+count);
        } else {
        }
    }
});
