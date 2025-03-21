document.addEventListener("DOMContentLoaded", function () {
    console.log("home.js dimuat!");

    const videoList = document.getElementById("latest-videos"); // Sesuaikan dengan ID yang dipakai

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
                    <div class="overlay">👁️ ${video.views}</div>
                    <div class="duration">${video.duration}</div>
                    <h3>${video.title}</h3>
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