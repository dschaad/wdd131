// register.js
import { participantTemplate, successTemplate } from "./Templates.js";

let participants = 1;

function addParticipant() {
    participants++;
    const html = participantTemplate(participants);
    document.querySelector('#add').insertAdjacentHTML("beforebegin", html);
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);

    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];

    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    const total = feeElements.reduce((acc, item) => {
        // convert item.value to an integer; default to 0 if the conversion fails
        const fee = parseInt(item.value) || 0;
        return acc + fee;
    }, 0);

    // Remember that the text that was entered into the input element will be found in the .value of the element.
    // once you have your total make sure to return it!
    return total;
}

function submitForm(event) {
    // prevent the form from reloading the page
    event.preventDefault();

    // hide the form element
    document.querySelector('form').style.display = "none";

    const submission = {
        adultName: document.querySelector('#adult_name').value,
        totalParticipants: participants,
        totalFee: totalFees(),
    };

    console.log(submission);

    document.querySelector('#summary').innerHTML = successTemplate(submission);
}

document.querySelector('#add').addEventListener("click", addParticipant);
document.querySelector('form').addEventListener("submit", submitForm);