document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

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