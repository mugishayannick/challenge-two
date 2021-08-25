const textbox = document.getElementById("textbox");
const form = document.getElementById("form");
const message = document.getElementById("Message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(textbox.value === ""){
        message.innerText("Please enter all fields");
    }
})