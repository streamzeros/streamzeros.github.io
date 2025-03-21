fetch('data/videos.json')
    .then(response => response.json())
    .then(data => {
        let latestVideos = document.getElementById('latest-videos');
        let trendingVideos = document.getElementById('trending-videos');

        data.videos.sort((a, b) => new Date(b.date) - new Date(a.date));
        let latest = data.videos.slice(0, 6);

        data.videos.sort((a, b) => b.views - a.views);
        let trending = data.videos.slice(0, 6);

        latest.forEach(video => latestVideos.innerHTML += createVideoCard(video));
        trending.forEach(video => trendingVideos.innerHTML += createVideoCard(video));
    });

function createVideoCard(video) {
    return `
        <div class="video-card">
            <a href="video.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-info">
                    <span>👁️ ${video.views}</span> | ⏱️ ${video.duration} | 👍 ${video.likes}%
                </div>
                <h3>${video.title}</h3>
            </a>
        </div>
    `;
}