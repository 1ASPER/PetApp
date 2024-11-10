// TASK 1
function check() {
    const name = document.getElementById('get-name').value;
    const email = document.getElementById('get-email').value;
    const password = document.getElementById('get-password').value;
    const error_message = document.getElementById('error-message');

    error_message.textContent = "";

    if (!name) {    
        error_message.textContent = "Error: empty name";
        return false;
    }
    if (!email.includes("@")) {
        error_message.textContent = "Error: incorrect email ('@' is absent)";
        return false;
    }
    if (!email.includes(".")) {
        error_message.textContent = "Error: incorrect email ('.' is absent)";
        return false;
    }
    if (password.length < 8) {  
        error_message.textContent = "Error: password length is less than 8 symbols";
        return false;
    }

    error_message.textContent = "Success :)";
    error_message.style = "color: green;"

    alert("Success registation!");
    return true;
}

// TASK 2
function calculate() { 
    const num1 = parseFloat(document.getElementById("form-calc__num1").value);
    const num2 = parseFloat(document.getElementById("form-calc__num2").value);
    const operation = document.getElementById("form-calc__operation").value;

    const answer = document.getElementById("answer");

    if (isNaN(num1) || isNaN(num2)) {
        // alert('Error: Empty or invalid input');
        answer.textContent = "Error: Empty or invalid input";
        return false;
    }

    let answers = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num2 !== 0 ? num1 / num2 : "INF (division by 0)"
    };

    answer.textContent = `${num1} ${operation} ${num2} = ${answers[operation]}`;
    return false;
}

// TASK 3
const gallery = document.getElementById("gallery");
const fullViewContainer = document.getElementById("fullViewContainer");
const fullViewCloseButton = document.getElementById("fullViewCloseButton");
const fullViewImage = document.getElementById("fullViewImage");

const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/385/025/small_2x/a-cute-surprised-black-haired-anime-girl-under-the-blooming-sakura-ai-generated-photo.jpg"
]

images.forEach((imgSrc) => {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.className = "gallery__image";

    imageElement.addEventListener("click", () => {
        fullViewImage.src = imgSrc;
        fullViewContainer.style.display = "flex";
    });

    gallery.appendChild(imageElement);
});

fullViewCloseButton.addEventListener("click", () => {
    fullViewContainer.style.display = "none";
});

