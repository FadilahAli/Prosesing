document.getElementById("imageBtn").addEventListener("click", function() {
    document.getElementById("imageSection").style.display = "block";
    document.getElementById("audioSection").style.display = "none";
    document.getElementById("imageBtn").classList.add("active");
    document.getElementById("audioBtn").classList.remove("active");
});

document.getElementById("audioBtn").addEventListener("click", function() {
    document.getElementById("audioSection").style.display = "block";
    document.getElementById("imageSection").style.display = "none";
    document.getElementById("audioBtn").classList.add("active");
    document.getElementById("imageBtn").classList.remove("active");
});

function resizeImage() {
    let file = document.getElementById("imageInput").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event) {
        let img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let maxWidth = parseInt(document.getElementById("imageWidth").value);
            let maxHeight = parseInt(document.getElementById("imageHeight").value);
            let ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            let resizedImage = canvas.toDataURL('image/jpeg');
            document.getElementById("imagePreview").innerHTML = '<img src="' + resizedImage + '">';
            document.getElementById("downloadLink").href = resizedImage;
            document.getElementById("downloadLink").style.display = "block";
        }
    }
}

function playAudio() {
    let file = document.getElementById("audioInput").files[0];
    let objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
    audioPlayer.play();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function downloadAudio() {
    let file = document.getElementById("audioInput").files[0];
    let url = URL.createObjectURL(file);
    let a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}
