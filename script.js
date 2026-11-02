// GET ALL SCREENS

const welcome = document.getElementById("welcome");
const birthday = document.getElementById("birthday");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const secret = document.getElementById("secret");


// SCREEN TRANSITION FUNCTION

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach((element) => {
        element.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// OPENING SCREEN -> BIRTHDAY SCREEN

document.getElementById("openButton").addEventListener("click", () => {

    showScreen(birthday);

});


// BIRTHDAY SCREEN -> GALLERY

document.getElementById("nextButton").addEventListener("click", () => {

    showScreen(gallery);

});


// GALLERY -> BIRTHDAY SCREEN

document.getElementById("backButton").addEventListener("click", () => {

    showScreen(birthday);

});


// GALLERY -> LETTER

document.getElementById("letterButton").addEventListener("click", () => {

    showScreen(letter);

});


// LETTER -> GALLERY

document.getElementById("letterBack").addEventListener("click", () => {

    showScreen(gallery);

});


// LETTER -> SECRET STAR SURPRISE

document.getElementById("secretButton").addEventListener("click", () => {

    showScreen(secret);

});


// PHOTO POPUP ELEMENTS

const photoPopup = document.getElementById("photoPopup");
const popupImage = document.getElementById("popupImage");
const popupCaption = document.getElementById("popupCaption");


// OPEN PHOTOGRAPHS

document.querySelectorAll(".polaroid").forEach((photo) => {

    photo.addEventListener("click", () => {

        const filename = photo.dataset.photo;
        const caption = photo.dataset.caption;

        popupImage.src = "assets/photos/" + filename;

        popupCaption.textContent = caption;

        photoPopup.classList.add("open");

    });

});


// CLOSE PHOTOGRAPH

function closePhoto() {

    photoPopup.classList.remove("open");

    popupImage.src = "";

}

document.getElementById("closePhoto").addEventListener("click", closePhoto);


// CLOSE BY CLICKING OUTSIDE THE PHOTO

photoPopup.addEventListener("click", (event) => {

    if (event.target === photoPopup) {
        closePhoto();
    }

});


// CLOSE USING ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closePhoto();
    }

});


// SECRET STAR SURPRISE

const revealStar = document.getElementById("revealStar");
const secretMessage = document.getElementById("secretMessage");
const starHint = document.querySelector(".star-hint");

revealStar.addEventListener("click", () => {

    secretMessage.classList.add("show");

    revealStar.style.display = "none";

    starHint.style.display = "none";

});




const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Start at a comfortable volume
backgroundMusic.volume = 0.4;

// Try autoplay when the website loads
window.addEventListener("load", () => {
    backgroundMusic.play()
        .then(() => {
            musicButton.textContent = "♫ Pause Music";
        })
        .catch(() => {
            musicButton.textContent = "♫ Play Music";
        });
});

// Pause and resume button
musicButton.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
        try {
            await backgroundMusic.play();
            musicButton.textContent = "♫ Pause Music";
        } catch (error) {
            console.error("Music playback failed:", error);
        }
    } else {
        backgroundMusic.pause();
        musicButton.textContent = "♫ Play Music";
    }
});