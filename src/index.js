// Test
import "./style.css";

// Example of how to use images in JS
import jsImage from "./assets/images/jsImageLoad.jpg";
const imageContainer = document.querySelector(".imageFromJS");
const image = document.createElement("img");
image.style.width = "500px";
image.style.height = "500px";
image.src = jsImage;
imageContainer.appendChild(image);
