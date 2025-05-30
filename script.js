lhaconst categoryDescriptions = {
  "List Admin": "List Admin Grup Server",
  "Donasi": "Donasi Untuk Perpanjangan Server\nRp 70.000/Rp 110.000",
  "Topup": "Topup Game",
  "Instagram": "Suntik Instagram",
  "Tik Tok": "Suntik Tik Tok",
};

const categories = {
  "List Admin": [
    { name: "Owner", subname: "Nerrieru", image: "image.jpg", desc: "Pemilik Group\nDan\nPemilik Server" },
    { name: "Tangan Kanan", subname: "Faanrky", image: "image.jpg", desc: "Admin Dari Segala Admin" },
    { name: "Admin", subname: "Alvaro", image: "image.jpg", desc: "Admin Tetap\n(Orang Dalam)" },
    { name: "Admin", subname: "Raffi", image: "image.jpg", desc: "Admin" },
    { name: "Admin", subname: "Fauzan", image: "image.jpg", desc: "Admin" }
  ],
  "Donasi": [
    { name: "Top Donatur", subname: "Faanrky", image: "image.jpg", desc: "Rp. 30.000" },
    { name: "#2", subname: "Alvaro", image: "image.jpg", desc: "Rp. 20.000" },
    { name: "#3", subname: "Nerrieru", image: "image.jpg", desc: "Rp. 5.000" },
    { name: "#4", subname: "Hanayosiro", image: "image.jpg", desc: "Rp. 5.000" },
    { name: "#5", subname: "Lyne", image: "image.jpg", desc: "Rp. 5.000" },
    { name: "#6", subname: "Dann", image: "image.jpg", desc: "Rp. 5.000" }
  ]
};

function renderProducts() {
  const container = document.getElementById("listContainer");
  container.innerHTML = "";

  for (const category in categories) {
    const section = document.createElement("div");
    section.classList.add("category");

    section.innerHTML = `
      <h2>${category}</h2>
      <div class="category-desc">${categoryDescriptions[category] || ""}</div>
      <div class="slider" id="${category}"></div>
    `;
    container.appendChild(section);

    const slider = section.querySelector(".slider");
    categories[category].forEach((p, i) => {
      const formattedDesc = p.desc.replace(/\n/g, "<br>");
      slider.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <div class="title-group">
            <h3>${p.name}</h3>
            <h4>${p.subname}</h4>
          </div>
          <div class="desc" id="desc-${category}-${i}">${formattedDesc}</div>
          <div class="btn-group">
            <button class="btn" onclick="toggleDesc('${category}', ${i})">Lihat Deskripsi</button>
          </div>
        </div>
      `;
    });
  }
}

function toggleDesc(cat, index) {
  const el = document.getElementById(`desc-${cat}-${index}`);
  el.classList.toggle("show");
}

function scrollSlider(cat, dir) {
  const slider = document.getElementById(cat);
  slider.scrollLeft += dir * 220;
}

document.addEventListener("DOMContentLoaded", function () {
  const rulesBox = document.getElementById("rulesBox");
  const toggleBtn = document.getElementById("toggleRulesBtn");

  toggleBtn.addEventListener("click", function () {
    rulesBox.classList.toggle("show");
    toggleBtn.textContent = rulesBox.classList.contains("show") ? "Sembunyikan Rules" : "Tampilkan Rules";
  });

  renderProducts();
});
