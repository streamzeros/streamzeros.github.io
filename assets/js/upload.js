document.getElementById("upload-btn").addEventListener("click", function () {
    let title = document.getElementById("video-title").value;
    let url = document.getElementById("video-url").value;
    let thumbnail = document.getElementById("video-thumbnail").value;

    if (!title || !url || !thumbnail) {
        alert("Harap isi semua kolom!");
        return;
    }

    let newVideo = {
        id: Date.now().toString(),
        title: title,
        url: url,
        thumbnail: thumbnail,
        views: 0,
        date: new Date().toISOString()
    };

    fetch("https://api.npoint.io/YOUR_JSON_ID")
        .then(response => response.json())
        .then(data => {
            data.videos.push(newVideo);
            return fetch("https://api.npoint.io/YOUR_JSON_ID", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        })
        .then(() => {
            alert("Video berhasil diunggah!");
            window.location.href = "index.html";
        })
        .catch(error => console.error("Gagal menyimpan data!", error));
});