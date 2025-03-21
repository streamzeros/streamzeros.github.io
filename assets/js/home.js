document.addEventListener("DOMContentLoaded", function () {
    const latestVideos = document.getElementById("latest-videos");
    const trendingVideos = document.getElementById("trending-videos");

    const dummyVideos = [
        { title: "Video 1", views: 100, thumbnail: "placeholder.jpg" },
        { title: "Video 2", views: 200, thumbnail: "placeholder.jpg" },
        { title: "Video 3", views: 300, thumbnail: "placeholder.jpg" },
        { title: "Video 4", views: 400, thumbnail: "placeholder.jpg" }
    ];

    function renderVideos(container, videos, count) {
        container.innerHTML = "";
        videos.slice(0, count).forEach(video => {
            container.innerHTML += `
                <div class="video-item">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <h3>${video.title}</h3>
                    <p>Ditonton: ${video.views} kali</p>
                </div>
            `;
        });
    }

    renderVideos(latestVideos, dummyVideos, 12);
    renderVideos(trendingVideos, dummyVideos, 6);
});

// Toggle Sidebar Menu
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
}