const themeSelector = document.querySelector("select");  // select dropdown element out of the HTML
function changeTheme() {
    // check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const theme = themeSelector.value;
    let logo = document.querySelector("img");
    // if the value is dark then:
    if (theme == 'dark') {
        document.body.classList.add("dark");  // add the dark class to the body
        logo.setAttribute("src", "byui-logo_white.png");  // change the source of the logo to point to the white logo.
    }

    else {
        document.body.classList.remove("dark");  // remove the dark class
        logo.setAttribute("src", "byui-logo_blue.webp");  // make sure the logo src is the blue logo.
    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);