document.getElementById("upload-btn").addEventListener("click", function () {
    let title = document.getElementById("video-title").value;
    let url = document.getElementById("video-url").value;
    let thumbnail = document.getElementById("video-thumbnail").value;

    if (!title || !url || !thumbnail) {
        alert("Semua kolom harus diisi!");
        return;
    }

    let newVideo = { title, url, thumbnail };

    // Fetch data dari /data/videos.json dulu jing
    fetch("/data/videos.json")
        .then(response => response.json())
        .then(data => {
            data.unshift(newVideo); // Tambahkan video baru di awal
            return fetch("/data/videos.json", {
                method: "PUT",  // ⚠ GitHub Pages tidak mendukung PUT
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        })
        .then(() => {
            alert("Video berhasil di-upload!");
            window.location.href = "index.html"; // Redirect ke home
        })
        .catch(error => console.error("Gagal menyimpan video!", error));
});
