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


document.getElementById("no").addEventListener("click", function () {
    let yesButton = document.getElementById("yes");
    
    increaseSizeInterval = setInterval(function () {
        let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize + 10) + "px";
        yesButton.style.padding = (currentSize + 10) + "px";
    }, 510);
});
