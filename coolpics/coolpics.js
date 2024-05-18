const menu_button = document.querySelector("#menu");
const menu = document.querySelector("nav");

function toggleMenu() {
    menu.classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

function viewerTemplate(pic, alt) {
    return `<div id="modal">
    <button id="close">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    document.querySelector('#modal').remove();
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const image = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const src = image.src.split('-');
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const full_image = src[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.querySelector('body').insertAdjacentHTML("afterbegin", viewerTemplate(full_image, "big image"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('#close').addEventListener("click", closeViewer);
}


document.querySelector('.gallery').addEventListener("click", viewHandler)
menu_button.addEventListener("click", toggleMenu);

handleResize();
window.addEventListener("resize", handleResize);