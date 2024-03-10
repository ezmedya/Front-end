const imageElement = document.getElementById("image");
const numberElement = document.getElementById("number");

let count = 0;
const maxCount = 100;

const incrementLoader = () =>{
    if(count < maxCount){
        count++;

    numberElement.textContent = count + "%";

    const opacity = count / maxCount;
    imageElement.style.opacity = opacity;

    imageElement.style.filter = `blue($(10 - 10 * opacity)px)`;
    }
    else if(count === maxCount){
        clearInterval(loaderInterval);
        numberElement.textContent= " ";
    }
};

const loaderInterval = setInterval(incrementLoader, 60);
