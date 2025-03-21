document.addEventListener("DOMContentLoaded", function () {
    console.log("upload.js berhasil dimuat!");
    
    const uploadBtn = document.getElementById("upload-btn");
    
    if (uploadBtn) {
        console.log("Tombol upload ditemukan!");
        
        uploadBtn.addEventListener("click", function () {
            console.log("Tombol upload diklik!");

            // Ambil nilai dari input
            const title = document.getElementById("video-title").value.trim();
            const url = document.getElementById("video-url").value.trim();
            const thumbnail = document.getElementById("video-thumbnail").value.trim();

            // Validasi input
            if (title === "" || url === "" || thumbnail === "") {
                alert("Semua field harus diisi!");
                return;
            }

            // Buat objek video baru
            const newVideo = {
                id: Date.now().toString(),
                title: title,
                url: url,
                thumbnail: thumbnail,
                views: 0,
                date: new Date().toISOString()
            };

            console.log("Data video:", newVideo);

            // Simpan ke localStorage sementara (nanti bisa pakai API)
            let videos = JSON.parse(localStorage.getItem("videos")) || [];
            videos.push(newVideo);
            localStorage.setItem("videos", JSON.stringify(videos));

            alert("Video berhasil diupload!");
            window.location.href = "index.html"; // Redirect ke beranda
        });
    } else {
        console.error("Tombol upload TIDAK ditemukan!");
    }
});