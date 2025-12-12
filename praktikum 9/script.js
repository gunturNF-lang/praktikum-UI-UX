// ===========================
// LOGIN
// ===========================
function login() {
    let u = document.getElementById("user").value.trim();
    let p = document.getElementById("pass").value.trim();

    if (u === "user" && p === "user") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";
    } else {
        alert("Login gagal! Username atau password salah.");
    }
}

function logout() {
    location.reload();
}

// ===========================
// CHATBOX
// ===========================
function sendMessage() {
    let msg = document.getElementById("message").value;

    if (msg.trim() === "") return;

    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<div>${msg}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("message").value = "";
}

// ===========================
// IMAGE PICKER
// ===========================
function pickImage() {
    let file = document.getElementById("imageSelect").value;

    if (file !== "") {
        document.getElementById("previewImage").src = file;
        alert("Nama file: " + file);
    } else {
        document.getElementById("previewImage").src = "";
    }
}