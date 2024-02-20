var image = document.getElementById("qr-image");
let msg = document.getElementById("message");
let qr_section = document.querySelector(".qr-section");
let user_input;
// setting qr_section to display none
function removeMessages() {
  qr_section.style.display = "none";
  msg.style.display = "none";
}

// showing qr-section
function showQR_section() {
  qr_section.style.display = "inline";
  qr_section.style.boxShadow = "0 0 0.75rem #0C2D57";
}

document.getElementById("generateBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (image.src !== "") {
    image.style.display = "none";
  }
  user_input = document.getElementById("user_input").value;

  if (user_input.trim() !== "") {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input}`;
    image.src = url;
    image.style.mixBlendMode = "multiply";
    image.addEventListener("load", () => {
      showQR_section();
      image.style.display = "block";
    });

    document
      .getElementById("downloadBtn")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        const response = await fetch(image.src);
        const blob = await response.blob();
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "qrcode.jpg";
        downloadLink.click();
      });
  } else {
    showQR_section();
    msg.textContent = `There's Nothing in the box`;
    msg.style.display = "inline";

    setTimeout(removeMessages, 3000);
  }
});
document.getElementById("downloadBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  if (user_input === "") {
    showQR_section();
    msg.style.display = "inline";
    msg.textContent = `There's NO QR to be downloaded`.trim();

    setTimeout(removeMessages, 3000);
  }
});

// Clear the input field
document.getElementById("clear").addEventListener("click", (e) => {
  // e.preventDefault();
  image.src = "";
  removeMessages();
});
