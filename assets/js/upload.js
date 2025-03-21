document.addEventListener("DOMContentLoaded", function () {
    const uploadBtn = document.getElementById("upload-btn");

    if (uploadBtn) {
        uploadBtn.addEventListener("click", function () {
            const title = document.getElementById("video-title").value.trim();
            const url = document.getElementById("video-url").value.trim();
            const thumbnail = document.getElementById("video-thumbnail").value.trim();

            if (title === "" || url === "" || thumbnail === "") {
                alert("Harap isi semua kolom!");
                return;
            }

            console.log("Data akan diupload:", { title, url, thumbnail });

            // Simulasi sukses upload (nanti bisa diganti dengan API backend)
            setTimeout(() => {
                alert("Video berhasil diupload!");
            }, 500);
        });
    } else {
        console.error("Tombol upload tidak ditemukan!");
    }
});