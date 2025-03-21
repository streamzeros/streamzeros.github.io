fetch('data/videos.json')
    .then(response => response.json())
    .then(data => {
        let latestVideos = document.getElementById('latest-videos');
        let trendingVideos = document.getElementById('trending-videos');

        data.videos.sort((a, b) => new Date(b.date) - new Date(a.date)); // Urutkan dari terbaru
        let latest = data.videos.slice(0, 6); // Ambil 6 video terbaru

        data.videos.sort((a, b) => b.views - a.views); // Urutkan berdasarkan tayangan
        let trending = data.videos.slice(0, 6); // Ambil 6 video trending

        latest.forEach(video => latestVideos.innerHTML += createVideoCard(video));
        trending.forEach(video => trendingVideos.innerHTML += createVideoCard(video));
    });

function createVideoCard(video) {
    return `
        <div class="video-card">
            <a href="video.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
            <p>${video.views} tayangan</p>
        </div>
    `;
}