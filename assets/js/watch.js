document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get("id");

    fetch("https://api.npoint.io/YOUR_JSON_ID") // Ganti dengan ID JSON dari nPoint.io
        .then(response => response.json())
        .then(data => {
            const video = data.videos.find(v => v.id === videoId);
            if (video) {
                document.getElementById("video-player").src = video.url;
                document.getElementById("video-title").textContent = video.title;
                document.getElementById("video-views").textContent = video.views + " tayangan";
            }
        })
        .catch(error => console.error("Gagal mengambil data!", error));
});
