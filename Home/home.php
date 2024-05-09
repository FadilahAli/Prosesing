<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prosecing Image And Audio</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
<header>
        <div class="container">
            <div class="logo">
                <img src="../asset/lg.png" alt="">
            </div>
            <nav>
                <ul>
                    <li><a href="home.php">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <h1>Image And Audio Processing</h1>
        <div class="menu">
            <button class="active" id="imageBtn">Image Processing</button>
            <button id="audioBtn">Audio Processing</button>
        </div>
        <div id="imageSection" class="section">
            <h2>Image Processing</h2>
            <input type="file" id="imageInput" accept="image/*">
            <label for="imageWidth">New Width (px):</label>
            <input type="number" id="imageWidth">
            <label for="imageHeight">New Height (px):</label>
            <input type="number" id="imageHeight">
            <button onclick="resizeImage()">Resize Image</button>
            <div id="imagePreview"></div>
            <a id="downloadLink" download="resized_image.jpg" style="display: none;">Download Resized Image</a>
        </div>
        <div id="audioSection" class="section" style="display: none;">
            <h2>Audio Processing</h2>
            <input type="file" id="audioInput" accept="audio/*">
            <label for="speed">Speed:</label>
            <input type="number" id="speed" value="1" step="0.1">
            <button onclick="playAudio()">Play Audio</button>
            <button onclick="stopAudio()">Stop Audio</button>
            <button onclick="downloadAudio()">Download Audio</button>
        </div>
    </div>
    <script src="../js/script.js"></script>
</body>
</html>
