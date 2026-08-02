// Get Elements
const cover = document.getElementById("cover");
const loading = document.getElementById("loading");
const passwordPage = document.getElementById("passwordPage");

const beginBtn = document.getElementById("begin");
const unlockBtn = document.getElementById("unlock");

const password = document.getElementById("password");
const error = document.getElementById("error");

// Tap To Begin
beginBtn.addEventListener("click", () => {

    cover.classList.add("hide");
    loading.classList.remove("hide");

    setTimeout(() => {

        loading.classList.add("hide");
        passwordPage.classList.remove("hide");

    }, 3000);

});

// Unlock Button
unlockBtn.addEventListener("click", checkPassword);

// Enter Key Support
password.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        checkPassword();
    }

});

function checkPassword(){

    if(password.value.trim() === "03082005"){

    error.style.color = "#34c759";
    error.innerHTML = "✨ Unlocking your surprise...";

    setTimeout(()=>{

        passwordPage.classList.add("hide");
        envelopeScreen.classList.remove("hide");

    },1200);

}

    else{

        error.style.color = "#ff4d94";
        error.innerHTML = "❌ Wrong Password";

        password.animate([
            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(0)"}
        ],{
            duration:400
        });

    }

}
// =========================
// MODULE 2
// Envelope + Letter
// =========================

const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");
const continueBtn = document.getElementById("continueBtn");

const message = `Hey Harshu ❤️

Today isn't just another day...

Today is the birthday
of someone truly special.

Happy Birthday!

I made something beautiful
just for you.

I hope it makes you smile. 🌸`;

if(envelope){

    envelope.addEventListener("click",()=>{

        envelopeScreen.classList.add("hide");
        letterScreen.classList.remove("hide");

        typeMessage();

    });

}

function typeMessage(){

    typing.innerHTML="";

    continueBtn.style.display="none";

    let i=0;

    const timer=setInterval(()=>{

        typing.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

            continueBtn.style.display="inline-block";

        }

    },40);

}
// =========================
// MODULE 3
// Hero Section
// =========================

const heroSection = document.getElementById("heroSection");

continueBtn.addEventListener("click", () => {

    letterScreen.classList.add("hide");

    heroSection.classList.remove("hide");

});


// =========================
// MODULE 4
// Gallery
// =========================

// Hero → Gallery

const gallerySection = document.getElementById("gallerySection");

const scrollText = document.querySelector(".scroll-text");

if (scrollText) {

    scrollText.addEventListener("click", () => {

        heroSection.classList.add("hide");
        gallerySection.classList.remove("hide");

    });

}

// =========================
// Photo Popup
// =========================

const photos = document.querySelectorAll(".polaroid img");

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        modal.classList.remove("hide");
        modalImage.src = photo.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.add("hide");

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.add("hide");

    }

});
// =========================
// MODULE 5
// Secret Letter
// =========================

const openLetterBtn = document.getElementById("openLetterBtn");
const secretSection = document.getElementById("secretSection");
const secretTyping = document.getElementById("secretTyping");
const nextCake = document.getElementById("nextCake");

const secretMessage = `Dear Harshu ❤️

Thank you for being such a wonderful person.

Your smile can brighten someone's day.

Never stop dreaming,
never stop smiling,
and always stay the amazing person you are.

Happy Birthday once again!

With lots of love,

Siri 💜`;

if(openLetterBtn){

    openLetterBtn.addEventListener("click",()=>{

        gallerySection.classList.add("hide");
        secretSection.classList.remove("hide");

        secretTyping.innerHTML="";
        nextCake.style.display="none";

        let i=0;

        const timer=setInterval(()=>{

            secretTyping.innerHTML+=secretMessage.charAt(i);

            i++;

            if(i>=secretMessage.length){

                clearInterval(timer);

                nextCake.style.display="inline-block";

            }

        },35);

    });

}
// =========================
// MODULE 6
// Birthday Cake
// =========================

const blowCandles = document.getElementById("blowCandles");

nextCake.addEventListener("click",()=>{

    secretSection.classList.add("hide");

    cakeSection.classList.remove("hide");

});

const cakeSection = document.getElementById("cakeSection");

if(blowCandles){

    blowCandles.addEventListener("click",()=>{

        document.querySelectorAll(".flame").forEach(flame=>{

            flame.style.opacity="0";

        });

        blowCandles.innerHTML="🎉 Happy Birthday ❤️";

        // Fireworks module will be connected next.

    });

}
// =========================
// MODULE 7
// Fireworks
// =========================

const fireworksSection = document.getElementById("fireworksSection");

function launchFireworks(){

    const duration = 7000;

    const end = Date.now() + duration;

    const interval = setInterval(()=>{

        if(Date.now() > end){

            clearInterval(interval);

            cakeSection.classList.add("hide");
            fireworksSection.classList.remove("hide");

            return;

        }

        confetti({

            particleCount:120,
            spread:160,
            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }

        });

    },300);

}

blowCandles.addEventListener("click",()=>{

    setTimeout(()=>{

        launchFireworks();

    },1500);

});
// =========================
// MODULE 8
// Final Gift
// =========================

const giftBtn = document.getElementById("giftBtn");
const giftPopup = document.getElementById("giftPopup");
const giftTyping = document.getElementById("giftTyping");
const closeGift = document.getElementById("closeGift");

const finalLetter = `Dear Harshu ❤️

Thank you for taking this little journey.

I made this website with lots of love,
care and happiness.

I hope today becomes one of your
most beautiful birthdays.

Keep smiling.
Keep shining.

Happy Birthday ❤️

Forever cheering for you,

Siri 💜`;

if(giftBtn){

    giftBtn.addEventListener("click",()=>{

        giftPopup.classList.remove("hide");

        giftTyping.innerHTML="";

        let i=0;

        const timer=setInterval(()=>{

            giftTyping.innerHTML+=finalLetter.charAt(i);

            i++;

            if(i>=finalLetter.length){

                clearInterval(timer);

            }

        },35);

    });

}

if(closeGift){

    closeGift.addEventListener("click",()=>{

        giftPopup.classList.add("hide");

    });

}
// =========================
// Memory Photo Popup
// =========================

const memoryPhotos = document.querySelectorAll(".mini-polaroid img");

memoryPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

        modal.classList.remove("hide");
        modalImage.src = photo.src;

    });

});
document.getElementById("openLetterBtn").onclick = function(){

    document.getElementById("giftBtn").click();

};
// Hero Music Button

const musicButton = document.querySelector(".music-btn");
const bgMusic = document.getElementById("bgMusic");

musicButton.addEventListener("click", () => {

    bgMusic.play();

    musicButton.innerHTML = "🎵 Music Playing";

});
// Cursor Sparkles

document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = "15px";

    document.body.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    },800);

});