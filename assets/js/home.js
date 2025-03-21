document.addEventListener("DOMContentLoaded", function () {
    console.log("home.js dimuat!");

    const videoList = document.getElementById("video-list");

    if (videoList) {
        let videos = JSON.parse(localStorage.getItem("videos")) || [];

        if (videos.length === 0) {
            videoList.innerHTML = "<p>Belum ada video.</p>";
            return;
        }

        videos.forEach(video => {
            let videoElement = `
                <div class="video-item">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <h3>${video.title}</h3>
                    <p>Ditonton: ${video.views} kali</p>
                    <a href="${video.url}" target="_blank">Tonton</a>
                </div>
            `;
            videoList.innerHTML += videoElement;
        });

        console.log("Video berhasil dimuat!");
    } else {
        console.error("Elemen video-list tidak ditemukan!");
    }
});