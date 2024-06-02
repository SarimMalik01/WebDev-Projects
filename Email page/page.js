const form = document.querySelector("form");
console.log("Form:", form); // Debugging statement to check if form is selected correctly

const statusTxt = form.querySelector(".button-area span");
console.log("Status Text:", statusTxt); // Debugging statement to check if statusTxt is selected correctly

form.onsubmit = (e) => {
    e.preventDefault(); // prevents form submission
    console.log("Form submission prevented"); // Debugging statement to verify if form submission is prevented

    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); // creating new XML object
    console.log("XMLHttpRequest created"); // Debugging statement to verify if XMLHttpRequest is created

    xhr.open("POST", "message.php", true); // sending POST request to message.php file, true is for asynchronous
    xhr.onload = () => { // once AJAX loaded, request has been completed successfully, HTTP response has been received and the xhr is ready to process it
        console.log("Ready state: " + xhr.readyState); // Debugging statement to check ready state
        console.log("Status: " + xhr.status); // Debugging statement to check status

        if (xhr.readyState == 4 && xhr.status == 200) { // if AJAX response status is 200 & ready state is 4, there is no error
            let response = xhr.response; // storing AJAX response in a response variable
            console.log("Response:", response); // Debugging statement to verify response
        }
    };

    xhr.send();
};
