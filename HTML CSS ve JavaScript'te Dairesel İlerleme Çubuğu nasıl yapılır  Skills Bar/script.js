let circulerProgress = document.querySelector(".circular-progress"), 
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
progressEndValue = 85,
speed = 50;

let progress = setInterval(() =>{
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circulerProgress.style.background = `conic-gradient(#cab486 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress)
    }
}, speed)