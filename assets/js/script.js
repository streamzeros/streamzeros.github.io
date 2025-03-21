document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.npoint.io/YOUR_JSON_ID") // Ganti dengan ID JSON dari nPoint.io
        .then(response => response.json())
        .then(data => {
            displayVideos(data.videos);
        })
        .catch(error => console.error("Gagal mengambil data!", error));
});

function displayVideos(videos) {
    let latestVideos = document.getElementById("latest-videos");
    let trendingVideos = document.getElementById("trending-videos");

    latestVideos.innerHTML = "";
    trendingVideos.innerHTML = "";

    let sortedVideos = [...videos].sort((a, b) => new Date(b.date) - new Date(a.date)); // Urut berdasarkan terbaru
    let trending = [...videos].sort((a, b) => b.views - a.views); // Urut berdasarkan tayangan

    sortedVideos.slice(0, 4).forEach(video => {
        latestVideos.innerHTML += createVideoCard(video);
    });

    trending.slice(0, 4).forEach(video => {
        trendingVideos.innerHTML += createVideoCard(video);
    });
}

function createVideoCard(video) {
    return `
        <div class="video-card">
            <a href="watch.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
                <p>${video.views} tayangan</p>
            </a>
        </div>
    `;
}