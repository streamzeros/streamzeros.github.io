const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

fetch('data/videos.json')
    .then(response => response.json())
    .then(data => {
        let video = data.videos.find(v => v.id == videoId);
        if (!video) {
            document.getElementById('video-player').innerHTML = '<p>Video tidak ditemukan.</p>';
            return;
        }

        document.getElementById('video-title').innerText = video.title;
        document.getElementById('video-embed').src = video.embed;
        document.getElementById('video-views').innerText = video.views;

        updateViewCount(videoId);
    });

function updateViewCount(videoId) {
    let viewed = localStorage.getItem('viewed_' + videoId);
    if (!viewed) {
        localStorage.setItem('viewed_' + videoId, true);
        fetch('data/videos.json')
            .then(response => response.json())
            .then(data => {
                let video = data.videos.find(v => v.id == videoId);
                if (video) {
                    video.views++;
                    document.getElementById('video-views').innerText = video.views;
                }
            });
    }
}