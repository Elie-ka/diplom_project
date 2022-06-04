let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let left = document.querySelector(".left_part");

    if (toggleNavStatus === false){
        getSidebar.style.visibility = "visible";
        getSidebar.style.width = "25%";
        left.style.width = "75%";
        left.style

        toggleNavStatus = true;
        wishMe();
        speak(text);
        
    }
    else if (toggleNavStatus === true){
        getSidebar.style.visibility = "hidden";
        getSidebar.style.width = "0";
        left.style.width = "100%";

        toggleNavStatus = false;
    }
}

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang ="en-IN";
    text_speak.volume = 1;
    /*speech.lang = "en-IN"*/

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning ");
    }
    else if (hr > 12 && hr < 18) {
        speak("Good Afternoon ");
    }
    else{
        speak("Good Evening ");
    }
}

/*window.addEventListener('load', ()=>{
    wishMe();
    speak("Activating Intertia");
   
});*/

let text = `
I'm I-N-E-R-T-I-A  your guider  , we thanks you for clicking in our voice assistant of the moscow technical university of communication and informatics.
we are going to guide you for all thing you want to know about our university.

for knowing about the university, his history , say one.
for knowing about the faculties ,says two.
for call out ,say four or end.`;