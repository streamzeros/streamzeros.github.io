document.addEventListener("DOMContentLoaded", function () {
    const videoList = document.getElementById("video-list");

    let videos = JSON.parse(localStorage.getItem("videos")) || [];

    // Jika belum ada video, tampilkan placeholder
    if (videos.length === 0) {
        for (let i = 0; i < 6; i++) {
            let placeholder = `
                <div class="video-item">
                    <img src="assets/img/placeholder.jpg" alt="Video Kosong">
                    <div class="video-info">
                        <h3>Belum ada video</h3>
                        <p class="views">Ditonton: 0 kali</p>
                    </div>
                </div>
            `;
            videoList.innerHTML += placeholder;
        }
    } else {
        // Tampilkan video yang tersedia
        videoList.innerHTML = "";
        videos.forEach(video => {
            let videoElement = `
                <div class="video-item">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="video-info">
                        <h3>${video.title}</h3>
                        <p class="views">Ditonton: ${video.views} kali</p>
                        <a href="${video.url}" target="_blank">Tonton</a>
                    </div>
                </div>
            `;
            videoList.innerHTML += videoElement;
        });
    }
});