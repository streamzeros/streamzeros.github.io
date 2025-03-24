document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let videoFile = document.getElementById("videoFile").files[0];
    let thumbnailFile = document.getElementById("thumbnailFile").files[0];
    let title = document.getElementById("title").value;
    let uploadStatus = document.getElementById("uploadStatus");

    if (!videoFile || !thumbnailFile || !title) {
        uploadStatus.innerHTML = "<p style='color: red;'>Semua field harus diisi!</p>";
        return;
    }

    let formData = new FormData();
    formData.append("video", videoFile);
    formData.append("thumbnail", thumbnailFile);
    formData.append("title", title);

    uploadStatus.innerHTML = "<p style='color: blue;'>Mengupload...</p>";

    try {
        let response = await fetch("https://api.videy.co/upload", {
            method: "POST",
            body: formData
        });

        let result = await response.json();
        
        if (result.success) {
            uploadStatus.innerHTML = `<p style='color: green;'>Upload berhasil! <a href="${result.video_url}" target="_blank">Lihat Video</a></p>`;

            // Tambahkan video ke database lokal (videos.json)
            updateVideosJson(title, result.video_url, result.thumbnail_url);
        } else {
            uploadStatus.innerHTML = "<p style='color: red;'>Gagal upload!</p>";
        }
    } catch (error) {
        console.error("Upload error:", error);
        uploadStatus.innerHTML = "<p style='color: red;'>Terjadi kesalahan saat mengupload.</p>";
    }
});

// Fungsi untuk menambahkan video baru ke videos.json
async function updateVideosJson(title, videoUrl, thumbnailUrl) {
    try {
        let response = await fetch("/data/videos.json");
        let videos = await response.json();

        videos.unshift({
            "title": title,
            "url": videoUrl,
            "thumbnail": thumbnailUrl
        });

        await fetch("/data/videos.json", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(videos)
        });

        console.log("Video berhasil ditambahkan ke videos.json");
    } catch (error) {
        console.error("Gagal update videos.json:", error);
    }
}