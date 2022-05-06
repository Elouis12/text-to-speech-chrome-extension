'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")




const synth = window.speechSynthesis; // instance of the SpeechSynthesis
let ourText = 'Hello World';
const utterThis = new SpeechSynthesisUtterance(ourText);


// synth.speak( utterThis );


function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


function speakSelection(){

    const text = getSelectionText();

    if( text ){ // if a text was selected

        if( confirm( "Would you like to read this selection?" ) ){ // ask user if they want it to be read

            synth.speak( new SpeechSynthesisUtterance( text ) );
        }
    }
}

function stopSpeakSelection(){

    synth.cancel();
}
// document.body.setAttribute("onmouseup", speakSelection); // chrome does not like inline scripts
document.body.addEventListener("pointerup", speakSelection );
// document.body.addEventListener("click", stopSpeakSelection );

/*
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
        (activeElTagName == "textarea") || (activeElTagName == "input" &&
        /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
        (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
    document.getElementById("sel").value = getSelectionText();
};*/
