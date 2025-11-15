window.onload = function() {
    const kayitliNot = localStorage.getItem("notum");
    if (kayitliNot) {
        document.querySelector("textarea").value = kayitliNot;
    }
}

window.addEventListener('load', () => {
    const YuklemeEkrani = document.createElement('div');
    YuklemeEkrani.id = 'YuklemeEkrani';
    YuklemeEkrani.innerHTML = `<div class="daire"></div>`;
    document.body.appendChild(YuklemeEkrani);

    const baslangicZamani = Date.now();
    const minSure = 500;

    const gizlePreloader = () => {
        YuklemeEkrani.style.opacity = '0';
        setTimeout(() => {
            YuklemeEkrani.remove();
        }, 250);
    };

    const gecikme = Math.max(minSure - (Date.now() - baslangicZamani), 0);
    setTimeout(gecikme ? () => { setTimeout(gizlePreloader, 0); } : gizlePreloader, gecikme);
});

function EminMisinKapat() {
    document.getElementById("EminMisinBas").style.display = "none";
}

function NotuKaydet() {
    const notIcerik = document.querySelector("textarea").value;
    localStorage.setItem("notum", notIcerik);
    alert("✅ Not kaydedildi!");
}

function NotuKaydetVeÇık() {
    const notIcerik = document.querySelector("textarea").value;
    localStorage.setItem("notum", notIcerik);
    window.close();
}

let Silmek_Çıkmak = 2;

function Evet() {
    if (Silmek_Çıkmak === 2) {
        window.close();
    }

    if (Silmek_Çıkmak === 1) {
    localStorage.removeItem("notum");
    document.querySelector("textarea").value = "";
    alert("🗑️ Not silindi!");
    }
}

function NotuSil() {
    Silmek_Çıkmak = 1;
    document.getElementById("EminMisinYazı").innerHTML = "Notu Silmek İstediğinizden Emin Misiniz?";
    document.getElementById("KaydetVeÇık").style.display = "none"
    document.getElementById("EminMisinBas").style.display = "flex";
}

function SayfayıYenile() {
    Silmek_Çıkmak = 2;
    document.getElementById("EminMisinYazı").innerHTML = "Sayfayı Kaydetmeden Çıkmak İster Misin"
    document.getElementById("KaydetVeÇık").style.display = "inline-block"
    document.getElementById("EminMisinBas").style.display = "flex"
}
