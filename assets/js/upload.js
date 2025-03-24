document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let videoUrl = document.getElementById("videoUrl").value;
    let thumbnailUrl = document.getElementById("thumbnailUrl").value || "https://via.placeholder.com/150";

    let uploadStatus = document.getElementById("uploadStatus");

    if (!title || !videoUrl) {
        uploadStatus.innerHTML = "<p style='color: red;'>Judul dan URL Video harus diisi!</p>";
        return;
    }

    let newVideo = {
        "title": title,
        "url": videoUrl,
        "thumbnail": thumbnailUrl
    };

    try {
        let response = await fetch("/data/videos.json");
        let videos = await response.json();

        videos.unshift(newVideo); // Tambah video ke daftar

        await fetch("/data/videos.json", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(videos)
        });

        uploadStatus.innerHTML = `<p style='color: green;'>Video berhasil ditambahkan!</p>`;
        document.getElementById("uploadForm").reset();

    } catch (error) {
        console.error("Gagal update videos.json:", error);
        uploadStatus.innerHTML = "<p style='color: red;'>Gagal menyimpan video!</p>";
    }
});