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
    "https://videogames.si.com/.image/c_fill,w_1200,ar_1:1,f_auto,q_auto,g_auto/MjAxMDQ1NTUyNjk0MDQ0MDQ5/genshin-impact-furina-card-1.png",
    "https://s1.zerochan.net/Lumine.600.3126229.jpg",
    "https://r2.erweima.ai/imgcompressed/compressed_96ebffb913e56fb3d24d75004d0ee08a.webp",
    "https://quickbutik.imgix.net/16840p/products/60f005a527786.jpeg",
    "https://videogames.si.com/.image/c_fill,w_1200,ar_1:1,f_auto,q_auto,g_auto/MTk1Mjk1MDkxNTgwMDIwMDI2/genshin-impact-ayaka-card-1.png",
    "https://i.etsystatic.com/21165787/r/il/8c8cb1/4243413814/il_570xN.4243413814_pxef.jpg"
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

