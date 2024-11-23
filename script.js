// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
function applyPreferences() { // Function command that retrieves and applies user preferences over from local storage
    const name = localStorage.getItem('name'); // Retrieves the 'name' from local storage using the "const" command
    const backgroundColor = localStorage.getItem('background-color'); // Retrieves the 'background-color' from local storage using the "const" command
    const foregroundColor = localStorage.getItem('foreground-color'); // Retrieves the 'foreground-color' from local storage using the "const" command

    if (name) { // Checks if 'name' exists within local storage using the "if" command
        document.getElementById('greeting').textContent = `Welcome, ${name}!`; // Sets the greeting text with the retrieved name
    }
    if (backgroundColor) { // Checks if 'background-color' exists within local storage using the "if" command
        document.body.style.backgroundColor = backgroundColor; // Sets the background color of the body with the retrieved color
    }
    if (foregroundColor) { // Checks if 'foreground-color' within local storage exists using the "if" command
        document.body.style.color = foregroundColor; // Sets the text color of the body with the retrieved color
    }
}

function savePreferences(event) { // Function command designed to save the user's preferences to local storage
    event.preventDefault(); // Prevents the default action from occurring when submitting a form
    
    const name = document.getElementById('name').value; // Stores the name value to the local storage
    const backgroundColor = document.getElementById('background-color').value; // Stores the background color to the local storage
    const foregroundColor = document.getElementById('foreground-color').value; // Stores the foreground color to the local storage
    
    localStorage.setItem('name', name); // Stores the name value to the local storage
    localStorage.setItem('background-color', backgroundColor); // Stores the selected background color value to the local storage
    localStorage.setItem('foreground-color', foregroundColor); // Stores the selected foreground color value to the local storage
    alert('Preferences saved!'); // Pop-up that notifies the user that their preferences were saved
    applyPreferences(); // Applies the user's preferences after they saves their changes
}
document.getElementById('preferences-form').addEventListener('submit', savePreferences); // An event listener designed to listen for the submission of the form
window.onload = applyPreferences; // Applies the user's preferences whenever the page loads