let increaseSizeInterval; 

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dob = document.getElementById('dob').value;
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/; 

    if (datePattern.test(dob)) {
        if (dob === "17/03/2024") {
            alert("เข้าสู่ระบบสำเร็จ!");
            document.getElementById('error-message').style.display = "none";
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('questionContainer').style.display = 'block'; 
        } else {
            document.getElementById('error-message').innerText = "อ๋อคือลืมงี้เลย!!";
            document.getElementById('error-message').style.display = "block";
        }
    } else {
        
        document.getElementById('error-message').style.display = "block";
    }
});


document.getElementById("yes").addEventListener("click", function () {
    clearInterval(increaseSizeInterval); 
    showLovePage(); 
    increaseYesSize(); 
});


function increaseYesSize() {
    let yesButton = document.getElementById("yes");
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 10) + "px";
    yesButton.style.padding = (currentSize + 10) + "px";
}


function showLovePage() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("lovePage").style.display = "block";
}
const images = ["1.png", "2.png", "3.png" ,"4.png","5.png", "6.png","7.png","8.png","9.png","10.png","11.png"]; // รูปภาพที่ต้องการสไลด์
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // เปลี่ยนเป็นภาพถัดไป
    document.getElementById("defaultImage").src = images[currentImageIndex]; // เปลี่ยนรูปภาพ
}

setInterval(changeImage, 2000); 



document.getElementById("no").addEventListener("click", function () {
    let yesButton = document.getElementById("yes");
    
    increaseSizeInterval = setInterval(function () {
        let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize + 10) + "px";
        yesButton.style.padding = (currentSize + 10) + "px";
    }, 500);
});
